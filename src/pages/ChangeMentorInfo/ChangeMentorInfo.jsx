import React, { useState } from 'react'
import './ChangeMentorInfo.scss'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsCaretRight } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";

function ChangeMentorInfo() {
  const [videoPreview, setVideoPreview] = useState(null);
  const [aboutText, setAboutText] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    experience: '',
    specialty: '',
    workPlace: ''
  });

  const companyList = [
    { id: 1, name: 'Компания Meta', color: '#23AFCE' },
    { id: 2, name: 'Компания Google', color: '#FABB05' },
    { id: 3, name: 'Компания Apple', color: '#FF6B6B' },
    { id: 4, name: 'Компания Microsoft', color: '#6C63FF' },
  ];

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
    }
  };

  const handleCompanyClick = (company) => {
    if (selectedCompanies.some(c => c.id === company.id)) {
      setSelectedCompanies(selectedCompanies.filter(c => c.id !== company.id));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику сохранения данных
    console.log({
      ...formData,
      aboutText,
      selectedCompanies,
      hasVideo: !!videoPreview
    });
    alert('Данные сохранены!');
  };

  return (
    <div className='change-mentor-info'>
      <div className='change-mentor-info-header'>
        <div className='header-left'>
          <FaArrowLeftLong className='arrow-left' />
          <h3>Редактирование профиля</h3>
        </div>
        <button className='save-button' onClick={handleSubmit}>
          <span>Сохранить</span>
          <span className='arrow-right'><BsCaretRight /></span>
        </button>
      </div>

      <form className='profile-edit-form' onSubmit={handleSubmit}>
        <div className='form-section'>
          <div className='profile-photo'>
            <label>Фото профиля</label>
            <div className='profile-photo-upload'>
              <div 
                style={{ backgroundImage: 'url(https://via.placeholder.com/150)' }} 
                className='photo-placeholder'
              />
              <button type="button" className='upload-button'>
                <FaPencil className='pencil-icon' />
              </button>
            </div>
          </div>
          <div className='form-inputs'>
            <div className='form-input'>
              <label>Имя</label>
              <input 
                type="text" 
                name="firstName"
                placeholder="Напишите здесь" 
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-input'>
              <label>Фамилия</label>
              <input 
                type="text" 
                name="lastName"
                placeholder="Напишите здесь" 
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-input'>
              <label>Опыт работы</label>
              <input 
                type="text" 
                name="experience"
                placeholder="Напишите здесь" 
                value={formData.experience}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-input'>
              <label>Специальность</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
              >
                <option value="">Выберите вашу специалность</option>
                <option value="developer">Разработчик</option>
                <option value="designer">Дизайнер</option>
                <option value="manager">Менеджер</option>
                <option value="analyst">Аналитик</option>
              </select>
            </div>
          </div>
        </div>
        <div className='form-place'>
          <label>Место работы</label>
          <input
            type="text"
            name="workPlace"
            placeholder="Напишите место работы через запятую, например: компания Meta, и нажмите Enter"
            value={formData.workPlace}
            onChange={handleInputChange}
          />
          <div className='company-tags'>
            {companyList.map((company) => (
              <small 
                style={{ 
                  border: `1px solid ${company.color}`,
                  backgroundColor: selectedCompanies.some(c => c.id === company.id) ? `${company.color}20` : '#FAFAFA',
                  color: selectedCompanies.some(c => c.id === company.id) ? company.color : '#2D2D2D'
                }} 
                key={company.id}
                onClick={() => handleCompanyClick(company)}
                className='company-tag'
              >
                {company.name}
              </small>
            ))}
          </div>
        </div>
        <div className="video-preview-container">
          <div className="preview-upload">
            {videoPreview ? (
              <div className='video-wrapper'>
                <video src={videoPreview} controls className="video-element" />
                <button 
                  type="button" 
                  className='remove-video'
                  onClick={() => setVideoPreview(null)}
                >
                  ×
                </button>
              </div>
            ) : (
              <>
                <label htmlFor="video-upload" className="add-button">
                  <span>+</span>
                </label>
                <input
                  type="file"
                  id="video-upload"
                  accept="video/*"
                  onChange={handleVideoChange}
                  style={{ display: 'none' }}
                />
                <p className="upload-text">Добавить превью видео</p>
              </>
            )}
          </div>
          <div className="about-yourself">
            <textarea
              placeholder="Расскажите о себе"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangeMentorInfo