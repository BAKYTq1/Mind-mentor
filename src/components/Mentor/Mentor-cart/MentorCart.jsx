import React from 'react';
import smile from '../../../assets/img/Smile_rating.svg';
import { IoHeartSharp } from "react-icons/io5";
import { SlControlPlay } from "react-icons/sl";
import './style.scss';

const MentorCart = ({ mentor }) => {
  return (
    <div className='mentor-cart'>
      <div className='mentor-logo'>
        <button className='mentor-rating'>
          4.5 <img src={smile} alt="Рейтинг" className="pt-[1px]"/>
        </button>

        <div className="images-container">
          <img
              src={mentor.img}
              alt={`Ментор ${mentor.name}`}
              className="mentor-img"
              loading="lazy"
          />
        </div>

        <div className="mentor-btn">
          <button aria-label="Просмотреть">
            <SlControlPlay/>
          </button>
          <button aria-label="Добавить в избранное">
            <IoHeartSharp/>
          </button>
        </div>
      </div>

      <div className='item-m-cart'>
        <h3>{mentor.name}</h3>
        <p>{mentor.students.toLocaleString()} студентов {mentor.language}</p>
        
        <div className='opyt'>
          <div><h4>Опыт {mentor.experience}</h4></div>
          <div><h4>Работает в {mentor.company}</h4></div>
        </div>
        
        <div className='spec'>
          <h4>{mentor.specialty}</h4>
        </div>
        
        <p className='mentor-textp'>
          {mentor.description}
        </p>
        
        <div className='btn-price'>
        <p className="project-price">{mentor.price.toLocaleString()} <span>C</span> </p>
          <button>Технологии</button>
        </div>
      </div>
    </div>
  );
};

export default MentorCart;