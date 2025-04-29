

import React from 'react';
import kalendar from "../../assets/kalendar.svg";
import mmmm from "../../assets/mmmm.svg"
import nnnn from "../../assets/nnnn.svg"
const data = [
  { day: "Пн", height: 222 },
  { day: "Вт", height: 155 },
  { day: "Ср", height: 102 },
  { day: "Чт", height: 231 },
  { day: "Пт", height: 130 },
  { day: "Сб", height: 219 },
  { day: "Вс", height: 197, active: true },
];

const Dashboarde = () => {
  return (
    <div className='container flex gap-[20px]'>

      <div className="p-4 w-[412px] h-auto bg-[#F5F6FB] rounded-[24px]">

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[20px] font-jost font-medium">Продано</h1>
          <div className="flex items-center gap-2 border-[2px] border-[#E0E0E0] rounded-[12px] w-[158px] h-[32px] px-2">
            <p className="text-[12px] font-normal text-[#6F6D73]">Последний 7 дней</p>
            <img src={kalendar} alt="calendar" className="w-[16px] h-[16px]" />
          </div>
        </div>

        <div className="mb-6">
          <button className="text-[47px] font-bold ">
            65 <span className="text-[18px] font-medium align-super">раз</span>
          </button>
        </div>

        <div className="flex gap-[6px] items-end">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <button
                className={`w-[48px] rounded-[12px] ${item.active ? "bg-[#23AFCE]" : "bg-[#C7E7EE]"}`}
                style={{ height: `${item.height}px` }}
              />
              <h1 className="mt-1 text-[14px]">{item.day}</h1>
            </div>
          ))}
        </div>



        <div className='w-[372px] h-[220px]  mt-[20px] gap-[20px]'>

          <div className='flex items-center justify-center gap-[30px]'>

            <div>
              <div className='font-medium text-[16px]'>Выручка</div>
              <span className='font-bold text-[32px]'>
                100 200 <span className='font-medium text-[18px]'>c</span>
              </span>
            </div>

            <div>
              <div className='font-medium text-[16px]'>Активные пользователи</div>
              <span className='font-bold text-[32px]'>
                320 <span className='font-medium text-[18px]'>чел</span>
              </span>
            </div>

          </div>

          <div className='ml-[20px] mt-[10px]'>
            <p className='font-medium text-[16px] mt-[20px]'>Продано</p>
            <p className='font-bold text-[20px]'>
              320 <span className='font-medium mt-[10px] text-[16px] text-[#6F6D73]'>курс</span>
            </p>
            <p className='font-bold text-[20px]'>
              320 <span className='font-medium text-[16px] text-[#6F6D73]'>курс</span>
            </p>
            <p className='font-bold text-[20px]'>
              320 <span className='font-medium text-[16px] text-[#6F6D73]'>проекты</span>
            </p>
          </div>

        </div>






      </div>

      <div className="flex flex-col gap-[20px]">

        <div className="w-[700px] bg-[#F5F6FB] p-4 rounded-[24px]">
          <div className='flex justify-between items-center mb-4'>
            <h2 className="text-black font-medium text-[20px]">Менторы</h2>
            <div className="flex items-center gap-2 border-[2px] border-[#E0E0E0] rounded-[12px] w-[158px] h-[32px] px-2">
              <p className="text-[12px] font-normal text-[#6F6D73]">Последний 7 дней</p>
              <img src={kalendar} alt="calendar" className="w-[16px] h-[16px]" />
            </div>
          </div>

          <div className="flex justify-between mt-[12px]">
            <div>
              <p className="font-medium text-[16px] text-[#6F6D73]">Новые менторы</p>
              <h1 className="text-[42px] font-bold text-black">
                100 <span className="text-[18px] font-medium">чел</span>
              </h1>
            </div>
            <div>
              <p className="font-medium text-[16px] text-[#6F6D73]">Активные менторы</p>
              <h1 className="text-[42px] font-bold text-black">
                320 <span className="text-[18px] font-medium">чел</span>
              </h1>
            </div>
            <div>
              <p className="font-medium text-[16px] text-[#6F6D73]">Новые комментарии</p>
              <h1 className="text-[42px] font-bold text-black">
                320 <span className="text-[18px] font-medium">чел</span>
              </h1>
            </div>
          </div>

          {/* Запросы */}
          <div className='mt-[24px]'>
            <h2 className="text-black font-medium text-[20px]">Запросы</h2>
            <div className="flex justify-between mt-[12px]">
              <div>
                <p className="font-medium text-[16px] text-[#6F6D73]">Поддержка</p>
                <h1 className="text-[42px] font-bold text-black">
                  20 <span className="text-[18px] font-medium">чел</span>
                </h1>
              </div>
              <div>
                <p className="font-medium text-[16px] text-[#6F6D73]">Жалобы</p>
                <h1 className="text-[42px] font-bold text-[red]">
                  12 <span className="text-[18px] font-medium text-black">чел</span>
                </h1>
              </div>
              <div>
                <p className="font-medium text-[16px] text-[#6F6D73]">Вопросы</p>
                <h1 className="text-[42px] font-bold text-black">
                  32 <span className="text-[18px] font-medium">чел</span>
                </h1>
              </div>
            </div>
          </div>

        </div>

        <div className="w-[700px] h-[387px] bg-[#F5F6FB] rounded-[24px] p-4">


          <div className='flex gap-[330px]'>
            <h1 className="text-[#000000] font-medium text-[20px]">Финансовый отчет</h1>
            <div className="flex items-center gap-2 border-[2px] border-[#E0E0E0] rounded-[12px] w-[158px] h-[32px] px-2">
              <p className="text-[12px] font-normal text-[#6F6D73]">Последний 7 дней</p>
              <img src={kalendar} alt="calendar" className="w-[16px] h-[16px]" />
            </div>
          </div>

          <div className='flex'>

            <div>
              <div>
                <p className='font-medium text-[14px] font-jost mt-[20px]' >Количество транзакций</p>
                <p className='font-bold text-[32px]'>100 <span className='font-medium text-[18px] align-super'>раз  </span></p>
              </div>

              <div>
                <p className='font-medium text-[14px] font-jost' >Сумма транзакций</p>
                <p className='font-bold text-[32px]'>350 000 <span className='font-medium text-[18px] align-super'>c</span></p>
              </div>


              <div>
                <p className='font-medium text-[14px] font-jost' >Комиссия</p>
                <p className='font-bold text-[32px]' >15 <span className='font-medium text-[18px] align-super'>%</span></p>
              </div>
            </div>



            <div className="relative">
              <img className="ml-[40px] w-[280px] h-[280px]" src={mmmm} alt="" />
              <img className="absolute top-[40px] left-[110px]" src={nnnn} alt="" />
            </div>



            <div>
              <div>
                <p className='font-medium text-[14px] font-jost mt-[20px]' > Комиссия платформы</p>
                <p className='font-bold text-[32px]'>52 000<span className='font-medium text-[18px] align-super'>c  </span></p>
              </div>

              <div>
                <p className='font-medium text-[14px] font-jost' >Прибыл</p>
                <p className='font-bold text-[32px]'>45 000 <span className='font-medium text-[18px] align-super'>c</span></p>
              </div>


              <div>
                <p className='font-medium text-[14px] font-jost' >Комиссия</p>
                <p className='font-bold text-[32px]' >15 <span className='font-medium text-[18px] align-super'>%</span></p>
              </div>
            </div>

          </div>










        </div>

      </div>
    </div>
  );
};

export default Dashboarde;
