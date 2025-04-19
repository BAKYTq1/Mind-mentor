import React, { useState } from 'react';
import Vector1 from '../../assets/Vector (34).svg'
import Vector2 from '../../assets/Vector (35).svg'
import { FaSearch } from 'react-icons/fa';
import  { useState } from 'react';
import Vector1 from '../../assets/Vector (34).svg'
import Vector2 from '../../assets/Vector (35).svg'
// import { FaSearch } from 'react-icons/fa';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsThreeDotsVertical } from 'react-icons/bs';
import './Dashboard.scss';
import ava1 from "../../assets/ava1.svg"
import star1 from "../../assets/star1.svg"
import star2 from "../../assets/star2.svg"

import { Container } from '../Container/Container';





const mockUsers = [
  { id: 1, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'active', time: 32 },
  { id: 5, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'deleted', time: 32 },
  { id: 9, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'blocked', time: 32 },
  { id: 13, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'deleted', time: 32 },
  { id: 17, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'active', time: 32 },
  { id: 21, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'active', time: 32 },
  { id: 2, name: 'Иван Петров', lastActive: 'Вчера 09:12', status: 'blocked', time: 32 },
  { id: 3, name: 'Ольга Иванова', lastActive: '2 дня назад', status: 'deleted', time: 32 },
  { id: 4, name: 'Алексей Смирнов', lastActive: '3 дня назад', status: 'not-passed', time: 32 },
  { id: 6, name: 'Иван Петров', lastActive: 'Вчера 09:12', status: 'blocked', time: 32 },
  { id: 7, name: 'Ольга Иванова', lastActive: '2 дня назад', status: 'deleted', time: 32 },
  { id: 8, name: 'Алексей Смирнов', lastActive: '3 дня назад', status: 'not-passed', time: 32 },
  { id: 10, name: 'Иван Петров', lastActive: 'Вчера 09:12', status: 'blocked', time: 32 },
  { id: 11, name: 'Ольга Иванова', lastActive: '2 дня назад', status: 'deleted', time: 32 },
  { id: 12, name: 'Алексей Смирнов', lastActive: '3 дня назад', status: 'not-passed', time: 32 },
  { id: 14, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'active', time: 32 },
  { id: 15, name: 'Иван Петров', lastActive: 'Вчера 09:12', status: 'blocked', time: 32 },
  { id: 16, name: 'Ольга Иванова', lastActive: '2 дня назад', status: 'deleted', time: 32 },
  { id: 18, name: 'Алексей Смирнов', lastActive: '3 дня назад', status: 'not-passed', time: 32 },
  { id: 19, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'active', time: 32 },
  { id: 20, name: 'Иван Петров', lastActive: 'Вчера 09:12', status: 'blocked', time: 32 },
  { id: 22, name: 'Ольга Иванова', lastActive: '2 дня назад', status: 'deleted', time: 32 },
  { id: 23, name: 'Алексей Смирнов', lastActive: '3 дня назад', status: 'not-passed', time: 32 },
  { id: 24, name: 'Марина Соколова', lastActive: 'Сегодня 11:24', status: 'active', time: 32 },
];


const USERS_PER_PAGE = 7;

