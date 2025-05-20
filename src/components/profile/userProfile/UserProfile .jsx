import React, {useState} from 'react';
import LogoutIcon from '../../../assets/icons/logout-icon.svg';
import Avatar from '../../../assets/images/avatar.svg';
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(localStorage.getItem("name") || "");
    const [surname, setSurname] = useState(localStorage.getItem("surname") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
    const [error, setError] = useState({});

    const handleSave = () => {
        setError({});

        if (!name) {
            setError((prevError) => ({ ...prevError, name: "Имя не может быть пустым" }));
        }
        if (!surname) {
            setError((prevError) => ({ ...prevError, surname: "Фамилия не может быть пустой" }));
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setError((prevError) => ({ ...prevError, email: "Некорректный email" }));
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            setError((prevError) => ({ ...prevError, phone: "Некорректный номер телефона (должен состоять из 10 цифр)" }));
        }

        if (name && surname && emailPattern.test(email) && phonePattern.test(phone)) {
            localStorage.setItem("name", name);
            localStorage.setItem("surname", surname);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);

            alert("Данные успешно сохранены!");
        }
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="bg-white p-[30px] rounded-[32px] w-[348px] sm:w-[409px] mx-auto text-center">
                <div className={"flex justify-between items-center"}>
                    <h3 className={"text-[24px] font-[700]"}>Ваши данные</h3>
                    <img
                        onClick={() => navigate('/profile')}
                        className={"cursor-pointer"}
                        src={LogoutIcon}
                        alt="Logout"
                    />
                </div>
                <div className="w-full mt-[37px]">
                    <img className={"w-[100px] mx-auto"} src={Avatar} alt="Avatar"/>
                    <p className={"text-center text-[16px] font-[600] mt-[18px] mb-[20px]"}>Изменить фото</p>
                </div>

                <div className={"text-left"}>
                    <input
                        className={`w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border ${error.name ? "border-[rgb(240,61,61)]" : "border-[rgb(115,87,255)]"} rounded-2xl mt-5 outline-none`}
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error.name && (
                        <div className="ml-[6px] text-[12px] text-[#E93535]">{error.name}</div>
                    )}

                    <input
                        className={`w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border ${error.surname ? "border-[rgb(240,61,61)]" : "border-[rgb(115,87,255)]"} rounded-2xl mt-5 outline-none`}
                        type="text"
                        placeholder="Ваше фамилия"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    {error.surname && (
                        <div className="ml-[6px] text-[12px] text-[#E93535]">{error.surname}</div>
                    )}

                    <input
                        className={`w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border ${error.email ? "border-[rgb(240,61,61)]" : "border-[rgb(115,87,255)]"} rounded-2xl mt-5 outline-none`}
                        type="email"
                        placeholder="Ваш почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && (
                        <div className="ml-[6px] text-[12px] text-[#E93535]">{error.email}</div>
                    )}

                    <input
                        className={`w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border ${error.phone ? "border-[rgb(240,61,61)]" : "border-[rgb(115,87,255)]"} rounded-2xl mt-5 outline-none`}
                        type="text"
                        placeholder="Ваш номер"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {error.phone && (
                        <div className="ml-[6px] text-[12px] text-[#E93535]">{error.phone}</div>
                    )}

                    <button
                        onClick={handleSave}
                        className='h-[56px] w-full bg-[rgb(45,45,45)] rounded-[24px] text-[20px] font-[700] text-white mt-[18px]'>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
