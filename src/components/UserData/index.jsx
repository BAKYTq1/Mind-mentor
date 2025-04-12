import { useState } from "react";
import DataUser from "../../data/UserData";
import marina from "../../assets/svg/user-avatar.svg";
import c_icon1 from "../../assets/svg/cours1.svg";
import c_icon2 from "../../assets/svg/cours2.svg";
import c_icon3 from "../../assets/svg/cours3.svg";

export default function UserData() {
  const [isOpen, setIsOpen] = useState(true); // Управляем видимостью модального окна
  const [activeTab, setActiveTab] = useState("courses");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const tabs = {
    courses: "Курсы",
    tech: "Технологии",
    projects: "Проекты"
  };

  const tabData = DataUser[activeTab];
  const totalPages = Math.ceil(tabData.length / itemsPerPage);

  const paginatedData = tabData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsOpen(false);
  };

  // Если модальное окно закрыто, не рендерим компонент
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-[514px] h-[805px] bg-white rounded-2xl p-6 shadow-md relative">
        <button
          onClick={closeModal} // Закрытие модального окна при нажатии на кнопку "×"
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">Данные пользователя</h2>

        {/* Профиль */}
        <div className="flex items-center gap-3 mb-5">
          <img src={marina} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold leading-tight">Марина Сополова</p>
            <div className="text-sm text-gray-500 flex gap-13 mt-1">
              <span className="flex items-center gap-1"><img src={c_icon1} alt="" className="w-4 h-4" /> 4 курса</span>
              <span className="flex items-center gap-1"><img src={c_icon2} alt="" className="w-4 h-4" /> 2 технологии</span>
              <span className="flex items-center gap-1"><img src={c_icon3} alt="" className="w-4 h-4" /> 1 проект</span>
            </div>
          </div>
        </div>

        {/* Таб кнопки */}
        <div className="flex gap-2 mb-4">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1); // при смене таба сбрасываем страницу на 1
              }}
              className={`flex-1 px-4 py-2 rounded-[14px] text-sm font-medium border ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-[#d9d9d9]"
              }`}
            >
              {tabs[tab]}
            </button>
          ))}
        </div>

        {/* Контент */}
        <div className="h-[520px] overflow-y-auto space-y-3 pr-1 scrollbar-hide">
          {paginatedData.map((item) => (
            <div
              key={item.id} // предполагаем, что у каждого элемента есть уникальный id
              className="flex gap-3 items-start bg-[#f9f9f9] w-[466px] h-[90px] rounded-xl p-3 text-sm"
            >
              <img
                src={item.image}
                alt="icon"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="leading-snug mb-1">{item.title}</p>
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{item.type}</span>
                  <span>{item.price} C</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        <div className="mt-4 flex justify-center items-center gap-1 text-sm">
          <button
            className="w-8 h-8 rounded-[10px] text-gray-600 hover:bg-gray-200"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1} // Отключаем кнопку «предыдущая страница»
          >
            «
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-8 h-8 rounded-[10px] text-sm font-medium border transition ${
                currentPage === page
                  ? "bg-black text-white border-black"
                  : "text-gray-700 bg-white border-[#d9d9d9] hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          {totalPages > 5 && <span className="mx-1">...</span>}
          {totalPages > 5 && (
            <button
              onClick={() => changePage(totalPages)}
              className={`w-8 h-8 rounded-[10px] text-sm font-medium border transition ${
                currentPage === totalPages
                  ? "bg-black text-white border-black"
                  : "text-gray-700 bg-white border-[#d9d9d9] hover:bg-gray-100"
              }`}
            >
              {totalPages}
            </button>
          )}
          <button
            className="w-8 h-8 rounded-[10px] text-gray-600 hover:bg-gray-200"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages} // Отключаем кнопку «следующая страница»
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