const Dashboard = () => {
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openblock, setOpenblock] = useState(false);
  const [openZablock, setOpenzablock] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [mentor, setMentor] = useState(false);
  
      // const handleCancel = () => {
      //     showModal(false);
      // };
  
      // const handleDelete = () => {
      //     showModal(false);
      // };
      
  const filteredUsers = mockUsers
    .filter(user => {
      if (filter !== 'all' && user.status !== filter) return false;
      if (searchQuery && !user.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

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

  const handleClickOutside = (e) => {
    if (!e.target.closest('.user-menu-wrapper')) {
      setActiveMenu(null);
    }
  };

  const handleUserAction = (userId, action) => {
    console.log(`Действие "${action}" для пользователя ${userId}`);
    setActiveMenu(null);
  };

  return (
    <div className='container'>
    <div className="dashboard" onClick={handleClickOutside}>
      <main className="main-content">
        {/* <header className="header">
          <div className="header-title">
            <h1>Пользователи</h1>
            <p>11 июня – 12 августа 2024</p>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Поиск пользователя"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
        </header> */}

        <div className="secctions">
        <div className="user-stats-card">
  <div className="stats-header">
    <div className="stat-block">
      <p>Все пользователи</p>
      <h2>100 200 <span>чел</span></h2>
    </div>
    <div className="stat-block">
      <p>Активные пользователи</p>
      <h2>3200 <span>чел</span></h2>
    </div>
  </div>

  <div className="users-title">Активные пользователи</div>
  <ul className="user-list">
    {mockUsers
      .filter(user => user.status === 'active')
      .map((user, index) => (
        <li key={index} className="user-row">
          <div className="user-info">
            <img src="/avatar.png" alt="avatar" />
            <span>{user.name}</span>
          </div>
          <div className="user-time">{user.time}часов</div>
        </li>
      ))}
  </ul>
</div>
          <section className="user-list-section">
            <div className="summary-card">
              <h1>статистика</h1>
              <h1>Статистика</h1>
              <div>
                <h3>Новые пользователи</h3>
                <p className="count">200 <span>чел</span></p>
              </div>
              <div>
                <h3>Удалили аккаунт</h3>
                <p className="count red">12 <span>чел</span></p>
              </div>
              <div>
                <h3>Заблокированы</h3>
                <p className="count">32 <span>чел</span></p>
              </div>
            </div>


            <ul className="user-list">
              <div className='head-list'>
               <h2>Пользователи</h2> 
              </div>
            <div className="section-header">
              <h3>Все пользователи</h3>
              <div>
              <div className='w-[50px] mr-[20px] flex justify-between'>
              <button><img src={Vector1} alt="" /></button>
              <button><img src={Vector2} alt="" /></button>
              </div>
            </div>
              {paginatedUsers.map((user) => (
                <li key={user.id} className="user-item">
                  <img src="/avatar.png" alt={`Аватар ${user.name}`} className="user-avatar" />
                  <div className="user-info">
                    <strong>{user.name}</strong>
                    <p>Был(а) в сети: {user.lastActive}</p>
                  </div> 
                  <div className="deleted
                  ">
                   <span className={`status-badge ${user.status}`}>
                      {user.status === 'active' && 'Активен'}
                      {user.status === 'blocked' && 'Заблокирован'}
                      {user.status === 'deleted' && 'Удалён'}
                      {user.status === 'not-passed' && 'Не прошёл курс'}
                    </span>
                    <p>24 покупок</p>
                  </div>
                  <div className="user-menu-wrapper">
                    <button
                      className="menu-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === user.id ? null : user.id);
                      }}
                      aria-label="Действия"
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {activeMenu === user.id && (
                      <ul className="user-actions-menu"> 
                    
                        <li onClick={() => handleUserAction(user.id, 'Активировать')}>Данные</li> 
                        <li onClick={() => handleUserAction(user.id, 'Редактировать')}>Изменить данные</li>
                        <li onClick={() => setMentor(true)}>Изменить данные</li>
                        <li onClick={() => {
    setOpenzablock(true);
    setClicked(prev => !prev)
}}>
  {clicked ? 'Разблокировать' : 'Заблокировать'}
</li>

                        <li className="delete-action" onClick={() => {
  setOpenblock(true);
}}>
  Удалить аккаунт
</li>
                      </ul>
                    )}
                  </div>
                </li>
              ))}
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
              <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}><MdKeyboardDoubleArrowLeft /></button>
              <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}><MdKeyboardDoubleArrowRight /></button>
              </div>
            </div>
            </ul>
          </section>
        </div>
      </main>
    </div>
    {openblock && (
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
          onClick={() => setOpenblock(false)}
          style={{ backgroundColor: 'rgba(35, 175, 206, 1)' }}
          className="p-2 px-30 rounded-[10px] text-white mb-2"
        >
          Отмена
        </button>

        <button
             onClick={() => setOpenblock(false)}
          className="!bg-black p-2 px-30 rounded-[10px] text-white"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
)}
{ openZablock && (
  
                  <div className="modal-overlay flex justify-center items-center">
                      <div
                          style={{fontFamily: 'Montserrat, sans-serif'}}
                          className="!bg-gray-200 rounded-[24px] p-5 max-w-[360px] w-full"
                      >
                          <h1 className="text-center mb-4 font-bold text-[23px]">
                              Вы точно хотите <br/> заблокировать 
                          </h1>
  
                          <div className="flex items-start mb-4 mt-4">
                              <img src={ava1} alt="Аватар" className="w-10 h-10 rounded-full"/>
  
                              <div className="ml-4 flex flex-col">
                                  <div className="flex items-center">
                                      <h2 className=" font-semibold text-base ">Марина Сополова</h2>
                                      <img src={star1} alt="star1" className="w-5 h-5 w-[45px] ml-[35px]"/>
                                  </div>
  
                                  <div className="flex items-center text-sm text-gray-600 mt-1">
                                      <p>UX/UI специалист · 2 года</p>
                                      <img src={star2} alt="star2" className="w-[45px] h-5 ml-2"/>
                                  </div>
                              </div>
                          </div>
  
                          <div className="flex items-center flex-col gap-2">
                              <button
                                   onClick={() => setOpenzablock(false)}
                                  style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                                  className="p-2 px-30 rounded-[10px] text-white mb-2"
                              >
                                  Отмена
                              </button>
  
                              <button
                                   onClick={() => setOpenzablock(false)}
                                  className="!bg-black p-2 px-23 rounded-[10px] text-white"
                              >
                                  Заблокировать
                              </button>
                          </div>
                      </div>
                  </div>
)}
{mentor && (
  <div className='modal-overlay'>
   <div
   className=" bg-white p-6 rounded-2xl max-w-[382px] w-full shadow-lg relative"
>


   <h1 className="text-[22px] font-bold text-center mb-5">Пользователь</h1>

   <form className="space-y-3 text-sm">
       <div>
           <label className="font-semibold">Имя:</label>
           <input
               style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
               placeholder="Ваша имя"
               className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
           />
       </div>
       <div>
           <label className="font-semibold">Фамилия:</label>
           <input
               style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
               placeholder="Ваша фамилия"
               className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
           />
       </div>
       <div>
           <label className="font-semibold">Email:</label>
           <input
             type="email"
               style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
               placeholder="Ваша почта"
               className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
           />
       </div>


       <div className="flex gap-2">
           <div className="w-full">
               <label className="font-semibold">Телефон:</label>
               <input
                   type="text"
                   placeholder="0 *** *** ***"
                   style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                   className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
               />
           </div>
       </div>

       <div>
           <label className="font-semibold">Пароль:</label>
           <input
               type="password"
               style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
               placeholder="Новый пароль"
               className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
           />
       </div>

       <div className="flex gap-3 mt-4">
           <button
               type="button"

               className="flex-1 !bg-black text-white rounded-lg py-2"
           >
               Отмена
           </button>
           <button
           onClick={() => setMentor(false)}
               type="submit"
               style={{backgroundColor: "rgba(35, 175, 206, 1)"}}

               className="  flex-1 bg-cyan-500 text-white rounded-lg py-2"
           >
               Сохранить
           </button>
       </div>
   </form>
</div>
</div>
)}

    </div>
  );
};

export default Dashboard;
