import React from 'react';
import './PurchasesCard.scss';
import { FaBookOpen, FaCommentDots } from 'react-icons/fa';
import teacherAvatar from '../../../assets/MirbekImg/avatar.svg'

function PurchasesCard() {
  return (

      <div className='purchase-card small'>
        <div className='top'>
          <img
            src={teacherAvatar} 
            alt='avatar'
            className='avatar'
          />
          <div className='info'>
            <h4>Марина Сополова</h4>
            <p className='title'>Личная консультация</p>
          </div>
        </div>

        <p className='description'>
          Личная консультация, проверка 2—3 проектов, советы по ошибкам и план развитие ваших навыков...
        </p>

        <p className='status'>Завершено</p>

        <div className='actions'>
          <button className='icon-btn yellow'><FaCommentDots /></button>
          <button className='icon-btn dark'><FaBookOpen /></button>
        </div>
      </div>
  );
}

export default PurchasesCard;
