import React, { useState, useRef, useEffect } from 'react';
import Calendar from "../../assets/icons/calendar-icon.svg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Icon1 from "../../assets/Vector (34).svg";
import Icon2 from "../../assets/Vector (35).svg";
import { VscKebabVertical } from "react-icons/vsc";

const originalData = [
    { day: 'Пн', mentor: 32, course: 45, specialist: 22, project: 12 },
    { day: 'Вт', mentor: 18, course: 28, specialist: 19, project: 15 },
    { day: 'Ср', mentor: 10, course: 22, specialist: 20, project: 9 },
    { day: 'Чт', mentor: 34, course: 40, specialist: 27, project: 14 },
    { day: 'Пт', mentor: 15, course: 30, specialist: 17, project: 11 },
    { day: 'Сб', mentor: 30, course: 48, specialist: 25, project: 20 },
    { day: 'Вс', mentor: 25, course: 35, specialist: 21, project: 13 },
];

const moveTodayToLast = () => {
    const daysOrder = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const todayIndex = new Date().getDay(); // Sunday = 0
    const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

    const rotatedDays = [...daysOrder.slice(adjustedIndex + 1), ...daysOrder.slice(0, adjustedIndex + 1)];

    const reorderedData = rotatedDays.map(day => originalData.find(item => item.day === day));
    return reorderedData;
};

const data = moveTodayToLast();
                                                                                                                                    
const CustomLabel = (key1, key2) => ({ x, y, index }) => {
    const d = data[index];
    const isToday = index === data.length - 1;

    return (
        <g transform={`translate(${x + 18}, ${y - 10})`}>
            <text
                fill={isToday ? '#00A8E8' : '#000'}
                fontSize="16"
                fontWeight="400"
                textAnchor="middle"
                y={-10}
            >
                {d[key1]}
            </text>
            <text
                fill={isToday ? '#00A8E8' : '#000'}
                fontSize="16"
                fontWeight="400"
                textAnchor="middle"
                y={5}
            >
                {d[key2]}
            </text>
        </g>
    );
};

