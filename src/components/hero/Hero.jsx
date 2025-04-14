

import React from 'react';
import input from "../../assets/input.svg";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="w-full h-auto bg-[#D5F6ED] relative rounded-[24px] p-6 mt-[60px] mx-auto">
        <h6 className="text-[24px] font-medium text-center text-[#333] mt-[60px]">
          Успехов тебе в начинаниях!🤗
        </h6>
        <h2 className="text-[32px] md:text-[42px] font-bold mt-[34px] text-center text-[#333]">
          Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты
        </h2>

        <div className="relative mt-[32px] flex justify-center flex-wrap">
          <input
            className="w-full sm:w-[450px] md:w-[580px] h-[64px] rounded-[20px] pl-12 pr-4 bg-white text-black mt-6"
            type="text"
            placeholder="Поиск, например курс для дизайнера"
          />
          
          <img
            className="absolute left-[720px] mt-[10px] top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"
            src={input}
            alt="Search Icon"
          />

          <button className="hero-btn w-full sm:w-[158px] h-[64px] bg-black text-white rounded-[24px] mt-6 flex items-center justify-center shadow-md transition duration-300  ml-[20px] z-1">
            Подобрать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
