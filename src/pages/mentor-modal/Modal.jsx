import { useEffect, useRef } from "react";

const Modal = ({ onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div
            ref={modalRef}
            className="bg-white p-6 rounded-2xl max-w-[380px] w-full shadow-lg relative"
        >


            <h1 className="text-[22px] font-bold text-center mb-5">Новый ментор</h1>

            <form className="space-y-3 text-sm">
                <div>
                    <label className="font-semibold">Имя и Фамилия:</label>
                    <input
                        style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                        placeholder="Настоящее имя и фамилия"
                        className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    />
                </div>

                <div className="relative">
                    <label className="font-semibold">Специалист:</label>
                    <select
                        style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                        className="w-full appearance-none px-4 py-2 rounded-[10px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    >
                        <option>Выберите вашу специальность</option>
                    </select>

                    <div className="pointer-events-none absolute right-3 top-[70%] -translate-y-1/2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9C18 9 13.581 15 12 15C10.419 15 6 9 6 9" stroke="#0C0C0C" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>

                <div className="relative">
                    <label className="font-semibold">Опыт работы:</label>
                    <select
                        style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                        className="w-full appearance-none px-4 py-2 rounded-[10px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    >
                        <option>Выберите ваш опыт</option>
                    </select>

                    <div className="pointer-events-none absolute right-3 top-[70%] -translate-y-1/2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9C18 9 13.581 15 12 15C10.419 15 6 9 6 9" stroke="#0C0C0C" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>


                <div className="flex gap-2">
                    <div className="w-1/2">
                        <label className="font-semibold">Телефон:</label>
                        <input
                            type="text"
                            placeholder="0 *** *** ***"
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="font-semibold">Email:</label>
                        <input
                            type="email"
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            placeholder="Ваш email"
                            className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>
                </div>

                <div>
                    <label className="font-semibold">Пароль:</label>
                    <input
                        type="password"
                        style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                        placeholder="Придумайте пароль"
                        className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    />
                </div>

                <div className="flex gap-3 mt-4">
                    <button
                        type="button"

                        onClick={onClose}
                        className="flex-1 !bg-black text-white rounded-lg py-2"
                    >
                        Отмена
                    </button>
                    <button
                        type="submit"
                        style={{backgroundColor: "rgba(35, 175, 206, 1)"}}

                        className="  flex-1 bg-cyan-500 text-white rounded-lg py-2"
                    >
                        Создать
                    </button>
                </div>
            </form>
        </div>
    )
        ;
};

export default Modal;
