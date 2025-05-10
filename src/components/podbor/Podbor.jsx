




// import React from 'react'

// const Podbor = () => {
//   return (
//     <div className="container mx-auto py-12 flex justify-center">
//       <div className="w-[1084px] h-[460px] bg-[#2D2D2D] text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-8">

//         <div>
//           <h1 className="text-[32px] font-bold ">Что вы ищете?</h1>
//           <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
//         </div>

//         <div className="flex flex-col gap-4 w-full items-center">
//           <button className="bg-white w-[607px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//             Я закончил курс и хочу развиваться дальше и создавать проекты
//           </button>
//           <button className="bg-white w-[637px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//             Я начинающий специалист в компании и хочу развивать свои навыки
//           </button>
//           <button className="bg-white w-[508px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//             У меня есть несколько проектов но не хватает теории
//           </button>
//         </div>

//         <div>
//           <button className="bg-[#FFD02C] text-[#000000] font-semibold  text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">
//             Подтвердить
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Podbor










// import React, { useState } from 'react';

// const Podbor = () => {
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleClick = (option) => {
//         setSelectedOption(option);
//     };

//     return (
//         <div className="container mx-auto py-12 flex justify-center">
//             <div className="flex">
//                 <div className="flex flex-col gap-6 mr-8">
//                     <button
//                         className="bg-black text-white w-[150px] h-[54px] rounded-xl font-medium text-[18px] hover:bg-gray-700 transition"
//                         onClick={() => handleClick(1)}
//                     >
//                         1
//                     </button>
//                     <button
//                         className="bg-black text-white w-[150px] h-[54px] rounded-xl font-medium text-[18px] hover:bg-gray-700 transition"
//                         onClick={() => handleClick(2)}
//                     >
//                         2
//                     </button>
//                     <button
//                         className="bg-black text-white w-[150px] h-[54px] rounded-xl font-medium text-[18px] hover:bg-gray-700 transition"
//                         onClick={() => handleClick(3)}
//                     >
//                         3
//                     </button>
//                 </div>

//                 <div className="w-[1084px] h-[460px] bg-[#2D2D2D] text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-8">
                   

//                     {selectedOption === 1 && (
//                         <div className="flex flex-col gap-4 w-full items-center">
//                             <div>
//                                 <h1 className="text-[32px] font-bold">Что вы ищете?</h1>
//                                 <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
//                             </div>
//                             <button className="bg-white w-[607px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//                                 Я закончил курс и хочу развиваться дальше и создавать проекты
//                             </button>
//                             <button className="bg-white w-[637px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//                                 Я начинающий специалист в компании и хочу развивать свои навыки
//                             </button>
//                             <button className="bg-white w-[508px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//                                 У меня есть несколько проектов но не хватает теории
//                             </button>

//                             <div>
//                                 <button className="bg-[#FFD02C] text-[#000000] font-semibold  text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">           Подтвердить
//                                 </button>
//                             </div>
//                         </div>
//                     )}




//                     {selectedOption === 2 && (
//                         <div className="flex flex-col gap-4 w-full items-center">
//                             <div>
//                                 <h1 className="text-[32px] font-bold">Какая специализация в области IT?</h1>
//                                 <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
//                             </div>
//                             <div className="flex mt-[40px] flex-col gap-4">
//                                 <div className="flex gap-4">
//                                     <button className="w-[143px] h-[54px] bg-[#FFFFFF] rounded-[16px] font-medium text-[18px] text-[#000000]">Дизайн</button>
//                                     <button className="w-[143px] h-[54px] bg-[#FFFFFF] rounded-[16px] font-medium text-[18px] text-[#000000]">Frontend</button>
//                                     <button className="w-[143px] h-[54px] bg-[#FFFFFF] rounded-[16px] font-medium text-[18px] text-[#000000]">Backend</button>
//                                     <button className="w-[143px] h-[54px] bg-[#FFFFFF] rounded-[16px] font-medium text-[18px] text-[#000000]">Backend</button>
//                                 </div>

//                                 <div className="flex gap-4 items-center justify-center">
//                                     <button className="w-[143px] h-[54px] bg-[#FFFFFF] rounded-[16px] font-medium text-[18px] text-[#000000]">Backend</button>
//                                     <button className="w-[143px] h-[54px] bg-[#FFFFFF] rounded-[16px] font-medium text-[18px] text-[#000000]">Backend</button>
//                                 </div>
//                             </div>


//                             <div>
//                                 <button className="bg-[#FFD02C] text-[#000000] mt-[60px] font-semibold  text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">           Подтвердить
//                                 </button>
//                             </div>



//                         </div>
//                     )}






//                     {selectedOption === 3 && (
//                         <div className="flex flex-col gap-4 w-full items-center">


//                             <div>
//                                 <h1 className="text-[32px] font-bold"> На каком уровне развития ваши навыки?</h1>
//                                 <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
//                             </div>
//                             <button className="bg-white w-[338px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//                             Я знаю теорию, но нет практики                            </button>
//                             <button className="bg-white w-[555px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//                             Я знаю практику и теорию, но нет проектов для портфолио
//                             </button>
//                             <button className="bg-white w-[558px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
//                             Промежуточный уровень и вам нужно развиваться дальше
//                             </button>


//                             <div>
//                                 <button className="bg-[#FFD02C] text-[#000000] mt-[30px] font-semibold  text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">           Подтвердить
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Podbor;
import React, { useState } from 'react';

const Podbor = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="container mx-auto py-12 flex justify-center">
            <div className="flex">
                {/* SVG блок */}
                <div className="mr-8">
                <svg width="66" height="460" viewBox="0 0 66 460" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* Первый кружок */}
  <circle cx="33" cy="33" r="33" fill={selectedOption === 1 ? '#FFD02C' : '#2D2D2D'} />
  <text x="33" y="40" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>

  {/* Линия от первого к второму */}
  <line x1="33" y1="66" x2="33" y2="164" stroke="#2D2D2D" strokeWidth="2" strokeDasharray="4 4" />

  {/* Второй кружок */}
  <circle cx="33" cy="197" r="33" fill={selectedOption === 2 ? '#FFD02C' : '#FAFAFA'} stroke="#2D2D2D" />
  <text x="33" y="204" textAnchor="middle" fill="#2D2D2D" fontSize="20" fontWeight="bold">2</text>

  {/* Линия от второго к третьему */}
  <line x1="33" y1="230" x2="33" y2="328" stroke="#2D2D2D" strokeWidth="2" strokeDasharray="4 4" />

  {/* Третий кружок */}
  <circle cx="33" cy="394" r="33" fill={selectedOption === 3 ? '#FFD02C' : '#FAFAFA'} stroke="#2D2D2D" />
  <text x="33" y="401" textAnchor="middle" fill="#2D2D2D" fontSize="20" fontWeight="bold">3</text>
