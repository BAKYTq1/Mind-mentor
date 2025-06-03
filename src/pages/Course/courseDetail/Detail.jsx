// import React from 'react'
// import "./Detail.scss"
// import icon13 from "../../../assets/svg/icon13blag.svg"
// import icon14 from "../../../assets/svg/icon14.svg"
// import icon15 from "../../../assets/svg/icon15.svg"
// import icon16 from "../../../assets/svg/icon16.svg"
// import icon17 from "../../../assets/svg/icon17.svg"
// import image2 from '../../../assets/photos/image2.png'

// function Detail() {
//     return (
//         <div className='detail'>
//             <div className='mainScreen'>

//                 <div className='H'>
//                     <img src={icon14} alt="" />
//                     <h2>Курс по дизайну UX/UI Figma,Affter Effect</h2>
//                 </div>

//                 <div className='mainInfo'>
//                     <div className='info'>

//                         <div className='курс'>
//                             <h3>Курс</h3>
//                             <div className='ration'>
//                                 <p>445 оценок</p>
//                                 <div>
//                                     <p>4.5</p>
//                                     <img src={icon15} alt="" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='mentor'>
//                             <h3>Ментор</h3>
//                             <div className='ration'>
//                                 <p>Марина Сополова</p>
//                                 <div>
//                                     <p>4.9</p>
//                                     <img src={icon15} alt="" />
//                                 </div>
//                                 <img className='avatar' src={icon16} alt="" />
//                             </div>
//                         </div>

//                         <div className='price'>
//                             <h3>Цена</h3>
//                             <p>2000 С</p>
//                         </div>

//                         <div className='data'>
//                             <h4>Последнее обновление: 09.2024</h4>

//                             <div>
//                                 <p>1200 студентов</p>
//                                 <p>Русский</p>
//                             </div>
//                         </div>

//                         <div className='btns'>
//                             <button >Изменить</button>
//                             <button className='delete'>
//                                 <img src={icon17} alt="" />
//                             </button>
//                         </div>

//                     </div>

//                     <div className='video'>
//                         <img src={image2} alt="" />
//                     </div>



//                 </div>
//             </div>

//             <div className='about-product'>
//                 <div className='container-left'>

//                     <div className='what-study'>
//                         <h3>Чему вы научитесь</h3>
//                         <ul>
//                             <li>Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего</li>
//                             <li>Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего</li>
//                             <li>Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.</li>
//                         </ul>
//                     </div>

//                     <div className='for-whom'>
//                         <h3>Для кого этот курс</h3>
//                         <div className='chips'>
//                             <button className='btn1'>
//                                 <span>Дизайнеры</span>
//                             </button>
//                             <button className='btn2'>
//                                 <span>Владельцы интернет проектов</span>
//                             </button>
//                             <button className='btn3'>
//                                 <span>Frontend Разработчики</span>
//                             </button>
//                             <button className='btn4'>
//                                 <span>Frontend Разработчики</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='container-right'>
//                     <div className='text'>
//                         <h3>Данные курса</h3>
//                         <button>
//                             Учебный план
//                             <img src={icon13} alt="" />
//                         </button>
//                     </div>
//                     <div className='p'>
//                         <p>22 раздела</p>
//                         <p>22 лекций</p>
//                         <p>21 ч 39 мин общая продолжителность</p>
//                     </div>
//                     <div className='data'>
//                         <h3>Данные курса</h3>
//                         <div className='info-list'>
//                             <p>22 раздела</p>
//                             <p>22 лекций</p>
//                             <p>21 ч 39 мин общая продолжителность</p>
//                         </div>
//                         <button>
//                             Учебный план
//                             <img src={icon13} alt="" />
//                         </button>
//                     </div>

//                     <div className='description'>
//                         <h3>Описание</h3>
//                         <p>Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашегоВы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.</p>
//                     </div>
//                 </div>
//             </div>




//         </div>
//     )
// }

// export default Detail


import React from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.scss';
import { Link } from 'react-router-dom';

import icon13 from "../../../assets/svg/icon13blag.svg";
import icon14 from "../../../assets/svg/icon14.svg";
import icon15 from "../../../assets/svg/icon15.svg";
import icon16 from "../../../assets/svg/icon16.svg";
import icon17 from "../../../assets/svg/icon17.svg";
import image2 from '../../../assets/photos/image2.png';

function Detail() {
    const { state: course } = useLocation();

    if (!course) return <p>Курс табылган жок</p>;

    return (
        <div className='detail'>
            <div className='mainScreen'>
                <div className='name'>
                    <Link to="/mentorProfile/course"> <img src={icon14} alt="" /></Link>
                    <h2>{course.courseName}</h2>
                </div>

                <div className='mainInfo'>
                    <div className='info'>
                        <div className='курс'>
                            <h3>Курс</h3>
                            <div className='ration'>
                                <p>{course.reviewCount ?? '445'} оценок</p>
                                <div>
                                    <p>{course.courseRating}</p>
                                    <img src={icon15} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='mentor'>
                            <h3>Ментор</h3>
                            <div className='ration'>
                                <p>{course.mentorName ?? "Неизвестно"}</p>
                                <div>
                                    <p>{course.mentorRating}</p>
                                    <img src={icon15} alt="" />
                                </div>
                                <img className='avatar' src={course.mentorAvatarUrl || icon16} alt="" />
                            </div>
                        </div>

                        <div className='price'>
                            <h3>Цена</h3>
                            <p>{course.coursePrice === 0 ? 'Бесплатно' : `${course.coursePrice} С`}</p>
                        </div>

                        <div className='data'>
                            <h4>Последнее обновление: 09.2024</h4>
                            <div>
                                <p>{course.studentCount} студентов</p>
                                <p>Русский</p>
                            </div>
                        </div>

                        <div className='btns'>
                            <button>Изменить</button>
                            <button className='delete'>
                                <img src={icon17} alt="Удалить" />
                            </button>
                        </div>
                    </div>

                    <div className='video'>
                        <img src={course.courseImageUrl || image2} alt="Course Preview" />
                    </div>
                </div>
            </div>

            <div className='about-product'>
                <div className='container-left'>
                    <div className='what-study'>
                        <h3>Чему вы научитесь</h3>
                        <ul>
                            <li>{course.description || 'Описание курса недоступно.'}</li>
                        </ul>
                    </div>

                    <div className='for-whom'>
                        <h3>Для кого этот курс</h3>
                        <div className='chips'>
                            <button className='btn1'><span>Дизайнеры</span></button>
                            <button className='btn2'><span>Владельцы интернет проектов</span></button>
                            <button className='btn3'><span>Frontend Разработчики</span></button>
                        </div>
                    </div>
                </div>

                <div className='container-right'>
                    <div className='text'>
                        <h3>Данные курса</h3>
                        <button>
                            Учебный план
                            <img src={icon13} alt="" />
                        </button>
                    </div>

                    <div className='p'>
                        <p>22 раздела</p>
                        <p>22 лекций</p>
                        <p>21 ч 39 мин общая продолжительность</p>
                    </div>

                    <div className='description'>
                        <h3>Описание</h3>
                        <p>{course.description || 'Нет подробного описания.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
