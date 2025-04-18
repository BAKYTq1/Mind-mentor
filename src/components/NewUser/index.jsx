import { useEffect, useRef, useState } from "react";

const NewUser = ({ onClose }) => {
    const modalRef = useRef();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose(); // Закрытие модального окна при клике вне его
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    // /////////////////////////////////////////////////////
    const closeModal = () => {
        setIsOpen(false);
      };
    //   //////////////////////////////////////////////////


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Здесь можно добавить логику для отправки данных формы, например, через API
        onClose(); // Закрытие модального окна после отправки формы
    };

    const handleCancel = () => {
        onClose(); // Закрытие модального окна без сброса данных формы
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div
                ref={modalRef}
                className="bg-white p-6 rounded-2xl w-[383px] h-[565px] shadow-lg relative"
            >
                <h1 className="text-[22px] font-bold text-center mb-5">Пользователь</h1>

                <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
                    <div>
                        <label className="font-semibold">Имя:</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            placeholder="Ваше имя"
                            className="w-full h-[46px] px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>

                    <div className="relative">
                        <label className="font-semibold">Фамилия:</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            placeholder="Ваша фамилия"
                            className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>

                    <div className="relative">
                        <label className="font-semibold">Email:</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            placeholder="Ваша почта"
                            className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>

                    <div className="relative">
                        <label className="font-semibold">Телефон:</label>
                        <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            placeholder="0*** *** ***"
                            className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>

                    <div>
                        <label className="font-semibold">Пароль:</label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{backgroundColor: "rgba(240, 240, 243, 1)"}}
                            placeholder="Придумайте пароль"
                            className="w-full px-4 py-2 rounded-[10px] bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        />
                    </div>

                    <div className="flex gap-3 mt-4">
                        
                        <button
          onClick={closeModal} // Закрытие модального окна при нажатии на кнопку "×"
          className="flex-1 !bg-black text-white rounded-[12px] py-2 w-[156px] h-[46px]"
        >
            Отмена
        </button>
                        <button
                            type="submit"
                            style={{backgroundColor: "rgba(35, 175, 206, 1)"}}
                            className="flex-1 text-white rounded-[12px] py-2"
                        >
                            Создать
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewUser;

