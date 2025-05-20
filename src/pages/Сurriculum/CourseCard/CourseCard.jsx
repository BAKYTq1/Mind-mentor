import React from 'react';
import './CourseCard.scss';
import lemon from '../../../assets/MirbekImg/lemon.svg';

const CourseCard = ({ teacher, title, description, progress }) => {
  return (
    <div className="course-card">
      <div className="course-card__header">
        <div className="course-card__teacher">
          <img src={teacher.avatar} alt="avatar" className="avatar" />
          <span>{teacher.name}</span>
        </div>
        <div className="course-card__badge">
          <img src={lemon} alt="lemon" className="lemon" />
          
        </div>
      </div>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__description">{description}</p>

      <div className="course-card__footer">
        <div className="course-card__play-button">
          <span>▶</span>
        </div>
        <span className="course-card__progress-text">{`${progress.completed} из ${progress.total}`}</span>
      </div>
      <div className="course-card__progress-bar">
        <div className="course-card__progress-fill" style={{ width: `${(progress.completed / progress.total) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default CourseCard;
