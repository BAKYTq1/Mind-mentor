import React from 'react';
import './ProfileMentor.scss';
import { BsBuildings } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const ProfileMentor = () => {
    const navigate = useNavigate();
    return (
        <div className="container-profile">


            <section className="profile">
                <div className='profile__up'>

                    <div className="profile__avatar">
                        <img src="https://picsum.photos/570/340" alt="Avatar" />
                        <button type="button" aria-label="Play video">▶</button>
                    </div>

                    <div className="profile__info">
                        <div className="profile__info-photo">
                            <h1>Марина Сополова</h1>
                            <img src="https://picsum.photos/570/340" alt="" />
                        </div>


                        <div className="profile__info-stats stats">

                            <p>
                                4.9 ⭐<span>445 оценок</span>
                            </p>
                            <div>
                                <p>1200 студентов</p>
                                <p>Русский</p>

                            </div>

                            <p className="status">
                                Статус: Свободна  <span><AiFillExclamationCircle /></span>
                            </p>
                        </div>
                        <div className="info-buttons">
                            <button>Статус</button>
                            <button onClick={() => navigate('/ChangeInfoMentor')}>
                                <FaPencilAlt />
                            </button>
                        </div>

                    </div>
                </div>
                <div className='profile__down'>

                    <div className="profile__details">
                        <h1>Данные ментора</h1>
                        <div className="tags">
                            <span className="tag">Опыт 3 года</span>
                            <span className="tag">Работает в Google</span>
                            <span className="tag">Специалисть Senior UX/UI дизайнер </span>
                        </div>

                        <div className="work">
                            <h1>
                                Место работы
                            </h1>
                            <div>

                                <div className="company">
                                    <BsBuildings className="company-icon" />
                                    <p>Компания XYZ</p>
                                </div>
                                <div className="company">
                                    <BsBuildings className="company-icon" />
                                    <p>Компания ABC</p>
                                </div>
                                <div className="company">
                                    <BsBuildings className='company-icon' />
                                    <p>Компания Meta </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile__desc">
                        <h1>Описание</h1>
                        <p>
                            Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашегоВы узнаете в этом курсы,как создавать сайты с нуля.Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашегоВы узнаете в этом курсы,как создавать сайты с нуля.
                        </p>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default ProfileMentor;
