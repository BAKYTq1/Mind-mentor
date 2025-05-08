

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nazz from "../../assets/nazz.svg";
import kkk from "../../assets/kkk.svg";
import kosmos from "../../assets/kosmos.svg";

const Korzina = () => {
    const navigate = useNavigate();

    return (
        <div className='container'>
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

            <div className='items-center justify-center'>
                <div className='font-bold text-[32px]'>Корзина</div>
                <h3 className='font-bold text-[42px] text-center'> O Неет</h3>
                <p className='font-bold text-[32px] text-center'>Здесь ничего нет</p>
                <div className="flex justify-center">
                    <img src={kosmos} alt="космос" className="w-full max-w-md" />
                </div>
            </div>

            <div className='flex justify-center mt-5 mb-10'>
                <button
                    onClick={() => navigate("/pokupka")}
                    className='bg-[#2D2D2D] text-white rounded-[24px] w-[380px] h-[60px] font-bold text-[20px]'>
                    Начать покупки! 😋
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Korzina;
