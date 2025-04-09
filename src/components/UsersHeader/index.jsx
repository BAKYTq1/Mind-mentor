import React from 'react';
import { RiSearch2Fill } from "react-icons/ri";




function UsersHeader() {
    return (
        <div className=' container bg-[black]'>
            <header className='  mx-auto w-[1200px] h-[102px] flex items-center justify-between'>
                <div>
                    <h1 className=' text-[64px] font-bold leading-[58px]  text-left text-[white]'>Пользователи</h1>
                    <select className='text-white mt-[12px] outline-none' name="" id="">
                        <option value="">11 июнь - 12 августь 2024</option>
                        <option value="">11 июль - 12 сентябрь 2024</option>
                    </select>
                </div>
                <div className='w-[465px] h-[64px] flex items-center justify-center bg-white rounded-[20px]'>
                <input className='w-[386px] h-[24px] outline-none' type="text" placeholder='Поиск пользователя' />
                <RiSearch2Fill className='w-[24px] h-[24px]'  />


                </div>
             
            </header>
        </div>
    );
}

export default UsersHeader;

