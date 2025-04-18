





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
    </div>
  );
};

export default Card;

