import React, { useEffect, useState, useCallback, useMemo } from 'react';
import icons1 from "../../assets/icons1.svg";
import icons2 from "../../assets/icons2.svg";
import icons3 from "../../assets/icons3.svg";
import { useSelector, useDispatch } from 'react-redux';
import { fetchMentors } from '../../redux/mentorApi/mentorApiSlice';
import Loading from '../../shared/Loading/Loading';
import MentorCreate from '../Mentor-Create/MentorCreate';
import { fetchSpecializations } from '../../redux/SpecializationsSlice/Specializations';
import SpecCreate from '../SpecializationCreate/SpecCreate';
import { deactivateSpecialization, resetDeactivateStatus } from '../../redux/SpecializationsSlice/disactivateSpec';
import SpecializationList from './SpecializationList';
import { GetMentorCount, GetActiveMentorCount } from '../../redux/mentorApi/MentorCount';
import MentorCard from './MentorCard/MentorCard';
import { fetchMentorsByBlocked } from '../../redux/mentorApi/MentorByBlocked';
import { toast } from 'react-toastify';


const Mentory = () => {
  const dispatch = useDispatch();
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [blockedMenuIndex, setBlockedMenuIndex] = useState(null);
  const [mentorCreateModal, setMentorCreateModal] = useState(false);
  const [specCreateModal, setSpecCreateModal] = useState(false);
  const [mentorFilter, setMentorFilter] = useState("");

  const {
    mentors, loading, error,
    mentorCreateSuccess, mentorDeleteSuccess
  } = useSelector((state) => state.mentor);
  const { success, error: deactivateError, loading: deactivateLoading } = useSelector((state) => state.deactivateSpec);
  const { items, loading: itemLoading, error: itemsError } = useSelector((state) => state.spec);
  const { count, loading: countLoading, activeCount } = useSelector((state) => state.mentorCount);
  const { mentorsBlocked, loading: mentorBlockedLoading } = useSelector((state) => state.mentorBlocked);
  const { value } = useSelector((state) => state.inputSearchAdmin);
  const { searchmentors } = useSelector((state) => state.searchMentor);

  const spec = ["Все специальности", ...items];
  const blockedMentorIds = useMemo(() => mentorsBlocked?.map(m => m.mentorId) || [], [mentorsBlocked]);
  const isMentorBlocked = useCallback((id) => blockedMentorIds.includes(id), [blockedMentorIds]);

  const refreshData = useCallback(() => {
    dispatch(fetchMentors(mentorFilter));
    dispatch(fetchMentorsByBlocked());
    dispatch(GetMentorCount());
    dispatch(GetActiveMentorCount());
  }, [dispatch, mentorFilter]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  useEffect(() => {
    if (success) {
      dispatch(fetchSpecializations());
      dispatch(resetDeactivateStatus());
      refreshData();
      toast.success("Специализация успешно деактивирована!");
    }
  }, [success, dispatch, refreshData]);

  useEffect(() => {
    if (deactivateError) {
      toast.error(`Ошибка при удалении: ${deactivateError.message || deactivateError}`);
      dispatch(resetDeactivateStatus());
    }
  }, [deactivateError, dispatch]);

  useEffect(() => {
    dispatch(fetchSpecializations());
  }, [dispatch]);

  useEffect(() => {
    if (mentorCreateSuccess || mentorDeleteSuccess) {
      refreshData();
      dispatch(resetMentorCreateStatus());
      dispatch(resetMentorDeleteStatus());
    }
  }, [mentorCreateSuccess, mentorDeleteSuccess, dispatch, refreshData]);

  const handleFilterChange = useCallback((filter) => {
    setMentorFilter(filter === "Все специальности" ? "" : filter);
    setActiveMenuIndex(null);
    setBlockedMenuIndex(null);
  }, []);

  const handleDeactivate = useCallback((item) => {
    if (window.confirm(`Вы уверены, что хотите деактивировать "${item}"?`)) {
      dispatch(deactivateSpecialization(item));
    }
    setActiveMenuIndex(null);
    setBlockedMenuIndex(null);
  }, [dispatch]);

  const toggleMenu = useCallback((index, isBlocked = false) => {
    if (isBlocked) {
      setBlockedMenuIndex(prev => (prev === index ? null : index));
      setActiveMenuIndex(null);
    } else {
      setActiveMenuIndex(prev => (prev === index ? null : index));
      setBlockedMenuIndex(null);
    }
  }, []);

  const handleAction = useCallback((actionType) => {
    alert(actionType);
    setActiveMenuIndex(null);
    setBlockedMenuIndex(null);
  }, []);

  const handleMentorCreated = useCallback(() => {
    setMentorCreateModal(false);
    refreshData();
  }, [refreshData]);

  if (error || itemsError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-500">
        {error ? `Произошла ошибка: ${error}` : `Ошибка при загрузке специальностей: ${itemsError}`}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex gap-[20px] justify-center">
      {/* Левая панель */}
      <div className="flex gap-[20px]">
        <div className="w-[412px] bg-[#F5F6FB] p-6 rounded-xl shadow-lg">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-[16px] font-medium">Все менторы</div>
              <div className="text-[32px] font-bold">
                {countLoading ? count : count}
                <span className="text-[18px] font-medium"> чел</span>
              </div>
            </div>
            <div>
              <div className="text-[16px] font-medium">Активные менторы</div>
              <div className="text-[32px] font-bold">{activeCount?.activeMentors ?? 0}<span className="text-[18px] font-medium"> чел</span></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-[16px] mt-[20px]">
              <h4 className="text-[16px] font-medium text-[#6F6D73]">Все специальности</h4>
              <button onClick={() => setSpecCreateModal(true)} className="text-white bg-black w-[24px] h-[24px] rounded-full flex items-center justify-center">+</button>
            </div>
            <SpecializationList
              spec={spec}
              loading={itemLoading}
              toggleMenu={toggleMenu}
              activeMenuIndex={activeMenuIndex}
              handleFilterChange={handleFilterChange}
              handleAction={handleAction}
              handleDeactivate={handleDeactivate}
              deactivateLoading={deactivateLoading}
              setSpecCreateModal={setSpecCreateModal}
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="w-[700px] h-[174px] bg-[#F5F6FB] flex flex-col justify-between p-4 rounded-[24px]">
          <h2 className="text-black font-medium text-[20px]">Статистика</h2>
          <div className="flex gap-[40px] justify-between">
            <div>
              <p className="text-[16px] font-medium text-[#6F6D73]">Новые менторы</p>
              <h1 className="text-[42px] font-bold">{countLoading ? activeCount?.newMentors : activeCount?.newMentors}<span className="text-[18px]"> чел</span></h1>
            </div>
            <div>
              <p className="text-[16px] font-medium text-[#6F6D73]">Удалили аккаунт</p>
              <h1 className="text-[42px] font-bold text-[#E93535]">{countLoading ? activeCount?.deletedMentors : activeCount?.deletedMentors}<span className="text-[18px] text-black"> чел</span></h1>
            </div>
            <div>
              <p className="text-[16px] font-medium text-[#6F6D73]">Блокированы</p>
              <h1 className="text-[42px] font-bold">{countLoading ?  activeCount?.blockedMentors : activeCount?.blockedMentors}<span className="text-[18px]"> чел</span></h1>
            </div>
          </div>
        </div>
      </div>

      {/* Карточки менторов */}
      <div className="bg-[#F5F6FB] mt-[192px] ml-[-720px] w-[700px] h-[618px] p-4 rounded-[24px] overflow-y-scroll">
        <h1 className="text-[20px] font-medium text-black">Менторы</h1>
        <div className="flex justify-between items-center mt-[20px]">
          <p className="text-[16px] font-medium text-[#6F6D73]">Все менторы</p>
          <div className="flex gap-[12px]">
            <img className="w-[24px] h-[24px]" src={icons1} alt="" />
            <img className="w-[24px] h-[24px]" src={icons2} alt="" />
            <img onClick={() => setMentorCreateModal(true)} className="w-[24px] h-[24px] cursor-pointer" src={icons3} alt="" />
          </div>
        </div>

        {loading || mentorBlockedLoading ? (
          <Loading />
        ) : (
          <>
            {value ? (
              searchmentors?.map((mentor, index) => (
                <MentorCard
                  key={`search-${mentor.mentorId || index}`}
                  mentor={mentor}
                  index={index}
                  activeMenuIndex={activeMenuIndex}
                  toggleMenu={(idx) => toggleMenu(idx, isMentorBlocked(mentor.mentorId))}
                  handleAction={handleAction}
                  isBlocked={isMentorBlocked(mentor.mentorId)}
                  onSuccess={() => {refreshData(); setMentorCreateModal(false);}}
                />
              ))
            ) : (
              <>
                {mentorsBlocked?.map((mentor, index) => (
                  <MentorCard
                    key={`blocked-${mentor.mentorId || index}`}
                    mentor={mentor}
                    index={index}
                    activeMenuIndex={blockedMenuIndex}
                    toggleMenu={(idx) => toggleMenu(idx, true)}
                    handleAction={handleAction}
                    blocked={true}
                    onSuccess={() => {refreshData(); setMentorCreateModal(false);} }

                  />
                ))}
                {mentors?.map((mentor, index) => (
                  <MentorCard
                    key={`mentor-${mentor.mentorId || index}`}
                    mentor={mentor}
                    index={index}
                    activeMenuIndex={activeMenuIndex}
                    toggleMenu={(idx) => toggleMenu(idx, false)}
                    handleAction={handleAction}
                    onSuccess={() => {refreshData(); setMentorCreateModal(false);}}
                  />
                ))}
              </>
            )}
            {!loading && !mentorBlockedLoading &&
              ((value && searchmentors.length === 0) ||
                (!value && mentors.length === 0 && mentorsBlocked.length === 0)) && (
                <div className="flex justify-center items-center h-[30%]">
                  <h1 className="text-3xl font-bold">Нет менторов</h1>
                </div>
              )}
          </>
        )}
      </div>

      {/* Модалки */}
      {mentorCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0101019c] bg-opacity-50 z-50">
          <div className="p-6 rounded-lg shadow-lg w-[560px] h-[500px] relative flex items-center justify-center">
            <MentorCreate
              onClose={() => setMentorCreateModal(false)}
              onSuccess={handleMentorCreated} />
          </div>
        </div>
      )}

      {specCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0101019c] bg-opacity-50 z-50">
          <div className="rounded-lg w-[439px] h-[313px] relative flex items-center justify-center">
            <SpecCreate
              onClose={() => setSpecCreateModal(false)}
              onSuccess={() => {
                setSpecCreateModal(false);
                dispatch(fetchSpecializations());
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentory;
