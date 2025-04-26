import React, { useState } from 'react';
import icon1 from "../../assets/icon1.svg";
import img1 from "../../assets/img1.svg";
import icons1 from "../../assets/icons1.svg";
import icons2 from "../../assets/icons2.svg";
import icons3 from "../../assets/icons3.svg";
import image from "../../assets/image.svg";
import zvez from "../../assets/zvez.svg";
import mesage from "../../assets/mesage.svg";

const Mentory = () => {
  const [menuIndex, setMenuIndex] = useState()

  const toggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  const handleEdit = () => {
    alert("Редактировать");
    setMenuIndex(null);
  };

  const handleDelete = () => {
    alert("Удалить");
    setMenuIndex(null);
  };

  const specialties = [
    { name: "Дизайн", count: 324 },
    { name: "Бекэнд", count: 324 },
    { name: "Фронт", count: 324 },
    { name: "Дизайн", count: 324 },
    { name: "Дизайн", count: 324 }
  ];

  const mentors = Array(8).fill({
    name: "Марина Сополова",
    role: "UX/UI специалист",
    experience: "2 года",
    rating: "4.6",
    reviews: 245,
  });

  return (
    <div className="w-full h-full flex gap-[20px] justify-center">
      {/* Левая часть */}
      <div className="flex gap-[20px]">
        <div className="w-[412px] bg-[#F5F6FB] p-6 rounded-xl shadow-lg">
          <div>
            <div className="flex justify-between mb-6">
              <div>
                <div className="font-medium text-[16px] text-[#000000]">Все менторы</div>
                <span className="font-bold text-[32px] text-[#000000]">
                  10 000 <span className="font-medium text-[18px] align-super">чел</span>
                </span>
              </div>
              <div>
                <div className="font-medium text-[16px] text-[#000000]">Активные менторы</div>
                <span className="font-bold text-[32px] text-[#000000]">
                  320 <span className="font-medium text-[18px] align-super">чел</span>
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-[16px] mt-[20px]">
                <h4 className="text-[16px] font-medium text-[#6F6D73]">Все специальности</h4>
                <button className="text-white bg-black w-[24px] h-[24px] rounded-full text-[16px] flex items-center justify-center">
                  +
                </button>
              </div>

              {specialties.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between mb-3 rounded-lg p-2">
                  <div className="flex items-center gap-3">
                    <img src={img1} alt="icon" className="w-[40px] h-[40px]" />
                    <h3 className="text-[16px] ml-[12px] font-semibold">{item.name}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <h3 className="text-[14px] font-medium text-[#000000]">{item.count} раз</h3>

                    <div className="relative">
                      <button onClick={() => toggleMenu(index)} className="text-xl px-2 hover:bg-gray-100 rounded">
                        <img src={icon1} alt="меню" />
                      </button>

                      {menuIndex === index && (
                        <div className="absolute right-0 top-6 shadow-md rounded-[12px] z-10 bg-black w-[128px] h-[84px]">
                          <button onClick={handleEdit} className="block px-4 py-2 text-sm w-full text-left text-white">Изменить</button>
                          <button onClick={handleDelete} className="block px-4 py-2 text-sm w-full text-left text-red-500">Удалить</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[700px] h-[174px] bg-[#F5F6FB] flex flex-col justify-between p-4 rounded-[24px]">
          <h2 className="text-black font-medium text-[20px]">Статистика</h2>

          <div className="flex gap-[40px] justify-between">
            <div>
              <p className="font-medium text-[16px] text-[#6F6D73]">Новые менторы</p>
              <h1 className="text-[42px] font-bold text-black">
                20 <span className="text-sm align-super font-medium text-[18px]">чел</span>
              </h1>
            </div>

            <div>
              <p className="font-medium text-[16px] text-[#6F6D73]">Удалили аккаунт</p>
              <h1 className="text-[42px] font-bold text-[#E93535]">
                12 <span className="text-sm align-super text-black font-medium text-[18px]">чел</span>
              </h1>
            </div>

            <div>
              <p className="font-medium text-[16px] text-[#6F6D73]">Блокированы</p>
              <h1 className="text-[42px] font-bold text-black">
                32 <span className="text-sm align-super font-medium text-[18px]">чел</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Блок с менторами */}
      <div className="bg-[#F5F6FB] mt-[192px] ml-[-720px] w-[700px] h-[618px] p-4 rounded-[24px]">
        <h1 className="font-medium text-[20px]">Менторы</h1>

        <div className="flex justify-between items-center mt-[20px]">
          <p className="font-medium text-[16px] text-[#6F6D73]">Все менторы</p>
          <div className="flex gap-[12px]">
            <img className="w-[24px] h-[24px]" src={icons1} alt="" />
            <img className="w-[24px] h-[24px]" src={icons2} alt="" />
            <img className="w-[24px] h-[24px]" src={icons3} alt="" />
          </div>
        </div>

        {mentors.map((mentor, index) => (
          <div key={index} className="mt-[12px] flex items-start gap-4 relative">
            <img className="w-[44px] h-[44px] rounded-full" src={image} alt={mentor.name} />

            <div>
              <p className="font-medium text-[14px]">{mentor.name}</p>
              <p className="text-[14px] text-[#6F6D73] font-medium">
                {mentor.role} <span>· {mentor.experience}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 ml-auto mt-[10px] relative">
              <p className="text-sm font-medium text-[#6F6D73]">{mentor.rating}</p>
              <img className="w-4 h-4" src={zvez} alt="рейтинг" />
              <p className="text-sm font-medium text-[#6F6D73]">{mentor.reviews}</p>
              <img className="w-4 h-4" src={mesage} alt="сообщения" />
              <img
                className="w-5 h-5 cursor-pointer"
                src={icon1}
                alt="меню"
                onClick={() => toggleMenu(index + 1000)}
              />
              {menuIndex === index + 1000 && (
                <div className="absolute top-[30px] right-0 bg-black shadow-lg rounded-[12px] z-20 w-[160px]">
                  <button className="block w-full text-left text-white px-4 py-2 hover:bg-gray-100" onClick={() => alert('Данные')}>Данные</button>
                  <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-100" onClick={() => alert('Заблокировать')}>Заблокировать</button>
                  <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100" onClick={() => alert('Удалить аккаунт')}>Удалить аккаунт</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentory;
    
















//             <div>
//               <p className="font-medium text-[16px] text-[#6F6D73]">Удалили аккаунт</p>
//               <h1 className="text-[42px] font-bold text-[#E93535]">
//                 12 <span className="text-sm align-super text-black font-medium text-[18px]">чел</span>
//               </h1>
//             </div>

//             <div>
//               <p className="font-medium text-[16px] text-[#6F6D73]">Блокированы</p>
//               <h1 className="text-[42px] font-bold text-black">
//                 32 <span className="text-sm align-super font-medium text-[18px]">чел</span>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Блок с менторами */}
//       <div className="bg-[#F5F6FB] mt-[192px] ml-[-720px] w-[700px] h-[618px] p-4 rounded-[24px]">
//         <h1 className="font-medium text-[20px]">Менторы</h1>

//         <div className="flex justify-between items-center mt-[20px]">
//           <p className="font-medium text-[16px] text-[#6F6D73]">Все менторы</p>
//           <div className="flex gap-[12px]">
//             <img className="w-[24px] h-[24px]" src={icons1} alt="" />
//             <img className="w-[24px] h-[24px]" src={icons2} alt="" />
//             <img className="w-[24px] h-[24px]" src={icons3} alt="" />
//           </div>
//         </div>

//         {mentors.map((mentor, index) => (
//           <div key={index} className="mt-[12px] flex items-start gap-4 relative">
//             <img className="w-[44px] h-[44px] rounded-full" src={image} alt={mentor.name} />

//             <div>
//               <p className="font-medium text-[14px]">{mentor.name}</p>
//               <p className="text-[14px] text-[#6F6D73] font-medium">
//                 {mentor.role} <span>· {mentor.experience}</span>
//               </p>
//             </div>

//             <div className="flex items-center gap-2 ml-auto mt-[10px] relative">
//               <p className="text-sm font-medium text-[#6F6D73]">{mentor.rating}</p>
//               <img className="w-4 h-4" src={zvez} alt="рейтинг" />
//               <p className="text-sm font-medium text-[#6F6D73]">{mentor.reviews}</p>
//               <img className="w-4 h-4" src={mesage} alt="сообщения" />
//               <img
//                 className="w-5 h-5 cursor-pointer"
//                 src={icon1}
//                 alt="меню"
//                 onClick={() => toggleMenu(index + 1000)}
//               />
//               {menuIndex === index + 1000 && (
//                 <div className="absolute top-[30px] right-0 bg-black shadow-lg rounded-[12px] z-20 w-[160px]">
//                   <button className="block w-full text-left text-white px-4 py-2 hover:bg-gray-100" onClick={() => alert('Данные')}>Данные</button>
//                   <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-100" onClick={() => alert('Заблокировать')}>Заблокировать</button>
//                   <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100" onClick={() => alert('Удалить аккаунт')}>Удалить аккаунт</button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

