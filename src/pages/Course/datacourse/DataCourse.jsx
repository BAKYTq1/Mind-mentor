// import React from 'react'
// import './DataCourse.scss'
// import { Link } from 'react-router-dom'
// import icon14 from "../../../assets/svg/icon14.svg"
// import icon18 from "../../../assets/svg/icon18.svg"

// import icon12White from "../../../assets/svg/icon12white.svg"

// function DataCourse() {
//     return (
//         <div className='datacourse'>
//             <div className='new'>
//                 <div className='h'>
//                      <Link to="/course">
//                                            <img src={icon14} alt="" /></Link>
//                     <p>Курс</p>
//                 </div>


//                 <div className='hBtn'>
//                     <button className='i'>
//                         <Link to="/newcourse">
//                             <img src={icon12White} alt="" /></Link>

//                     </button>
//                     <button className='b'>Далее
//                         <Link to="/videolesson">
//                             <img src={icon18} alt="" />
//                         </Link>
//                     </button>



//                 </div>
//             </div>

//             <div className='newdata'>
//                 <div className='category'>
//                     <button>Данные курса</button>
//                     <button>Знания</button>
//                     <button>Видео уроки</button>
//                 </div>

//                 <h2>Чему вы научитесь:</h2>

//                 <div className='list-input'>
//                     <div>
//                         <h3>Первый пункт</h3>
//                         <textarea placeholder='Например, Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего'></textarea>
//                     </div>

//                     <div>
//                         <h3>Второй пункт</h3>
//                         <textarea placeholder='Опишите подробности'></textarea>
//                     </div>

//                       <div>
//                         <h3>Третий пункт</h3>
//                         <textarea placeholder='Опишите подробности'></textarea>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DataCourse


import React, { useState } from 'react';
import './DataCourse.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import icon14 from "../../../assets/svg/icon14.svg";
import icon18 from "../../../assets/svg/icon18.svg";
import icon12White from "../../../assets/svg/icon12white.svg";

function DataCourse() {
    const navigate = useNavigate();

    const [skills, setSkills] = useState({
        point1: 'Вы научитесь создавать современные веб-интерфейсы с использованием Figma.',
        point2: 'Освоите основы UX-дизайна и сможете анализировать поведение пользователей.',
        point3: 'Создадите 3 полноценных проекта для портфолио и получите обратную связь.',
    });

    const handleChange = (e) => {
        setSkills({
            ...skills,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('token');
        const courseId = localStorage.getItem('courseId');

        if (!token || !courseId) {
            alert("Токен же courseId жок. Сиз 1-баскычты бүткөнсүзбү?");
            return;
        }

        try {
            const payload = {
                courseId: Number(courseId),
                skills: Object.values(skills).filter(skill => skill.trim() !== ''),
            };

            console.log("Payload:", payload);

            const response = await axios.post(
                'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api/courses/management/modules/save/step2',
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Step 2 response:', response.data);
            navigate('/videolesson');
        } catch (error) {
            console.error('Ката:', error.response?.data || error.message);
            alert('Ошибка при сохранении данных. Попробуйте еще раз.');
        }
    };

    return (
        <div className='datacourse'>
            <div className='new'>
                <div className='h'>
                    <Link to="/course">
                        <img src={icon14} alt="" />
                    </Link>
                    <p>Курс</p>
                </div>

                <div className='hBtn'>
                    <button className='i'>
                        <Link to="/newcourse">
                            <img src={icon12White} alt="" />
                        </Link>
                    </button>

                    <button className='b' onClick={handleSubmit}>
                        Далее
                        <img src={icon18} alt="" />
                    </button>
                </div>
            </div>

            <div className='newdata'>
                <div className='category'>
                    <button>Данные курса</button>
                    <button>Знания</button>
                    <button>Видео уроки</button>
                </div>

                <h2>Чему вы научитесь:</h2>

                <div className='list-input'>
                    <div>
                        <h3>Первый пункт</h3>
                        <textarea
                            name="point1"
                            placeholder='Например, научитесь делать интерфейсы в Figma'
                            value={skills.point1}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <h3>Второй пункт</h3>
                        <textarea
                            name="point2"
                            placeholder='Например, освоите базовый UX анализ'
                            value={skills.point2}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <h3>Третий пункт</h3>
                        <textarea
                            name="point3"
                            placeholder='Например, создадите 3 реальных проекта'
                            value={skills.point3}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataCourse;
