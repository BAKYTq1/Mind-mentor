










// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/autoplay';

// // import input from "../../assets/input.svg";

// // const Hero = () => {
// //   const slides = [
// //     {
// //       bg: '#D5F6ED',
// //       title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
// //     },
// //     {
// //       bg: '#F6E3D5',
// //       title: 'Развивайся вместе с нами — найди своего ментора прямо сейчас!',
// //     },
// //     {
// //       bg: '#E5D5F6',
// //       title: 'Новые знания, новые горизонты — всё здесь, в Mind Mentor 🚀',
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto mt-[60px]">
// //       <Swiper
// //         modules={[Autoplay]}
// //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// //         loop={true}
// //         className="rounded-[24px]"
// //       >
// //         {slides.map((slide, index) => (
// //           <SwiperSlide key={index}>
// //             <div className={`w-full h-auto p-6 rounded-[24px]`} style={{ backgroundColor: slide.bg }}>
// //               <h6 className="text-[24px] font-medium text-center text-[#333] mt-[60px]">
// //                 Успехов тебе в начинаниях!🤗
// //               </h6>
// //               <h2 className="text-[32px] md:text-[42px] font-bold mt-[34px] text-center text-[#333]">
// //                 {slide.title}
// //               </h2>

// //               <div className="mt-[32px] flex justify-center flex-wrap">
// //                 <input
// //                   className="w-full sm:w-[450px] md:w-[580px] h-[64px] rounded-[20px] pl-12 pr-4 bg-white text-black mt-6"
// //                   type="text"
// //                   placeholder="Поиск, например курс для дизайнера"
// //                 />
// //                 <img
// //                   className="relative left-[-40px] mt-[10px] top-[45px] transform -translate-y-1/2 w-[24px] h-[24px]"
// //                   src={input}
// //                   alt="Search Icon"
// //                 />
// //                 <button className="hero-btn w-full sm:w-[158px] h-[64px] bg-black text-white rounded-[24px] mt-6 flex items-center justify-center shadow-md transition duration-300 ml-[20px] z-1">
// //                   Подобрать
// //                 </button>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default Hero;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';

// import input from '../../assets/input.svg';

// const Hero = () => {
//   const slides = [
//     {
//       bg: '#D5F6ED',
//       title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
//     },
//     {
//       bg: '#F6E3D5',
//       title: 'Развивайся вместе с нами — найди своего ментора прямо сейчас!',
//     },
//     {
//       bg: '#E5D5F6',
//       title: 'Новые знания, новые горизонты — всё здесь, в Mind Mentor 🚀',
//     },
//   ];

//   return (
//     <div className="container mx-auto mt-[60px] px-4">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1.1}
//         speed={2000}
//         loop={true}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         className="rounded-[24px]"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-auto p-6 rounded-[24px]"
//               style={{ backgroundColor: slide.bg }}
//             >
//               <h6 className="text-[24px] font-medium text-center text-[#333] mt-[60px]">
//                 Успехов тебе в начинаниях!🤗
//               </h6>
//               <h2 className="text-[32px] md:text-[42px] font-bold mt-[34px] text-center text-[#333]">
//                 {slide.title}
//               </h2>

//               <div className="mt-[32px] flex justify-center flex-wrap">
//                 <input
//                   className="w-full sm:w-[450px] md:w-[580px] h-[64px] rounded-[20px] pl-12 pr-4 bg-white text-black mt-6"
//                   type="text"
//                   placeholder="Поиск, например курс для дизайнера"
//                 />
//                 <img
//                   className="relative left-[-40px] mt-[10px] top-[45px] transform -translate-y-1/2 w-[24px] h-[24px]"
//                   src={input}
//                   alt="Search Icon"
//                 />
//                 <button className="hero-btn w-full sm:w-[158px] h-[64px] bg-black text-white rounded-[24px] mt-6 flex items-center justify-center shadow-md transition duration-300 ml-[20px] z-1">
//                   Подобрать
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'

import input from "../../assets/input.svg";

const slides = [
  {
    bg: '#D5F6ED',
    title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
  },
  {
    bg: '#E1F3FF',
    title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
  },
  {
    bg: '#D5F6ED',
    title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты',
  },
  {
    bg: '#E2DBFA',
    title: 'Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты'
  },
];

const Hero = () => {
  return (
    <div className="container mx-auto mt-[60px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        allowTouchMove={false}
        className="rounded-[24px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[1180px] h-[432px] p-6 rounded-[24px] transition-all duration-300"
              style={{ backgroundColor: slide.bg }}
            >
              <h6 className="text-[24px] font-medium font-jost text-center text-[#333] mt-[66px]">
                Успехов тебе в начинаниях!🤗
              </h6>

              <h2 className="text-[32px] md:text-[42px] font-bold mt-[34px] text-center font-jost text-[#333]">
                {slide.title}
              </h2>

              <div className="mt-[32px] flex justify-center flex-wrap">
                <input
                  className=" w-[580px] h-[64px] rounded-[20px] pl-[25px] text-[20px] font-jost bg-white font-medium text-[#6F6D73] "
                  type="text"
                  placeholder="Поиск, например курс для дизайнера"
                />
                <img
                  className="relative left-[-50px] mt-[10px] top-[25px] transform -translate-y-1/2 w-[24px] h-[24px]"
                  src={input}
                  alt="Search Icon"
                />

                <button className="  w-[158px] h-[64px]  hero-btn    text-white rounded-[24px]  flex items-center justify-center  transition duration-300 ml-[20px] z-1">
                  Подобрать
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    <div className="container mx-auto">
      <div className="w-full h-auto bg-[#D5F6ED] relative rounded-[24px] p-6 mt-[60px] mx-auto">
        <h6 className="text-[24px] font-medium text-center text-[#333] mt-[60px]">
          Успехов тебе в начинаниях!🤗
        </h6>
        <h2 className="text-[32px] md:text-[42px] font-bold mt-[34px] text-center text-[#333]">
          Mind mentor — место, где вы можете найти ментора и курсы, а также нужные проекты
        </h2>

              <div className="mt-[32px] flex justify-center flex-wrap">
                <input
                  className=" w-[580px] h-[64px] rounded-[20px] pl-[25px] text-[20px] font-jost bg-white font-medium text-[#6F6D73] "
                  type="text"
                  placeholder="Поиск, например курс для дизайнера"
                />
                <img
                  className="relative left-[-50px] mt-[10px] top-[25px] transform -translate-y-1/2 w-[24px] h-[24px]"
                  src={input}
                  alt="Search Icon"
                />

                <button className="  w-[158px] h-[64px]  hero-btn    text-white rounded-[24px]  flex items-center justify-center  transition duration-300 ml-[20px] z-1">
                  Подобрать
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
