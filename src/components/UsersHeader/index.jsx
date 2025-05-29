import React, { useState, useEffect } from 'react';
import { RiSearch2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { setInputSearchAdmin } from '../../redux/InputText/InputSerchAdmin';
import { searchMentor } from '../../redux/mentorApi/SearchMentor';

const tabTexts = {
    list: "Список пользователей",
    dashboard: "Менторы",
    videos: "Курсы",
    favorites: "Избранное",
    payments: "Платежи",
    messages: "Сообщения",
    windows: "Окна",
};

function UsersHeader({ activeTab }) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [placeholderText, setPlaceholderText] = useState('Поиск по разделу');

    useEffect(() => {
        setSearchValue('');
        if (tabTexts[activeTab] === "Менторы") {
            setPlaceholderText("Поиск по менторам");
        } else {
            setPlaceholderText(`Поиск по ${tabTexts[activeTab] || "разделу"}`);
        }
    }, [activeTab]);

    const handleSearch = () => {
        dispatch(setInputSearchAdmin(searchValue));
        if (activeTab === 'dashboard') {
            dispatch(searchMentor(searchValue));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    if (!activeTab) return null;

    return (
        <div className='max-w-[1200px] m-auto bg-[black]'>
            <header className='mx-auto w-full h-[102px] flex items-center justify-between'>
                <div>
                    <h1 className='text-[45px] font-bold leading-[58px] text-left text-[white]'>
                        {tabTexts[activeTab] || "Выберите раздел"}
                    </h1>
                    <select className='text-white mt-[12px] outline-none'>
                        <option value="">11 июнь - 12 августь 2024</option>
                        <option value="">11 июль - 12 сентябрь 2024</option>
                    </select>
                </div>
                <div className="w-full max-w-[465px] h-[64px] flex items-center bg-white rounded-[20px] overflow-hidden shadow-md focus-within:shadow-xl transition-shadow duration-300">
                    <input
                        className="flex-1 h-full px-6 text-base text-gray-800 placeholder-gray-400 outline-none bg-transparent"
                        type="text"
                        placeholder={placeholderText}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyPress} 
                    />
                    <button
                        onClick={handleSearch}
                        className="w-[64px] h-full bg-[#23AFCE] hover:bg-[#1f9cb8] transition-all duration-200 flex items-center justify-center rounded-l-none rounded-r-[20px] active:scale-95"
                    >
                        <RiSearch2Fill className="w-[24px] h-[24px] text-white" />
                    </button>
                </div>

            </header>
        </div>
    );
}

export default UsersHeader;