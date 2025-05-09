import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import WarningIcon from "../../../assets/icons/warning-icon.svg";
import WarningIcon2 from "../../../assets/icons/warning-icon2.svg";
import {useNavigate} from "react-router-dom";

const UserPassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const realPassword = localStorage.getItem("userPassword") || "12345678";

    const handleSave = () => {
        setError("");

        if (currentPassword !== realPassword) {
            setError("current");
            return;
        }

        if (newPassword.length < 8 || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) {
            setError("format");
            return;
        }

        if (newPassword !== repeatPassword) {
            setError("match");
            return;
        }

        localStorage.setItem("userPassword", newPassword);

        alert("Пароль успешно изменён!");
        setCurrentPassword("");
        setNewPassword("");
        setRepeatPassword("");
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-4">
            <div className="bg-white p-[30px] rounded-[32px] w-[348px] sm:w-[409px] mx-auto text-center">
                <div className="flex justify-between items-center mb-[35px]">
                    <h3 className="text-[24px] font-[700]">Ваш пароль</h3>
                    <div className="w-[25px] h-[25px] rounded-[50%] flex items-center justify-center bg-gray-300">
                        <IoIosClose onClick={() => navigate('/profile')} className="text-[rgb(40,48,63)] text-[20px] cursor-pointer" />
                    </div>
                </div>

                <div>
                    <input
                        className={`w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border ${error === "current" ? "border-[rgb(240,61,61)]" : "border-[rgb(115,87,255)]"} rounded-2xl mb-[2px] mt-[20px] outline-none`}
                        type="password"
                        placeholder="Текущий пароль"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    {error === "current" && (
                        <div className="flex gap-[6px] pl-[6px] text-[12px] text-[#E93535]">
                            <img src={WarningIcon} alt="" />
                            <p>Неверный пароль</p>
                        </div>
                    )}

                    <input
                        className="w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border border-[rgb(115,87,255)] rounded-2xl mb-[2px] mt-[20px] outline-none"
                        type="password"
                        placeholder="Новый пароль"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {error === "format" && (
                        <div className="flex gap-[6px] pl-[6px] text-[12px] text-[#6F6D73] ">
                            <img src={WarningIcon2} alt="" />
                            <p>Пароль должен содержать минимум 8 символов, а также заглавные буквы и цифры</p>
                        </div>
                    )}

                    <input
                        className="w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border border-[rgb(115,87,255)] rounded-2xl mb-[2px] mt-[20px] outline-none"
                        type="password"
                        placeholder="Повторить пароль"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {error === "match" && (
                        <div className="flex gap-[6px] pl-[6px] text-[12px] text-[#E93535] mt-[6px]">
                            <img src={WarningIcon} alt="" />
                            <p>Пароли не совпадают</p>
                        </div>
                    )}

                    <button
                        onClick={handleSave}
                        className='h-[56px] w-full bg-[rgb(45,45,45)] rounded-[24px] text-[20px] font-[700] text-white mt-[32px]'>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserPassword;
