import React, { useState } from 'react';
import "./NewCourse.scss";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import icon14 from "../../../assets/svg/icon14.svg";
import icon18 from "../../../assets/svg/icon18.svg";

function NewCourse() {
    const [form, setForm] = useState({
        title: "Курс по UX/UI дизайну",
        description: "В этом курсе вы изучите основы UX/UI, научитесь создавать удобные интерфейсы и работать с пользователями.",
        targetAudience: "дизайнеры, разработчики, менеджеры проектов",
        price: "1500",
        categoryId: 1,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!form.title.trim()) {
            alert('Пожалуйста, введите название курса');
            return false;
        }
        if (!form.price || Number(form.price) <= 0) {
            alert('Пожалуйста, введите корректную стоимость');
            return false;
        }
        if (!form.description.trim()) {
            alert('Пожалуйста, введите описание курса');
            return false;
        }
        if (!form.targetAudience.trim()) {
            alert('Пожалуйста, укажите для кого этот курс');
            return false;
        }
        return true;
    };



    const handleSubmit = async () => {
        if (!validateForm()) return;

        const token = localStorage.getItem('token'); // токенди туура алабыз

        if (!token) {
            alert('Вы не авторизованы. Пожалуйста, войдите в систему.');
            return;
        }

        try {
            const payload = {
                ...form,
                price: Number(form.price),
            };

            console.log("Payload:", payload);
            console.log("Token:", token);

            const response = await axios.post(
                'http://ec2-13-61-24-129.eu-north-1.compute.amazonaws.com/api/courses/management/create/base/step1',
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Response data:', response.data);

            const categoryId = response.data.categoryId;  // <-- Здесь распаковываем courseId
            if (!categoryId) {
                alert('Ошибка: categoryId не получен от сервера');
                return;
            }

            localStorage.setItem('courseId', courseId);
            navigate('/datacourse');
        } catch (error) {
            if (error.response?.status === 401) {
                alert('Ошибка 401: Не авторизован. Пожалуйста, войдите в систему.');
            } else {
                console.error('Ката:', error.response?.data || error.message);
                alert('Ошибка при создании курса. Попробуйте еще раз.');
            }
        }
    };

    return (
        <div className='newcourse'>
            <div className='new'>
                <div className='h'>
                    <Link to="/course">
                        <img src={icon14} alt="icon" />
                    </Link>
                    <p>Курс</p>
                </div>

                <button className='hBtn' onClick={handleSubmit} type="button">
                    Далее
                    <img src={icon18} alt="icon" />
                </button>
            </div>

            <div className='newdata'>
                <div className='category'>
                    <button>Данные курса</button>
                    <button>Знания</button>
                    <button>Видео уроки</button>
                </div>

                <div className='name-price'>
                    <div className='name'>
                        <h3>Название курса</h3>
                        <input
                            name="title"
                            type="text"
                            placeholder='Например, Курс по UX/UI'
                            onChange={handleChange}
                            value={form.title}
                        />
                    </div>

                    <div className='price'>
                        <h3>Стоимость</h3>
                        <input
                            name="price"
                            type="number"
                            placeholder='0 с'
                            onChange={handleChange}
                            value={form.price}
                        />
                    </div>
                </div>

                <div className='description'>
                    <h3>Описание</h3>
                    <textarea
                        name="description"
                        placeholder='Опишите подробности'
                        onChange={handleChange}
                        value={form.description}
                    />
                </div>

                <div className='for-specials'>
                    <h3>Для кого этот курс</h3>
                    <input
                        name="targetAudience"
                        placeholder='Напишите примеры через запятую, например дизайнеры'
                        onChange={handleChange}
                        value={form.targetAudience}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewCourse;
