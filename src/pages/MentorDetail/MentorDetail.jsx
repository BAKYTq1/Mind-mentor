import React, { useRef, useState, useEffect } from 'react';
import { IoPlayOutline } from "react-icons/io5";
import { RiPlayReverseLargeLine } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { TiMediaPlayReverseOutline } from "react-icons/ti";
import 'swiper/css';
import { TiMediaPlayOutline } from "react-icons/ti";
import { SlControlPlay } from "react-icons/sl";
import { TiStarFullOutline } from "react-icons/ti";
import { IoMdHeart } from "react-icons/io";
import component from '../../assets/Component 5.svg';
import Mavis from '../../assets/ec92218008540f58212964c427891bf8327f0d27.png';
import smile from '../../assets/img/Smile_rating.svg';
import './style.scss'
import { FaBasketShopping } from "react-icons/fa6";
import Mentor from '../../components/Mentor/Mentor';
import Courses1 from '../../components/Courses1/Courses1';

const MentorProjects = () => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
const otzyv = [
  {
    id: 1,
    name: "Канатова Рано ",
    title: 'Несмотря на то, что курс онлайн, преподаватели всегда были на связи, оперативно отвечали на вопросы и давали развернутую обратную связь по заданиям. Это очень мотивировало',
    rating: 5.0,
    img: 'data:image/png;base64,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'
  },
  {
    id: 2,
    name: "Канатова Рано ",
    title: 'Несмотря на то, что курс онлайн, преподаватели всегда были на связи, оперативно отвечали на вопросы и давали развернутую обратную связь по заданиям. Это очень мотивировало',
    rating: 5.0,
     img: 'data:image/png;base64,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'
  },
  {
    id: 3,
    name: "Канатова Рано ",
    title: 'Несмотря на то, что курс онлайн, преподаватели всегда были на связи, оперативно отвечали на вопросы и давали развернутую обратную связь по заданиям. Это очень мотивировало',
    rating: 5.0,
     img: 'data:image/png;base64,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'
  },
]
  const projects = [
    {
      id: 1,
      name: 'Личная консультация',
      title: 'Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков',
      price: 2000,
      dizainer: "Дизайнеры",
      font: 'Frontend Разработчики',
      market: 'Владельцы интернет проектов',
      specialists: ["Дизайнеры", "Frontend Разработчики", "Владельцы интернет проектов"],
      rating: 4.5
    },
    {
      id: 2,
      name: 'Личная консультация',
      title: 'Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков',
      price: 2000,
      dizainer: "Дизайнеры",
      font: 'Frontend Разработчики',
      market: 'Владельцы интернет проектов',
      specialists: ["Дизайнеры", "Frontend Разработчики", "Владельцы интернет проектов"],
      rating: 4.7
    },
    {
      id: 3,
      name: 'Личная консультация',
      title: 'Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков',
      price: 2000,
      dizainer: "Дизайнеры",
      font: 'Frontend Разработчики',
      market: 'Владельцы интернет проектов',
      specialists: ["Дизайнеры", "Frontend Разработчики", "Владельцы интернет проектов"],
      rating: 4.8
    },
    {
      id: 4,
      name: 'Личная консультация',
      title: 'Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков',
      price: 2000,
      dizainer: "Дизайнеры",
      font: 'Frontend Разработчики',
      market: 'Владельцы интернет проектов',
      specialists: ["Дизайнеры", "Frontend Разработчики", "Владельцы интернет проектов"],
      rating: 4.6
    },
    {
      id: 5,
      name: 'Личная консультация',
      title: 'Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков',
      price: 2000,
      dizainer: "Дизайнеры",
      font: 'Frontend Разработчики',
      market: 'Владельцы интернет проектов',
      specialists: ["Дизайнеры", "Frontend Разработчики", "Владельцы интернет проектов"],
      rating: 4.9
    }
  ];

  return (
   <div className=''>
  <div className='container flex w-full gap-2 justify-start items-center'>
    <h1 className='flex gap-[20px] font-bold text-[20px] justify-center items-center'>
      <TiMediaPlayReverseOutline />Назад
    </h1>
    <h1 className='flex justify-center items-center ml-[30px] text-[16px] font-[500] text-[#CFCFCF] gap-[10px]'>
      Главный <TiMediaPlayOutline />
    </h1>
    <h2 className='ml-[10px] font-[500] text-[16px]'>Ментор</h2>
  </div>

  <div className='container w-full flex flex-wrap gap-x-[32px] gap-y-[40px] mt-[60px]'>
    <div className='w-[571px] h-[342px] bg-[#FFCD66] rounded-[24px] relative'>
      <img src={Mavis} alt="Mavis" className='w-full h-full rounded-[24px]' />
      <button className='absolute top-[129px] left-[244px] w-[84px] h-[84px] rounded-[51px] bg-white flex justify-center items-center text-[26px]'>
        <SlControlPlay className='text-[#FFD02C] ml-[5px]' />
      </button>
    </div>

    <div className='w-[571px] h-[342px] px-[30px] py-[35px] bg-[#2D2D2D] rounded-[24px] leading-[55px] text-white'>
      <h1 className='font-bold text-[32px] font-[700] text-white'>Марина Сополова</h1>
      <h5 className='text-[16px] text-[#FFD02C] font-[600]'>Статус: Свободна</h5>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <p className='flex justify-center items-center gap-[10px] text-[18px] font-[700]'>
            4.5 <TiStarFullOutline className='text-[25px]' />
          </p>
          <span className='text-[#6F6D73] ml-[10px] text-[14px] font-[500]'>445 оценок</span>
        </div>
        <div className='text-[#6F6D73] flex gap-[20px] text-[14px] font-[500]'>
          <p>1200 студентов</p>
          <p>Русский</p>
        </div>
      </div>
      <h3 className='text-[24px] font-bold leading-[140%]'>от 2000 С</h3>
      <div className='flex justify-between items-center mt-[20px]'>
        <button className='w-[437px] h-[64px] bg-white rounded-[24px] text-[20px] font-[700] text-black'>
          Купить технологию
        </button>
        <button className='w-[64px] h-[64px] flex justify-center items-center text-[24px]'>
          <IoMdHeart />
        </button>
      </div>
    </div>

    <div className='w-[574px] h-[308px]'>
      <h1 className='text-[18px] font-[700]'>Данные ментора</h1>
      <div className='flex flex-wrap mt-[20px] gap-[10px]'>
        <div className='px-[15px] rounded-[20px] border-1 border-black bg-[#E2DBFA] py-[12px] text-[16px] font-[600]'>
          Опыт 3 года
        </div>
        <div className='px-[15px] rounded-[20px] border-1 border-black bg-[#D5F6ED] py-[12px] text-[16px] font-[600]'>
          Работает в Google
        </div>
        <div className='px-[15px] rounded-[20px] border-1 border-black bg-[#E1F3FF] py-[12px] text-[16px] font-[600]'>
          Специалист Senior UX/UI дизайнер
        </div>
      </div>
      <h1 className='mt-[20px] text-[18px] font-[700]'>Место работы</h1>
      <div className='flex gap-[10px] justify-start items-center mt-[16px]'>
        <img src={component} alt="Component" />
        <p className='text-[18px] font-[500]'>Компания Web Global</p>
      </div>
      <div className='flex gap-[10px] justify-start items-center mt-[10px]'>
        <img src={component} alt="Component" />
        <p className='text-[18px] font-[500]'>Компания Google</p>
      </div>
      <div className='flex gap-[10px] justify-start items-center mt-[10px]'>
        <img src={component} alt="Component" />
        <p className='text-[18px] font-[500]'>Компания Meta</p>
      </div>
    </div>

    <div className='w-[574px] h-[368px]'>
      <h1 className='text-[18px] font-[700] mb-[20px]'>Описание</h1>
      <p className='text-[16px] font-[400] leading-[25px]'>
        Вы узнаете в этом курсе, как создавать сайты с нуля. Научитесь работать с программами как Figma, After Effects. Сделаем 3 полноценный проекта для вашего портфолио.
      </p>
    </div>
  </div>

  <div className='container projects pt-[50px]'>
    <div className='container projects-header'>
      <h1>Проекты</h1>
      <div className="projects-controls">
        <button onClick={handlePrev} className="prev-button">Prev</button>
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>

    <div className="w-[1230px]">
      {isMobile ? (
        projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-item-card">
              <div className="project-header">
                <div className="project-rating">
                  <img src={smile} alt="Рейтинг" />
                  <span>{project.rating}</span>
                </div>
                <button className="project-fav"><IoHeartSharp /></button>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-subtitle">Для этого проекта нужны специалисты:</p>
                <div className="project-tags">
                  {project.specialists.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <p className="project-price">{project.price} <span>C</span></p>
                <button className="project-btn">Подробнее</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Swiper ref={swiperRef} slidesPerView={3.07} spaceBetween={1}>
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="w-[380px]  border-1 border-[#2D2D2D] rounded-[24px]">
                <div className="p-[30px]">
                  <div className="project-header">
                   <h1 className='text-[18px] font-[700]'>{project.name}</h1>
                  </div>
                  <div className="">
                    <h3 className='text-[16px] font-[500] mt-[20px]'>{project.title}</h3>
                    <p className='text-[18px] font-[700] text-[#23AFCE] mt-[12px]'>Стоимость:{project.price} <span>C</span></p>
                    <p className="mt-[15px] text-[16px] font-[600]">Для кого это технология:</p>
                    <div className="project-tags-detail">
                      {project.specialists.slice(0, 4).map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <button className="w-[248px] h-[64px] bg-[#2D2D2D] rounded-[24px] text-white text-[20px] font-[700]">Подробно</button>
                    <button className='w-[64px] flex justify-center items-center h-[64px] rounded-[26px] bg-[#FFD02C] text-[24px] text-[#28303F]'><FaBasketShopping /></button>
                  </div> 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  </div>
  <div className='ml-[55px] m-auto'>
    <Courses1/> 
    <Mentor/>
  </div>
  <div className='container'>
    <h1 className='text-[24px] text-[#000000] font-[700]'>Отзывы</h1>
    {otzyv.map((item) => (
      <div key={item.id} className='flex gpa-[20px] w-full mt-[30px]'>
        <div className='w-[66px] flex flex-col justify-center items-center'>
          <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-[70px]' />
          <p className='text-[12px] font-[700]'>{item.rating}.0 😊</p>
        </div>
        <div className='w-full ml-[20px] h-[66px] flex flex-col justify-between'>
          <h1 className='text-[20px] font-[500] text-[#0F5257]'>{item.name}</h1>
          <p className='text-[16px] font-[500] leading-[20px]'>{item.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default MentorProjects;
