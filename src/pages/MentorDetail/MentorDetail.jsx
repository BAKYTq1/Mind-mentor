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
import Courses1detail from '../../components/Courses1/Courses1detail/Courses1detail';
import OtherMentors from '../../components/Mentor/otherMentors/OtherMentors';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentorById } from '../../redux/mentorApi/mentorDetailSlice';
import Loading from '../../shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const MentorProjects = () => {
  const navigate = useNavigate();
  const { mentorId } = useParams();
  const dispatch = useDispatch();
  const { mentordetail, loading, error } = useSelector((state) => state.mentorDetail);

  useEffect(() => {
    dispatch(fetchMentorById(mentorId));
  }, [dispatch, mentorId]);

  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const mentorInfo = mentordetail?.basicInfo || {};
  const mentorCourses = mentordetail?.courses || [];
 





  if (loading) return <div className='flex justify-center items-center'><Loading/></div>;
  if (error) return <div className='flex justify-center items-center text-[#FFCD66]'>Error: {error.exceptionClassName}</div>;

  return (
    <div className=''>
      <div className='container flex w-full gap-2 justify-start items-center'>
        <h1 onClick={() => navigate(-1)} className='flex gap-[20px] font-bold text-[20px] justify-center items-center'>
          <TiMediaPlayReverseOutline />Назад
        </h1>
        <h1 onClick={() => navigate('/')} className='flex justify-center items-center ml-[30px] text-[16px] font-[500] text-[#CFCFCF] gap-[10px]'>
          Главный <TiMediaPlayOutline />
        </h1>
        <h2 onClick={() => navigate('/mentors')} className='ml-[10px] font-[500] text-[16px]'>Ментор</h2>
      </div>

      <div className='container !mt-[60px] w-full flex flex-wrap gap-x-[32px] gap-y-[40px]'>
        {/* Mentor profile section */}
        <div className='w-[571px] h-[342px] bg-[#FFCD66] rounded-[24px] relative'>
          <img 
            src={mentorInfo?.avatarImageUrl || Mavis} 
            alt={`${mentorInfo?.firstName} ${mentorInfo?.lastName}`} 
            className='w-full h-full rounded-[24px] object-cover'
          />
          <button className='absolute top-[129px] left-[244px] w-[84px] h-[84px] rounded-[51px] bg-white flex justify-center items-center text-[26px]'>
            <SlControlPlay className='text-[#FFD02C] ml-[5px]' />
          </button>
        </div>

        <div className='w-[571px] h-[342px] px-[30px] py-[35px] bg-[#2D2D2D] rounded-[24px] leading-[55px] text-white'>
          <h1 className='font-bold text-[32px] font-[700] text-white'>{mentorInfo?.firstName} {mentorInfo?.lastName}</h1>
          <h5 className='text-[16px] text-[#FFD02C] font-[600]'>Статус: Свободна</h5>
          <div className='flex justify-between items-center'>
            <div className='flex'>
              <p className='flex justify-center items-center gap-[10px] text-[18px] font-[700]'>
                {mentorInfo?.countSpecialization} <TiStarFullOutline className='text-[25px]' />
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

        {/* Mentor details section */}
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
            <img src={component} alt="Company logo" />
            <p className='text-[18px] font-[500]'>Компания Web Global</p>
          </div>
          <div className='flex gap-[10px] justify-start items-center mt-[10px]'>
            <img src={component} alt="Company logo" />
            <p className='text-[18px] font-[500]'>Компания Google</p>
          </div>
          <div className='flex gap-[10px] justify-start items-center mt-[10px]'>
            <img src={component} alt="Company logo" />
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

      {/* Projects section */}
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
            <div className="flex flex-wrap gap-4">
              {mentorCourses.map((project) => (
                <div key={project.courseId} className="project-card">
                  <div className="project-item-card">
                    <div className="project-header">
                      <div className="project-rating">
                        <img src={smile} alt="Rating" />
                        <span>{project.rating || 5.0}</span>
                      </div>
                      <button className="project-fav"><IoHeartSharp /></button>
                    </div>
                    <div className="project-body">
                      <h3>{project.courseName}</h3>
                      <p className="project-subtitle">Для этого проекта нужны специалисты:</p>
                      <div className="project-tags">
                        {project.specialists?.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-footer">
                      <p className="project-price">{project.coursePrice} <span>C</span></p>
                      <button className="project-btn">Подробнее</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper 
              ref={swiperRef}
              slidesPerView={3} 
              spaceBetween={30}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
              {mentorCourses.map((project) => (
                <SwiperSlide key={project.courseId}>
                  <div className="w-[382px] border-1 border-[#2D2D2D] rounded-[24px]">
                    <div className="p-[30px]">
                      <div className="project-header">
                        <h1 className='text-[18px] font-[700]'>{project.courseName}</h1>
                      </div>
                      <div className="">
                        <h3 className='text-[16px] font-[500] mt-[20px]'>{project.title}</h3>
                        <p className='text-[18px] font-[700] text-[#23AFCE] mt-[12px]'>Стоимость: {project.coursePrice} <span>C</span></p>
                        <p className="mt-[15px] text-[16px] font-[600]">Для кого это технология:</p>
                        <div className="project-tags-detail">
                          <span>{project.courseDescription}</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <button className="w-[248px] h-[64px] bg-[#2D2D2D] rounded-[24px] text-white text-[20px] font-[700]">Подробно</button>
                        <button className='w-[64px] flex justify-center items-center h-[64px] rounded-[26px] bg-[#FFD02C] text-[24px] text-[#28303F]'>
                          <FaBasketShopping />
                        </button>
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
        <Courses1detail /> 
        <OtherMentors />
      </div>

      {/* Reviews section */}
      <div className='container'>
        <h1 className='text-[24px] text-[#000000] font-[700]'>Отзывы</h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {/* First slide with 3 reviews */}
          <SwiperSlide>
            <div className="flex flex-col gap-4">
              {/* {otzyv.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-[66px] flex flex-col justify-center items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <p className="text-[12px] font-[700]">{item.rating}.0 😊</p>
                  </div>
                  <div className="w-full ml-[20px]">
                    <h1 className="text-[20px] font-[500] text-[#0F5257]">{item.name}</h1>
                    <p className="text-[16px] font-[500] leading-[20px]">{item.title}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </SwiperSlide>

          {/* Second slide with remaining reviews */}
          <SwiperSlide>
            <div className="flex flex-col gap-4">
              {/* {otzyv.slice(3).map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-[66px] flex flex-col justify-center items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <p className="text-[12px] font-[700]">{item.rating}.0 😊</p>
                  </div>
                  <div className="w-full ml-[20px]">
                    <h1 className="text-[20px] font-[500] text-[#0F5257]">{item.name}</h1>
                    <p className="text-[16px] font-[500] leading-[20px]">{item.title}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`text-[16px] w-[62px] h-[42px] rounded-[32px] bg-[#FAFAFA] font-semibold ${
                    currentSlide === index ? 'text-[#2D2D2D]' : 'text-[#000000]'
                  } hover:text-[#2D2D2D]`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="px-3 py-1 flex justify-center items-center rounded-[32px] w-[62px] h-[42px] bg-[#2D2D2D] text-white shadow-lg"
            >
              <RiPlayReverseLargeLine />
            </button>
            <button
              onClick={handleNext}
              className="px-3 flex justify-center items-center py-1 rounded-[32px] w-[62px] h-[42px] bg-[#2D2D2D] text-white"
            >
              <IoPlayOutline />
            </button>
          </div>

          <div>
            <button className="w-[380px] h-[64px] bg-[#2D2D2D] text-white rounded-full font-semibold">
              Показать еще
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProjects;