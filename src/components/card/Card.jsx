
import React from 'react';
import './style.scss'
const Card = () => {
  return (
    <div className="container">
      <div className='cards-6 mt-[60px] flex gap-[20px] justify-center sm:justify-start'>
      <div className="cards-6-item">
        <button className="cardd-btn w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-[20px] border-indigo-600 font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20 mb-4 sm:mb-0">
          #ДИЗАЙН
        </button>
        <button className="cardd-btn w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#FFE0CB] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#FFE0CB]/20 mb-4 sm:mb-0">
          #FRONTEND
        </button>
        <button className="cardd-btn w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#E1F3FF] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20 mb-4 sm:mb-0">
          #BACKEND
        </button>
        <button className="cardd-btn w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#FFE0CB] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20 mb-4 sm:mb-0">
          #ДИЗАЙН
        </button>
        <button className="cardd-btn w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#D5F6ED] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20">
          #ДИЗАЙН
        </button>
        <button className="cardd-btn w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#FFE0CB] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#FFE0CB]/20 mb-4 sm:mb-0">
          #FRONTEND
        </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
