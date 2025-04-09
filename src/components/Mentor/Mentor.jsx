import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MentorCart from './Mentor-cart/MentorCart';
import { mentors } from './Data/Data'; 
import { IoPlayOutline } from "react-icons/io5";
import { RiPlayReverseLargeLine } from "react-icons/ri";

// import "swiper/css";
// import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Mentor = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth >= 760);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className='Mentor'>
      <div className='item-mentor'>
        <h1>Менторы</h1>
        <div className="mentor-controls">
          <h4>Посмотреть все <IoPlayOutline /></h4>
          {isMobile && (
            <>
              <button onClick={handlePrev} aria-label="Previous slide">
                <RiPlayReverseLargeLine />
              </button>
              <button onClick={handleNext} aria-label="Next slide">
                <IoPlayOutline />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="Mentors">
        {isMobile ? (
          <Swiper
            // modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            loop={true}
            breakpoints={{
              200: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              770: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            
          >
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <MentorCart mentor={mentor} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="mentor-grid">
            {mentors.map((mentor) => (
              <MentorCart key={mentor.id} mentor={mentor} />
            ))} 
           </div> 
         )} 
      </div>
      <button className='item-mentor-btn w-[100%]'>Показать все</button>
    </div>
  );
};

export default Mentor;
