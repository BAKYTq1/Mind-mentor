// src/components/MentorCard.jsx
import React from "react";
import MentorModal from "./MentorModal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import icon1 from "../../../assets/icon1.svg";
import image from "../../../assets/image.svg";
import zvez from "../../../assets/zvez.svg";
import mesage from "../../../assets/mesage.svg";

import { PatchBlockMentor } from "../../../redux/mentorApi/mentorBlock";
import { UnlockMentor } from "../../../redux/mentorApi/MentorUnblock";

const MentorCard = ({
  mentor = {},
  index,
  activeMenuIndex,
  toggleMenu,
  handleAction,
  blocked = false,
  isBlocked = false,
  onBlockChange,
}) => {
  if (!mentor || Object.keys(mentor).length === 0) {
    return <div className="mt-3">Нет данных о менторе</div>;
  }
  const isActive = activeMenuIndex === `mentor-${mentor.mentorId}`;
  const dispatch = useDispatch();

  const { loading: blockLoading } = useSelector((state) => state.BlockMentor);
  const { loading: unlockLoading } = useSelector((state) => state.UnlockMentor);

  const [localBlocked, setLocalBlocked] = React.useState(blocked || isBlocked);
  const [showModal, setShowModal] = React.useState(false);

  const handleBlockMentor = async (mentorId) => {
    if (!mentorId) {
      toast.error("Не указан ID ментора");
      return;
    }

    try {
      if (localBlocked) {
        await dispatch(UnlockMentor(mentorId)).unwrap();
        toast.success("Ментор разблокирован");
        onBlockChange && onBlockChange(false); // уведомляем родительский компонент
      } else {
        await dispatch(PatchBlockMentor(mentorId)).unwrap();
        toast.success("Ментор заблокирован");
        onBlockChange && onBlockChange(true); // уведомляем родительский компонент
      }
      setLocalBlocked((prev) => !prev);
      toggleMenu(null);
    } catch (err) {
      toast.error(`Ошибка: ${err || "Неизвестная ошибка"}`);
    }
  };




  const handleShowDetails = () => {
    toggleMenu(null);
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`mt-3 flex items-start justify-between gap-4 relative ${
          localBlocked ? "bg-red-50 border-l-4 border-red-500 pl-2" : ""
        }`}
      >
        <img
          src={mentor.avatar || image}
          alt="avatar"
          className="w-11 h-11 rounded-full"
          onError={(e) => {
            e.target.src = image;
          }}
        />

        <div>
          <p className="text-sm font-medium">{mentor.firstName || "Не указано"}</p>
          <p className="text-sm font-medium text-[#6F6D73]">
            {mentor.specializationName || "Не указано"} · {mentor.workExperience || "Нет опыта"}
          </p>
        </div>

        {localBlocked && (
          <div className="flex m-auto items-center gap-2 text-sm font-medium text-[#ff0b00]">
            Заблокировано
          </div>
        )}

        <div className="flex items-center gap-2 ml-auto mt-2.5 relative">
          <p className="text-sm font-medium text-[#6F6D73]">{mentor.reviewsCount || 0}</p>
          <img src={zvez} alt="рейтинг" className="w-4 h-4" />
          <p className="text-sm font-medium text-[#6F6D73]">
            {mentor.avgRating ? mentor.avgRating.toFixed(1) : "0.0"}
          </p>
          <img src={mesage} alt="сообщения" className="w-4 h-4" />
          <img
            src={icon1}
            alt="меню"
            className="w-5 h-5 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu(`mentor-${mentor.mentorId}`);
            }}
          />

          {isActive && (
            <div className="absolute top-[30px] right-0 z-20 w-40 bg-black border-2 border-[#00BFD8] rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={handleShowDetails}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-100 hover:text-[#00BFD8]"
              >
                Данные
              </button>

              <button
                onClick={() => handleBlockMentor(mentor.mentorId)}
                disabled={blockLoading || unlockLoading}
                className="block w-full px-4 py-2 text-left text-white hover:bg-gray-100 hover:text-[#00BFD8]"
              >
                {(blockLoading || unlockLoading)
                  ? "Загрузка..."
                  : localBlocked
                  ? "Разблокировать"
                  : "Заблокировать"}
              </button>

              <button
                onClick={() => handleAction("Удалить аккаунт")}
                className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
              >
                Удалить аккаунт
              </button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <MentorModal
          mentor={{
            ...mentor,
            courseCount: 12,
            techCount: 2,
            courses: [
              { title: "Личная консультация...", type: "Технология", price: 3000, date: "12.02.25" },
              { title: "Курс по UX/UI", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по React", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по JavaScript", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по Python", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по Node.js", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по HTML/CSS", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по Git", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по SQL", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по Docker", type: "Курс", price: 3000, date: "12.02.25" },
              { title: "Курс по Kubernetes", type: "Курс", price: 3000, date: "12.02.25" },
            ],
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default MentorCard;
