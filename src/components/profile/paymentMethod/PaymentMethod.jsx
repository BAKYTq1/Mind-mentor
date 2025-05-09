import React from 'react';
import {useNavigate} from "react-router-dom";
import {IoIosClose} from "react-icons/io";
import Visa from "../../../assets/images/visa.png"
import Mastercard from "../../../assets/images/mastercard.png"
import Trash from "../../../assets/icons/trash.svg"

const PaymentMethod = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-4">
            <div className="bg-white p-[30px] rounded-[32px] w-[348px] sm:w-[409px] mx-auto text-center">
                <div className={"flex justify-between items-center"}>
                    <h3 className="text-[24px] font-[700]">Способ оплаты</h3>
                    <div className="w-[25px] h-[25px] rounded-[50%] flex items-center justify-center bg-gray-300">
                        <IoIosClose onClick={() => navigate('/profile')} className="text-[rgb(40,48,63)] text-[20px]"/>
                    </div>
                </div>

                <div className={"flex justify-between items-center mt-[32px]"}>
                    <div
                        className={"flex justify-between items-center w-[289px] h-[56px] rounded-[16px] bg-[rgb(45,45,45)] px-[20px]"}>
                        <h3 className={"text-[20px] font-[700] text-white"}>**** 1234</h3>
                        <img className={"w-[34px] h-[24px] object-cover"} src={Visa} alt=""/>
                    </div>
                    <div className={"w-[56px] h-[56px] bg-[#FAFAFA] rounded-[50%] flex items-center justify-center"}>
                        <img className={"w-[20px]"} src={Trash} alt=""/>
                    </div>
                </div>

                <div className={"flex justify-between items-center mt-[32px]"}>
                    <div
                        className={"flex justify-between items-center w-[289px] h-[56px] rounded-[16px] bg-[rgb(45,45,45)] px-[20px]"}>
                        <h3 className={"text-[20px] font-[700] text-white"}>**** 1234</h3>
                        <img className={"w-[34px] h-[24px] object-cover"} src={Mastercard} alt=""/>
                    </div>
                    <div className={"w-[56px] h-[56px] bg-[#FAFAFA] rounded-[50%] flex items-center justify-center"}>
                        <img className={"w-[20px]"} src={Trash} alt=""/>
                    </div>
                </div>

                <div className="">
                    <p className="mt-8 text-[16px] font-[500]">Номер карты</p>
                    <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full h-14 px-4 py-3 sm:px-5 sm:py-5 border border-[rgb(115,87,255)] rounded-2xl mb-1 mt-1 outline-none placeholder-gray-400"
                    />

                    <div className="flex gap-[25px] items-center">
                        <div className="flex-1">
                            <p className="mt-8 text-[16px] font-[500]">Срок действия</p>
                            <input
                                type="text"
                                placeholder="MM/ГГ"
                                className="w-full h-14 px-4 py-3 border border-[rgb(115,87,255)] rounded-2xl mb-1 mt-1 outline-none placeholder-gray-400"
                            />
                        </div>

                        <div className="flex-1">
                            <p className="mt-8 text-[16px] font-[500]">CVV2</p>
                            <input
                                type="password"
                                placeholder="***"
                                className="w-full h-14 px-4 py-3 border border-[rgb(115,87,255)] rounded-2xl mb-1 mt-1 outline-none placeholder-gray-400"
                            />
                        </div>

                    </div>
                    <button
                        className='h-[56px] w-full bg-[rgb(45,45,45)] rounded-[24px] text-[20px] font-[700] text-white mt-[18px]'>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>);
};

export default PaymentMethod;