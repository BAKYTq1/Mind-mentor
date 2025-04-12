import React, { useState } from "react";
import ava1 from "../../assets/ava1.svg"
import star1 from "../../assets/star1.svg"
import star2 from "../../assets/star2.svg"


const Filtr = () => {
    const [filters, setFilters] = useState({
        users: "По активности менторов",
        reviews: ["4* - 5*"],
        experience: ["Выше 2 года"],
        specialization: ["UX/UI дизайнер", "Frontend разработчик"],
        sort: "По возрастанию",
    });

    const [showModal, setShowModal] = useState(true);

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleDelete = () => {
        console.log("Специальность удалена");
        setShowModal(false);
    };

    if (!showModal) return null;


    const toggleCheckbox = (category, value) => {
        setFilters((prev) => {
            const updated = prev[category].includes(value)
                ? prev[category].filter((v) => v !== value)
                : [...prev[category], value];
            return { ...prev, [category]: updated };
        });
    };

    const setRadio = (category, value) => {
        setFilters((prev) => ({ ...prev, [category]: value }));
    };

    const handleShow = () => {
        console.log("Применённые фильтры:", filters);
    };


    const Checkbox = ({ label, category }) => (
        <label className="flex items-center gap-2 text-sm py-1">
            <input
                type="checkbox"
                className="w-5 h-5"
                checked={filters[category].includes(label)}
                onChange={() => toggleCheckbox(category, label)}
            />
            {label}
        </label>
    );

    const Radio = ({ label, category, name }) => (
        <label className="flex items-center gap-2 text-sm py-1">
            <input
                type="radio"
                className="w-5 h-5"
                name={name}
                checked={filters[category] === label}
                onChange={() => setRadio(category, label)}
            />
            {label}
        </label>
    );

    return (
        <div className="flex flex-row gap-6 mx-auto max-w-7xl">
            {/* Фильтрация - левая колонка */}
            <div className="bg-[#0D0D0D] text-white p-6 rounded-2xl w-[340px] space-y-6 font-sans w-[200px] h-[720px]">
                <div>
                    <h3 className="text-[#00E0FF] text-sm mb-3">Пользователи</h3>
                    <div className="space-y-1">
                        {[
                            "Все",
                            "По активности менторов",
                            "Новые менторы",
                            "Блокированные менторы",
                            "Удаленные аккаунты",
                        ].map((option) => (
                            <Radio key={option} label={option} category="users" name="users"/>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="w-1/2">
                        <h3 className="text-[#00E0FF] text-sm mb-3">Отзывы</h3>
                        <div className="space-y-1">
                            {["4* - 5*", "3* - 4*", "3* - 4*"].map((option, i) => (
                                <Checkbox key={i} label={option} category="reviews"/>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-[#00E0FF] text-sm mb-3">Опыт</h3>
                        <div className="space-y-1">
                            {["Выше 2 года", "1год - 2года", "1год - 2года"].map((option, i) => (
                                <Checkbox key={i} label={option} category="experience"/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="w-1/2">
                        <div className="space-y-1">
                            <h3 className="text-[#00E0FF] text-sm mb-3">Специализация</h3>
                            {["UX/UI дизайнер1", "Frontend разработчик", "Backend разработчик"].map((option) => (
                                <Checkbox key={option} label={option} category="specialization"/>
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2 mt-[35px]">
                        <div className="space-y-1">
                            {["UX/UI дизайне2", "UX/UI дизайнер3", "UX/UI дизайнер4"].map((option) => (
                                <Checkbox key={option} label={option} category="specialization"/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex gap-6">
                        {["По возрастанию", "По убыванию"].map((option) => (
                            <Radio key={option} label={option} category="sort" name="sort"/>
                        ))}
                    </div>
                </div>

                <button
                    className="w-full bg-[#00E0FF] text-black text-sm font-bold py-2 rounded-xl mt-4"
                    onClick={handleShow}
                >
                    Показать
                </button>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
                <div className="flex justify-center items-center">
                    <div className="bg-gray-200 rounded-[10px] p-3 text-center">
                        <p className="text-sm mb-4">
                            Вы точно хотите удалить <br/> специальность?
                        </p>

                        <button
                            onClick={handleCancel}
                            style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                            className="p-2 px-20 rounded-[10px] text-white flex flex-col mb-2"
                        >
                            Отмена
                        </button>

                        <button
                            onClick={handleDelete}
                            className="!bg-black p-2 px-20 rounded-[10px] text-white"
                        >
                            Удалить
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                        className="bg-gray-200 rounded-[24px] p-10 max-w-[400px] w-full"
                    >
                        <h1 className="text-center mb-4 font-bold text-1xl">Специальность</h1>

                        <div className="text-left mb-4">
                            <h5 className="mb-2 font-bold text-1xl">Название</h5>
                            <input
                                type="text"
                                placeholder="Название специальности"
                                className="w-full p-1 rounded-[10px] border border-gray-300"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                                className="p-2 px-10 rounded-[10px] text-white"
                            >
                                Отмена
                            </button>

                            <button className="!bg-black p-2 px-10 rounded-[10px] text-white">
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                        className="!bg-gray-200 rounded-[24px] p-5 max-w-[360px] w-full"
                    >
                        <h1 className="text-center mb-4 font-bold text-[23px]">
                            Вы точно хотите <br/> заблокировать аккаунт?
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
                                onClick={handleCancel}
                                style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                                className="p-2 px-30 rounded-[10px] text-white mb-2"
                            >
                                Отмена
                            </button>

                            <button
                                onClick={handleDelete}
                                className="!bg-black p-2 px-30 rounded-[10px] text-white"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                        className="bg-gray-200 rounded-[24px] p-5 max-w-[360px] w-full"
                    >
                        <h1 className="text-center mb-4 font-bold text-[23px]">
                            Вы точно хотите <br/> удалить аккаунт?
                        </h1>

                        <div className="flex items-start mb-4">
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
                                onClick={handleCancel}
                                style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                                className="p-2 px-30 rounded-[10px] text-white mb-2"
                            >
                                Отмена
                            </button>

                            <button
                                onClick={handleDelete}
                                className="!bg-black p-2 px-30 rounded-[10px] text-white"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="bg-gray-200 rounded-[16px] p-5 text-center">
                        <p className="text-[20px] font-bold mb-4 ">
                            Вы точно хотите удалить <br/> специальность?
                        </p>

                        <button
                            onClick={handleCancel}
                            style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                            className="p-2 px-24  rounded-[10px] text-white flex flex-col mb-2"
                        >
                            Отмена
                        </button>

                        <button
                            onClick={handleDelete}
                            className="!bg-black p-2 px-24 rounded-[10px] text-white"
                        >
                            Удалить
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Filtr;
