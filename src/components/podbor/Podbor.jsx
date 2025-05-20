
import React, { useState } from 'react';
import Nazz from "../../assets/nazz.svg";
import kkk from "../../assets/kkk.svg";
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

const Podbor = () => {
    const [selectedOption, setSelectedOption] = useState(1);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    const handleConfirm = () => {
        if (selectedOption < 4) {
            setSelectedOption(selectedOption + 1);
        }
    };
        const navigate = useNavigate();
    

    return (
        <div className="container mx-auto  justify-center">
            <Header />
            <div className="">
                <div className='flex items-center'>

                    <div
                        className='flex items-center text-[#000000] cursor-pointer'
                        onClick={() => navigate(-1)}
                    >
                        <img className='w-[24px] h-[24px] mt-[10px]' src={Nazz} alt="назад" />
                        <h3 className='font-bold text-[25px] ml-[20px] mt-[10px]'>Назад</h3>
                    </div>

                    <div className='flex items-center mt-4'>
                        <h3 className='text-[#CFCFCF] text-[16px] font-medium ml-[30px]'>Главный</h3>
                        <img className='w-[24px] h-[24px] ml-[10px]' src={kkk} alt="стрелка" />
                        <h4 className='text-[12px] font-medium ml-[10px]'>Корзина</h4>
                    </div>
                </div>
            </div>


            <div className="flex mt-[30px]">




                <div className="mr-8">
                    <svg width="66" height="460" viewBox="0 0 66 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="33" cy="33" r="33" fill={selectedOption === 1 ? '#FFD02C' : '#2D2D2D'} />
                        <text x="33" y="40" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">1</text>

                        <line x1="33" y1="66" x2="33" y2="164" stroke="#2D2D2D" strokeWidth="2" strokeDasharray="4 4" />

                        <circle cx="33" cy="197" r="33" fill={selectedOption === 2 ? '#FFD02C' : '#FAFAFA'} stroke="#2D2D2D" />
                        <text x="33" y="204" textAnchor="middle" fill="#2D2D2D" fontSize="20" fontWeight="bold">2</text>

                        <line x1="33" y1="230" x2="33" y2="328" stroke="#2D2D2D" strokeWidth="2" strokeDasharray="4 4" />

                        <circle cx="33" cy="394" r="33" fill={selectedOption === 3 ? '#FFD02C' : '#FAFAFA'} stroke="#2D2D2D" />
                        <text x="33" y="401" textAnchor="middle" fill="#2D2D2D" fontSize="20" fontWeight="bold">3</text>
                    </svg>
                </div>




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
                            <button onClick={handleConfirm} className="bg-[#FFD02C] text-black font-semibold text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">
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
                            <div className="flex mt-[40px] flex-col gap-4 ">
                                <div className="flex gap-4">
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black font-jost">Дизайн</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Frontend</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Backend</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Mobile</button>
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">GameDev</button>
                                    <button className="w-[143px] h-[54px] bg-white rounded-[16px] font-medium text-[18px] text-black">Data Science</button>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedOption(prev => Math.min(prev + 1, 3))}
                                className="bg-[#FFD02C] text-black font-semibold text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition"
                            >
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
                            <button onClick={handleConfirm} className="bg-[#FFD02C] text-black mt-[30px] font-semibold text-[20px] py-2 w-[349px] h-[56px] px-6 rounded-xl hover:opacity-90 transition">
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
