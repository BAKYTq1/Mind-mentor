





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const tags = [
  { text: '#ДИЗАЙН', color: '[#D5F6ED]',  },
  { text: '#FRONTEND', color: '[#FFE0CB]', },
  { text: '#BACKEND', color: '[#E1F3FF]',  },
  { text: '#ДИЗАЙН', color: '[#FFE0CB]', },
  { text: '#ДИЗАЙН', color: '[#D5F6ED]', },
  { text: '#FRONTEND', color: '[#FFE0CB]',},
];

const Card = () => {
  return (
    <div className="container mx-auto px-4 mt-[60px]">
    <div className="container px-4 pt-[40px] mt-[60px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={80}
        slidesPerView={5.1}
        breakpoints={{
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.2 },
          1024: { slidesPerView: 5.2 },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {tags.map((tag, index) => (
          <SwiperSlide key={index}>
            <div
              className={` w-[220px] h-[104px] border-2 border-${tag.color} font-bold text-[20px]   rounded-[30px]  shadow-lg transition hover:scale-105 ${tag.bg} mb-4  flex items-center justify-center`}
            >
              {tag.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
          // delay: 2000,
          // disableOnInteraction: false,
        }}
      >
        {tags.map((tag, index) => (
         <SwiperSlide key={index} className="overflow-visible">
         <div
           className={`relative z-10 w-[220px] h-[104px] border-2 font-bold text-[20px] rounded-[30px] shadow-lg transition hover:scale-105 origin-top border-${tag.color} mb-4 flex items-center justify-center`}
           style={{ borderColor: tag.color }}
         >
           {tag.text}
         </div>
       </SwiperSlide>
       
        ))}
      </Swiper>
    </div>
  );
};

export default Card;

