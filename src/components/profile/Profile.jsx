import React from 'react';
import Avatar from '../../assets/images/avatar.svg'
import Icon from '../../assets/icons/icon3.svg';
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/user-profile');
    }
    const navigateToPassword = () => {
        navigate('/user-password');
    }
    const navigateToPaymentMethod = () => {
        navigate('/payment-method');
    }

    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-4">
            <div className="bg-white p-[30px] rounded-[32px] w-[348px] sm:w-[409px] mx-auto text-center">
                <div>
                    <img className="mx-auto mb-4" src={Avatar} alt=""/>
                    <h3 className="text-[18px] font-[700]">Марина Сополова</h3>
                    <p className="text-[16px] font-[500] text-[rgb(111,109,115)]">youre@gmail.com</p>
                </div>

                <div>
                    <div
                        className="flex items-center justify-center w-full h-[56px] py-3 px-5 rounded-[24px] bg-[#2D2D2D] text-white text-[16px] font-[600] mt-6 cursor-pointer">
                        <div className={"w-[309px] flex items-center"}>
                            <p className="w-[309px] ml-[23px] text-center">Мои покупки</p>
                            <img className="w-[24px]" src={Icon} alt=""/>
                        </div>
                    </div>

                    <div onClick={navigateToProfile}
                         className="w-full h-[56px] py-3 px-5 flex items-center justify-end rounded-[24px] text-[16px] font-[600] mt-6 hover:bg-gray-200 transition duration-300 cursor-pointer">
                        <p className="mx-auto">Мои данные</p>
                    </div>

                    <div onClick={navigateToPaymentMethod}
                         className="w-full h-[56px] py-3 px-5 flex items-center justify-end rounded-[24px] text-[16px] font-[600] mt-6 hover:bg-gray-200 transition duration-300 cursor-pointer">
                        <p className="mx-auto">Способы оплаты</p>
                    </div>

                    <div onClick={navigateToPassword}
                         className="w-full h-[56px] py-3 px-5 flex items-center justify-end rounded-[24px] text-[16px] font-[600] mt-6 hover:bg-gray-200 transition duration-300 cursor-pointer">
                        <p className="mx-auto">Пароль</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
