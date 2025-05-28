import React, { useState, useEffect } from 'react';
import './MentorCreate.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createMentor } from '../../redux/mentorApi/mentorCreateSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';

function MentorCreate({ onClose, onSuccess }) {  // Добавлен пропс onSuccess
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.mentorCreate);
    const { items } = useSelector((state) => state.spec);

    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        specialization: '',
        experience: '',
        phone: '',
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'Обязательное поле';
        if (!formData.secondName) newErrors.secondName = 'Обязательное поле';
        if (!formData.specialization) newErrors.specialization = 'Выберите специализацию';
        if (!formData.experience) newErrors.experience = 'Укажите опыт';
        if (!formData.phone) newErrors.phone = 'Укажите телефон';
        if (!formData.email) newErrors.email = 'Укажите email';
        if (!formData.password) newErrors.password = 'Придумайте пароль';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {  // Сделали асинхронным
        e.preventDefault();
        if (!validate()) return;
        
        try {
            await dispatch(createMentor(formData)).unwrap();
            // При успешном создании:
            toast.success('Ментор успешно создан!');
            onSuccess();  // Вызываем колбэк для обновления списка
            onClose();     // Закрываем модальное окно
        } catch (err) {
            // Ошибка обрабатывается в useEffect
        }
    };

    useEffect(() => {
        if (error) {
            setErrors(prev => ({ ...prev, server: error }));
            const timer = setTimeout(() => setErrors(prev => ({ ...prev, server: '' })), 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <div className="mentor-create">
            <form onSubmit={handleSubmit}>
                <h2>Новый ментор</h2>

                <div>
                    <label>Имя и Фамилия:</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Настоящее имя"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}

                    <input
                        type="text"
                        name="secondName"
                        placeholder="Фамилия"
                        value={formData.secondName}
                        onChange={handleChange}
                    />
                    {errors.secondName && <span className="error">{errors.secondName}</span>}
                </div>

                <div>
                    <label>Специалист:</label>
                    <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                    >
                        <option value="">Выберите вашу специальность</option>
                        {items?.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    {errors.specialization && <span className="error">{errors.specialization}</span>}
                </div>

                <div>
                    <label>Опыт работы:</label>
                    <input
                        type="number"
                        name="experience"
                        placeholder="Выберите ваш опыт"
                        value={formData.experience}
                        onChange={handleChange}
                        min="0"
                    />
                    {errors.experience && <span className="error">{errors.experience}</span>}
                </div>

                <div className="row">
                    <div>
                        <label>Телефон:</label>
                        <PhoneInput
                            country={'kg'}
                            onlyCountries={['kg', 'kz', 'ru', 'uz', 'tj']}
                            value={formData.phone}
                            onChange={(phone) => {
                                setFormData({ ...formData, phone });
                                setErrors({ ...errors, phone: '' });
                            }}
                            inputProps={{
                                name: 'phone',
                                required: true,
                            }}
                            placeholder="Ваш телефон"
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Ваш email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>

                <div>
                    <label>Пароль:</label>
                    <div className="password-field">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Придумайте пароль"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <div className="button-row">
                    <button type="button" onClick={() => onClose()} className="cancel">
                        Отмена
                    </button>
                    <button type="submit" className="create" disabled={loading}>
                        {loading ? 'Создание...' : 'Создать'}
                    </button>
                </div>

                {errors.server && (
                    <div className="error">
                        {typeof errors.server === 'string'
                            ? errors.server
                            : errors.server?.message || 'Ошибка при создании'}
                    </div>
                )}
            </form>
        </div>
    );
}

export default MentorCreate;