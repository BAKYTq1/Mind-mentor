import React, { useState, useEffect } from 'react';
import './MentorCreate.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createMentor, resetStatus } from '../../redux/mentorApi/mentorCreateSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MentorCreate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.mentorCreate);

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        for (const key in formData) {
            if (!formData[key]) {
                newErrors[key] = 'Обязательное поле';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        dispatch(createMentor(formData));
    };

    useEffect(() => {
        if (success) {
            setFormData({
                firstName: '',
                secondName: '',
                specialization: '',
                experience: '',
                phone: '',
                email: '',
                password: '',
            });
        }

        if (success || error) {
            const timer = setTimeout(() => {
                dispatch(resetStatus());
            }, 2000);
            return () => {
                clearTimeout(timer);
                if (success) {
                    navigate('/mentors');
                }
            };
        }
    }, [success, error, dispatch]);

    return (
        <div className="mentor-create">
            <form onSubmit={handleSubmit}>
                <h2>Создание ментора</h2>

                <input type="text" name="firstName" placeholder="Имя" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span className="error">{errors.firstName}</span>}

                <input type="text" name="secondName" placeholder="Фамилия" value={formData.secondName} onChange={handleChange} />
                {errors.secondName && <span className="error">{errors.secondName}</span>}

                <select name="specialization" value={formData.specialization} onChange={handleChange}>
                    <option value="">Выберите специализацию</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="DevOps">DevOps</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                </select>
                {errors.specialization && <span className="error">{errors.specialization}</span>}

                <input type="number" name="experience" placeholder="Опыт (в годах)" value={formData.experience} onChange={handleChange} />
                {errors.experience && <span className="error">{errors.experience}</span>}

                <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} />
                {errors.phone && <span className="error">{errors.phone}</span>}

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}

                <div className="password-field">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                {errors.password && <span className="error">{errors.password}</span>}

                <button type="submit" disabled={loading}>
                    {loading ? 'Создание...' : 'Создать'}
                </button>

                {success && <div className="success">Ментор успешно создан!</div>}
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default MentorCreate;
