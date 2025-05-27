// components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import ava1 from "../../assets/ava1.svg"
import star1 from "../../assets/star1.svg"
import star2 from "../../assets/star2.svg"
import Vector1 from '../../assets/Vector (34).svg';
import Vector2 from '../../assets/Vector (35).svg';
import './Dashboard.scss';
import { blockUser, fetchUserProfile, UnblockUser } from '../../redux/Users/Users';
import { CgUnblock } from 'react-icons/cg';
import BlockModal from '../BlockModal/BlockModal';
import { fetchActiveUsers } from '../../redux/Users/Active';
import { fetchStatistics } from '../../redux/Users/Statistic';
import UserDetail from './UserDetail';

const USERS_PER_PAGE = 8;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: users = [], loading, error } = useSelector((state) => state.users);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMenuu, setActiveMenuu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openBlockModal, setOpenBlockModal] = useState(false);
  const [openBanModal, setOpenBanModal] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUserAction = (userId, action) => {
    if (action === 'Данные') {
      setSelectedUserId(userId);
      setShowModal(true);
    }
  };
const [modalUser, setModalUser] = useState(null); // пользователь, которого блокируют
const [modalAction, setModalAction] = useState(null); // 'block' или 'unblock'
  const { users: active, loading: activeloading, error:activeError } = useSelector(state => state.activeUsers);
    const { data, loading:staticloading, error:staticerror } = useSelector((state) => state.statistics);
  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchActiveUsers());
  }, [dispatch]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu-wrapper') && !e.target.closest('.menu-button')) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // const handleUserAction = (userId, action) => {
  //   console.log(`Действие "${action}" для пользователя ${userId}`);
  //   setActiveMenu(null);
  // };

 const filteredActiveUsers = active
  .filter(user => {
    if (filter !== 'all' && user.status !== filter) return false;
    if (searchQuery && !user.name?.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  })
  .sort((a, b) => {
    const nameA = a.name?.toLowerCase() || '';
    const nameB = b.name?.toLowerCase() || '';
    return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

const filteredAllUsers = users
  .filter(user => {
    if (filter !== 'all' && user.status !== filter) return false;
    if (searchQuery && !user.name?.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  })
  .sort((a, b) => {
    const nameA = a.name?.toLowerCase() || '';
    const nameB = b.name?.toLowerCase() || '';
    return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

const paginatedUsers = filteredAllUsers.slice(
  (currentPage - 1) * USERS_PER_PAGE,
  currentPage * USERS_PER_PAGE
);

const totalPages = Math.ceil(filteredAllUsers.length / USERS_PER_PAGE);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePagination = () => {
    const delta = 2;
    const range = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) range.unshift('...');
    if (currentPage + delta < totalPages - 1) range.push('...');

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  if (loading || activeloading || staticloading) return <div>Загрузка...</div>;
  if (error || activeError || staticerror) return <div>Ошибка: {error}</div>;

  return (
    <div className="container">
      <div className="dashboard">
        <main className="main-content">
          <div className="secctions">
            <div className="user-stats-card">
              <div className="stats-header">
                <div className="stat-block">
                  <p>Все пользователи</p>
                  <h2>{users.length} <span>чел</span></h2>
                </div>
                <div className="stat-block">
                  <p>Активные пользователи</p>
                  <h2>{active.length} <span>чел</span></h2>
                </div>
              </div>

              <div className="users-title">Активные пользователи</div>
             <ul className="user-list">
              {filteredActiveUsers.map(user => (
                <li key={user.userId} className="user-item">
                  <img src={user.avatarUrl || "/avatar.png"} alt={`Аватар ${user.firstName}`} className="user-avatar" />
                  <div className="user-info">
                    <strong>{user.firstName} {user.secondName}</strong>
                    <p>Был(а) в сети: {user.totalActive}</p>
                  </div>
                  <div className="user-menu-wrapper">
                    <button
                      className="menu-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuu(activeMenu === user.userId ? null : user.userId);
                      }}
                      aria-label="Действия"
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {activeMenuu === user.userId && (
                      <ul className="user-actions-menu">
                        <li>Данные</li>
                        <li>Изменить данные</li>
                        <li className="block">Заблокировать</li>
                        <li className="delete-action" >Удалить аккаунт</li>
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            </div>

            <section className="user-list-section">
                { data ? (
              <div className="summary-card">
                <h1>Статистика</h1>
                    <div><h3>Новые пользователи</h3><p className="count">{data.newUsersCount} <span>чел</span></p></div>
                    <div><h3>Удалили аккаунт</h3><p className="count red">{data.deletedUsersCount}<span>чел</span></p></div>
                    <div><h3>Заблокированы</h3><p className="count">{data.blockedUsersCount}<span>чел</span></p></div>
              </div>
                ) : (
                  <p>нет данных</p>
                )
        
                }
         

              <ul className="user-list">
                <div className="head-list"><h2>Пользователи</h2></div>
                <div className="section-header">
                  <h3>Все пользователи</h3>
                  <div className="w-[50px] flex justify-between">
                    <button onClick={() => setSortOrder('asc')}><img src={Vector1} alt="Sort Asc" /></button>
                    <button onClick={() => setSortOrder('desc')}><img src={Vector2} alt="Sort Desc" /></button>
                  </div>
                </div>

                {paginatedUsers.map((user) => (
                  <li key={user.id} className="user-item">
                    <img src={user.avatarUrl || "/avatar.png"} alt={`Аватар ${user.name}`} className="user-avatar" />
                    <div className="user-info">
                      <strong>{user.firstName}{user.secondName}</strong>
                      <p>Был(а) в сети: {user.lastActive}</p>
                    </div>
                    <div className="deleted">
                      <span className={`status-badge ${user.status}`}>
                        {{
                          active: 'Активен',
                          blocked: 'Заблокирован',
                          deleted: 'Удалён',
                          'not-passed': 'Не прошёл курс'
                        }[user.status]}
                      </span>
                      <p>{user.countBuy} покупок</p>
                    </div>
                    <div className="user-menu-wrapper">
                      <button
                        className="menu-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu(activeMenu === user.userId ? null : user.userId);
                        }}
                        aria-label="Действия"
                      >
                        <BsThreeDotsVertical />
                      </button>

                  {activeMenu === user.userId && (
  <ul className="user-actions-menu">
    <li onClick={() => handleUserAction(user.userId, 'Данные')}>Данные</li>
    <li onClick={() => console.log('Изменить данные')}>Изменить данные</li>
  <li
  className="block"
  onClick={() => {
    setModalUser(true)
    setActiveMenu(null);
  }}
>
  Заблокировать
</li>
    <li className="delete-action" onClick={() => {
      setOpenBlockModal(true);
      setSelectedUserId(user.userId);
      setActiveMenu(null);
    }}>Удалить аккаунт</li>
  </ul>
)}

                    </div>
                  </li>
                ))}
              </ul>

              <div className="pagination">
                <div>
                  {generatePagination().map((page, index) =>
                    page === '...' ? (
                      <span key={index} className="dots">...</span>
                    ) : (
                      <button
                        key={page}
                        className={currentPage === page ? 'active' : ''}
                        onClick={() => handlePageClick(page)}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <div>
                  <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                    <MdKeyboardDoubleArrowLeft />
                  </button>
                  <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                    <MdKeyboardDoubleArrowRight />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {openBlockModal && (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex justify-center items-center">
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="bg-gray-200 rounded-[24px] p-5 max-w-[360px] w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-center mb-4 font-bold text-[23px]">
        Вы точно хотите <br /> удалить аккаунт?
      </h1>

      <div className="flex items-start mb-4">
        <img src={ava1} alt="Аватар" className="w-10 h-10 rounded-full" />

        <div className="ml-4 flex flex-col">
          <div className="flex items-center">
            <h2 className="font-semibold text-base">Марина Сополова</h2>
            <img src={star1} alt="star1" className="w-[45px] h-5 ml-[35px]" />
          </div>

          <div className="flex items-center text-sm text-gray-600 mt-1">
            <p>UX/UI специалист · 2 года</p>
            <img src={star2} alt="star2" className="w-[45px] h-5 ml-2" />
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col gap-2">
        <button
          onClick={() => setOpenBlockModal(false)}
          style={{ backgroundColor: 'rgba(35, 175, 206, 1)' }}
          className="p-2 px-30 rounded-[10px] text-white mb-2"
        >
          Отмена
        </button>

        <button
  onClick={() => {
    setOpenBlockModal(false);
  }}
  className="!bg-black p-2 px-30 rounded-[10px] text-white"
>
  Удалить
</button>

      </div>
    </div>
  </div>
      )}
      {/*  */}
      {modalUser && (
  <BlockModal
    user={modalUser}
    action={modalAction}
    onConfirm={() => {
      if (modalAction === 'block') {
        dispatch(blockUser(modalUser.id));
      } else {
        dispatch(UnblockUser(modalUser.id));
      }
      setModalUser(null);
      setModalAction(null);
    }}
    onCancel={() => {
      setModalUser(null);
      setModalAction(null);
    }}
  />
)}
  {showModal && (
        <div className="modal-overlay" >
          <div className="modal-content">
            <UserDetail userId={selectedUserId} setShowModal={setShowModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