</svg>

                </div>

                {/* Кнопки выбора */}
                <div className="flex flex-col gap-6 mr-8">
                    <button
                        className={`w-[150px] h-[54px] rounded-xl font-medium text-[18px] transition ${
                            selectedOption === 1 ? 'bg-yellow-400 text-black' : 'bg-black text-white hover:bg-gray-700'
                        }`}
                        onClick={() => handleClick(1)}
                    >
                        1
                    </button>
                    <button
                        className={`w-[150px] h-[54px] rounded-xl font-medium text-[18px] transition ${
                            selectedOption === 2 ? 'bg-yellow-400 text-black' : 'bg-black text-white hover:bg-gray-700'
                        }`}
                        onClick={() => handleClick(2)}
                    >
                        2
                    </button>
                    <button
                        className={`w-[150px] h-[54px] rounded-xl font-medium text-[18px] transition ${
                            selectedOption === 3 ? 'bg-yellow-400 text-black' : 'bg-black text-white hover:bg-gray-700'
                        }`}
                        onClick={() => handleClick(3)}
                    >
                        3
                    </button>
                </div>

                {/* Контент справа */}
                <div className="w-[1084px] h-[460px] bg-[#2D2D2D] text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-8">
                    {selectedOption === 1 && (
                        <div className="flex flex-col gap-4 w-full items-center">
                            <div>
                                <h1 className="text-[32px] font-bold">Что вы ищете?</h1>
                                <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
                            </div>
                            <button className="bg-white w-[607px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
                                Я закончил курс и хочу развиваться дальше и создавать проекты
                            </button>
                            <button className="bg-white w-[637px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
                                Я начинающий специалист в компании и хочу развивать свои навыки
                            </button>
                            <button className="bg-white w-[508px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
                                У меня есть несколько проектов но не хватает теории
                            </button>
                            <button className="bg-[#FFD02C] text-black font-semibold text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">
                                Подтвердить
                            </button>
                        </div>
                    )}

                    {selectedOption === 2 && (
                        <div className="flex flex-col gap-4 w-full items-center">
                            <div>
                                <h1 className="text-[32px] font-bold">Какая специализация в области IT?</h1>
                                <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
                            </div>
                            <div className="flex mt-[40px] flex-col gap-4">
                                <div className="flex gap-4">
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Дизайн</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Frontend</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Backend</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Mobile</button>
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">GameDev</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Data Science</button>
                                </div>
                            </div>
                            <button className="bg-[#FFD02C] text-black mt-[60px] font-semibold text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">
                                Подтвердить
                            </button>
                        </div>
                    )}

                    {selectedOption === 3 && (
                        <div className="flex flex-col gap-4 w-full items-center">
                            <div>
                                <h1 className="text-[32px] font-bold">На каком уровне развития ваши навыки?</h1>
                                <p className="text-[#ffffff] mt-[10px] font-medium text-[16px]">Выберите один из вариантов</p>
                            </div>
                            <button className="bg-white w-[338px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
                                Я знаю теорию, но нет практики
                            </button>
                            <button className="bg-white w-[555px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
                                Я знаю практику и теорию, но нет проектов для портфолио
                            </button>
                            <button className="bg-white w-[558px] h-[54px] text-black py-3 px-4 rounded-xl font-medium text-[18px] hover:bg-gray-200 transition">
                                Промежуточный уровень и вам нужно развиваться дальше
                            </button>
                            <button className="bg-[#FFD02C] text-black mt-[30px] font-semibold text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">
                                Подтвердить
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Podbor;
