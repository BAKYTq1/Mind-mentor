// import React from 'react'
// import "./VideoLesson.scss"
// import { Link } from 'react-router-dom'
// import icon14 from "../../../assets/svg/icon14.svg"
// import icon18 from "../../../assets/svg/icon18.svg"
// import icon19plus from "../../../assets/svg/icon19plus.svg"
// import icon12White from "../../../assets/svg/icon12white.svg"

// function VideoLesson() {
//     return (
//         <div className='videolesson'>
//             <div className='new'>
//                 <div className='h'>
//                     <Link to="/course">
//                         <img src={icon14} alt="" /></Link>
//                     <p>Курс</p>
//                 </div>


//                 <div className='hBtn'>
//                     <button className='i'>
//                         <Link to="/datacourse">
//                             <img src={icon12White} alt="" />
//                         </Link>

//                     </button>
//                     <button className='b'>Далее
//                         <img src={icon18} alt="" />
//                     </button>



//                 </div>
//             </div>

//             <div className='newdata'>
//                 <div className='category'>
//                     <button>Данные курса</button>
//                     <button>Знания</button>
//                     <button>Видео уроки</button>
//                 </div>

//                 <div className='frame'>
//                     <div>
//                         <h4>Обложка</h4>
//                         <div>
//                             <p>Обложка курса</p>
//                         </div>
//                     </div>

//                     <div>
//                         <h4>Видео превью курса</h4>
//                         <div>
//                             <p>Превью курса</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='video-cource'>
//                     <div className='file'>
//                         <h3>Название раздела</h3>
//                         <input type="text" placeholder='Например, подготовка' />
//                     </div>

//                     <h2>Видеоуроки</h2>

//                     <div className='info1'>
//                         <div>
//                             <p>Название урока</p>
//                             <input type="text" placeholder='Курс по UX/UI' />
//                         </div>
//                     </div>

//                     <div className='info1'>
//                         <div>
//                             <p>Название урока</p>
//                             <input type="text" placeholder='Курс по UX/UI' />
//                         </div>
//                     </div>

//                     <div className='info2'>
//                         <div className='div2'>
//                             <button>
//                                 <img src={icon19plus} alt="" />
//                             </button>
//                             <p>Добавить видеоурок</p>
//                         </div>

//                         <div className='div3'>
//                             <p>Название урока</p>
//                             <input type="text" placeholder='Например, Курс по UX/UI' />
//                         </div>
//                     </div>

//                     <div className='info2'>
//                         <div className='div2'>
//                             <button>
//                                 <img src={icon19plus} alt="" />
//                             </button>
//                             <p>Добавить видеоурок</p>
//                         </div>

//                         <div className='div3'>
//                             <p>Название урока</p>
//                             <input type="text" placeholder='Например, Курс по UX/UI' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default VideoLesson

import React, { useState } from 'react';
import "./VideoLesson.scss"
import { Link, useNavigate } from 'react-router-dom'
import icon14 from "../../../assets/svg/icon14.svg"
import icon18 from "../../../assets/svg/icon18.svg"
import icon19plus from "../../../assets/svg/icon19plus.svg"
import icon12White from "../../../assets/svg/icon12white.svg"
import axios from 'axios';

function VideoLesson() {
    const navigate = useNavigate();


    const [form, setForm] = useState({
        sectionName: 'Подготовка к курсу', 
        lessons: [
            { title: 'Введение в UX/UI' },    
            { title: 'Основы дизайна интерфейсов' }, 
            { title: 'Работа с Figma' },        
        ],
    });

    const handleLessonChange = (index, e) => {
        const newLessons = [...form.lessons];
        newLessons[index][e.target.name] = e.target.value;
        setForm({ ...form, lessons: newLessons });
    };


    const addLesson = () => {
        setForm({ ...form, lessons: [...form.lessons, { title: '' }] });
    };


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem('token');
        const courseId = localStorage.getItem('courseId');

        if (!token || !courseId) {
            alert("Токен же courseId жок. Сиз 1 жана 2 баскычтарды бүткөнсүзбү?");
            return;
        }

        if (!form.sectionName.trim()) {
            alert("Пожалуйста, введите название раздела");
            return;
        }

        if (form.lessons.length === 0 || form.lessons.some(lesson => !lesson.title.trim())) {
            alert("Пожалуйста, заполните названия всех уроков");
            return;
        }

        try {
            const payload = {
                courseId,
                sectionName: form.sectionName,
                lessons: form.lessons,
            };

            const response = await axios.post(
                'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api/courses/management/finalize/step3',
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            console.log('Ответ от сервера:', response.data);
            alert('Курс успешно завершён!');
           
        } catch (error) {
            console.error('Ошибка при отправке:', error.response?.data || error.message);
            alert('Ошибка при завершении курса. Попробуйте ещё раз.');
        }
    };

    return (
        <div className='videolesson'>
            <div className='new'>
                <div className='h'>
                    <Link to="/course">
                        <img src={icon14} alt="" />
                    </Link>
                    <p>Курс</p>
                </div>

                <div className='hBtn'>
                    <button className='i'>
                        <Link to="/datacourse">
                            <img src={icon12White} alt="" />
                        </Link>
                    </button>
                    <button className='b' onClick={handleSubmit}>Далее
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

                <div className='frame'>
                    <div>
                        <h4>Обложка</h4>
                        <div>
                            <p>Обложка курса</p>
                        </div>
                    </div>

                    <div>
                        <h4>Видео превью курса</h4>
                        <div>
                            <p>Превью курса</p>
                        </div>
                    </div>
                </div>

                <div className='video-cource'>
                    <div className='file'>
                        <h3>Название раздела</h3>
                        <input
                            name="sectionName"
                            type="text"
                            placeholder='Например, подготовка'
                            value={form.sectionName}
                            onChange={handleChange}
                        />
                    </div>

                    <h2>Видеоуроки</h2>

                    {form.lessons.map((lesson, idx) => (
                        <div className='info1' key={idx}>
                            <div>
                                <p>Название урока {idx + 1}</p>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder='Например, Введение'
                                    value={lesson.title}
                                    onChange={(e) => handleLessonChange(idx, e)}
                                />
                            </div>
                        </div>
                    ))}

                    <div className='info2'>
                        <div className='div2'>
                            <button type="button" onClick={addLesson}>
                                <img src={icon19plus} alt="Добавить урок" />
                            </button>
                            <p>Добавить видеоурок</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoLesson;