const Payments = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRefs = useRef([]);

    const handleOpenModal = (type, item) => {
        console.log(type, item); // Placeholder
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRefs.current &&
                !menuRefs.current.some(ref => ref && ref.contains(event.target))
            ) {
                setActiveMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex gap-[20px] bg-black">
            <div className="w-[412px] bg-white rounded-[24px] p-[20px]">
                <div className="flex h-[32px] justify-between items-center mb-[20px]">
                    <h3 className="text-[20px] font-[500]">Курсы</h3>
                    <div className="flex gap-[11px] items-center border border-[rgb(217,217,217)] rounded-[12px] p-[4px_12px]">
                        <p className="text-[12px]">Последний 7 дней</p>
                        <img src={Calendar} alt="calendar" />
                    </div>
                </div>

                <div className="flex justify-between mb-[24px]">
                    <div className="flex gap-[5px] font-[700] text-[42px] text-[rgb(35,175,206)]">
                        <h3>164</h3><span className="text-[18px] font-[600]">Менторства</span>
                    </div>
                    <div className="flex gap-[5px] font-[700] text-[42px]">
                        <h3>164</h3><span className="text-[18px] font-[600]">курс</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={249}>
                    <BarChart data={data}>
                        <XAxis dataKey="day" tick={{ fontSize: 14 }} axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Bar dataKey="mentor" radius={10} label={CustomLabel('mentor', 'course')}>
                            {data.map((_, index) => (
                                <Cell key={index} fill={index === data.length - 1 ? '#00A8E8' : '#C2E9F8'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                <h3 className="text-[20px] font-[500] my-[20px]">Проекты</h3>

                <div className="flex justify-between mb-[20px]">
                    <div className="flex items-end gap-[5px] text-[42px] font-[700] text-[#23AFCE]">
                        <h3 className="flex">164 <span className="text-[18px] font-[600]">Специалист</span></h3>
                    </div>
                    <div className="flex items-end gap-[5px] text-[42px] font-[700]">
                        <h3 className="flex">64 <span className="text-[18px] font-[600]">Проекта</span></h3>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={249}>
                    <BarChart data={data}>
                        <XAxis dataKey="day" tick={{ fontSize: 14 }} axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Bar dataKey="specialist" radius={10} label={CustomLabel('specialist', 'project')}>
                            {data.map((_, index) => (
                                <Cell key={index} fill={index === data.length - 1 ? '#00A8E8' : '#C2E9F8'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div>
                <div className="rounded-[24px] bg-white w-[700px] h-[174px] p-[20px] mb-[20px]">
                    <div className="flex justify-between mb-[20px]">
                        <p className="text-[20px] font-[500]">Данные</p>
                        <p className="text-[16px] font-[500]">Изменить</p>
                    </div>

                    <div className="flex justify-between px-[10px]">
                        <div>
                            <p className="mb-[8px] text-[rgb(111,109,115)] text-[16px] font-[500]">Коммисия</p>
                            <h2 className="flex gap-[4px] text-[42px] font-[700]">23<span className="text-[18px] font-[500] mt-[2px]">%</span></h2>
                        </div>
                        <div>
                            <p className="mb-[8px] text-[rgb(111,109,115)] text-[16px] font-[500]">Период выплат</p>
                            <h2 className="flex gap-[4px] text-[42px] font-[700]">1<span className="text-[18px] font-[500] mt-[2px]">раз в неделью</span></h2>
                        </div>
                        <div>
                            <p className="mb-[8px] text-[rgb(111,109,115)] text-[16px] font-[500]">Отзывы</p>
                            <h2 className="flex gap-[4px] text-[42px] font-[700]">220<span className="text-[18px] font-[500] mt-[2px]">раз</span></h2>
                        </div>
                    </div>
                </div>

                <div className="w-[700px] bg-white rounded-[24px] p-[20px]">
                    <p className="text-[20px] font-[500] mb-[24px]">Платежи</p>
                    <div className="flex justify-between mb-[12px]">
                        <p className="text-[16px] text-[#6F6D73] font-[500]">Все транзакции</p>
                        <div className="flex gap-[17px] mr-[15px]">
                            <img className="w-[19px]" src={Icon1} alt="" />
                            <img className="w-[18px]" src={Icon2} alt="" />
                        </div>
                    </div>

                    {[...Array(9)].map((_, index) => (
                        <div key={index} className="flex h-[44px] justify-between items-center rounded-[5px] mb-[12px] cursor-pointer hover:bg-gray-200">
                            <div>
                                <p className="text-[14px] font-[500]">Ползователь</p>
                                <p className="text-[rgb(111,109,115)] text-[14px] font-[500]">Ментор(ФИО) - UX/UI дизайн - Курс</p>
                            </div>
                            <div className="flex gap-[24px] items-center">
                                <p className="text-[12px] font-[700] text-[rgb(111,109,115)]">11.12.24</p>
                                <h3 className="text-[16px] font-[500]">2000 с</h3>
                                <div className="relative" ref={el => (menuRefs.current[index] = el)}>
                                    <VscKebabVertical
                                        className="ml-[7px] cursor-pointer"
                                        onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                                    />
                                    {activeMenu === index && (
                                        <div className="absolute right-0 mt-[10px] w-[120px] bg-[#0F0F11] text-white rounded-[10px] p-[10px] z-10 shadow-lg">
                                            <p
                                                className="text-[14px] font-medium mb-2 cursor-pointer hover:underline"
                                                onClick={() => handleOpenModal('data', index)}
                                            >
                                                Данные
                                            </p>
                                            <p
                                                className="text-[14px] text-red-500 font-medium cursor-pointer hover:underline"
                                                onClick={() => handleOpenModal('delete', index)}
                                            >
                                                Удалить
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Payments;
