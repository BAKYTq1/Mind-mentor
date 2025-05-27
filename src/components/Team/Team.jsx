import React, { useState } from 'react';
import axios from 'axios';

const initialMembers = [
    { avatar: '/avatar.png', name: '', speciality: '', experience: '' },
    { avatar: '/avatar.png', name: '', speciality: '', experience: '' },
    { avatar: '/avatar.png', name: '', speciality: '', experience: '' },
    { avatar: '/avatar.png', name: '', speciality: '', experience: '' },
];

function Team() {
    const [members, setMembers] = useState(initialMembers);

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const updatedMembers = [...members];
            updatedMembers[index].avatar = imageUrl;
            setMembers(updatedMembers);
        }
    };

    const handleInputChange = (index, field, value) => {
        const updatedMembers = [...members];
        updatedMembers[index][field] = value;
        setMembers(updatedMembers);
    };

    const handleCreate = async () => {
        try {
            const projectId = localStorage.getItem('projectId');

            if (!projectId) {
                alert('Project ID табылган жок!');
                return;
            }

            const specializationName = members
                .map(member => member.speciality)
                .filter(spec => spec.trim() !== '');

            const payload = {
                projectId: parseInt(projectId),
                specializationName,
            };

            const API_URL = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${API_URL}/specializations`, payload);

            console.log('Успешно жиберилди:', response.data);
            alert('Команда ийгиликтүү сакталды!');
        } catch (error) {
            console.error('Ката болду:', error);
            alert('Ката чыкты, кайра аракет кылып көрүңүз.');
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#0F0F10] text-white font-sans px-10 py-8">
            <div className="w-[1012px] h-[544px] mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold">Команда</h1>
                    <div className="flex gap-4">
                        <button className="w-[253px] h-[46px] rounded-2xl bg-white text-black px-6 py-2 font-semibold">Назад</button>
                        <button onClick={handleCreate} className="w-[253px] h-[46px] rounded-2xl bg-[#00B2FF] text-white px-6 py-2 font-semibold">Создать</button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    {members.map((member, index) => (
                        <div key={index} className="flex items-start gap-4 relative">
                            <div className="relative w-20 h-20">
                                <img
                                    src={member.avatar}
                                    alt="avatar"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                <label className="text-sm text-[#b0b0b0] underline cursor-pointer">
                                    Изменить фото
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleImageChange(e, index)}
                                    />
                                </label>
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label className="text-white text-sm">ФИО</label>
                                <input
                                    type="text"
                                    placeholder="ФИО"
                                    value={member.name}
                                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                    className="bg-white text-black rounded-xl px-4 py-2 w-full placeholder-gray-400 focus:outline-none"
                                />

                                <label className="text-white text-sm">Специальность</label>
                                <input
                                    type="text"
                                    placeholder="Специальность"
                                    value={member.speciality}
                                    onChange={(e) => handleInputChange(index, 'speciality', e.target.value)}
                                    className="bg-white text-black rounded-xl px-4 py-2 w-full placeholder-gray-400 focus:outline-none"
                                />

                                <label className="text-white text-sm">Опыт работы</label>
                                <input
                                    type="text"
                                    placeholder="Опыт работы"
                                    value={member.experience}
                                    onChange={(e) => handleInputChange(index, 'experience', e.target.value)}
                                    className="bg-white text-black rounded-xl px-4 py-2 w-full placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
