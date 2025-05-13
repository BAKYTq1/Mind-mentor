import React from 'react';
import './Purchases.scss';
import PurchasesCard from './PurchasesCard/PurchasesCard';

function Purchases() {
  return (
    <div className='purchases'>
      <PurchasesCard/>
      <div className='purchase-card'>
        <h2 className='title'>Личная консультация</h2>

        <h3 className='subtitle'>Описание:</h3>
        <p className='description'>
          Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков. Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков. Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развития ваших навыков.
        </p>

        <h4 className='target-title'>Для кого это технология:</h4>
        <div className='tags'>
          <span className='tag'>Дизайнеры</span>
          <span className='tag blue'>Владельцы интернет проектов</span>
          <span className='tag orange'>Frontend Разработчики</span>
          <span className='tag purple'>Frontend Разработчики</span>
        </div>

        <div className='buttons'>
          <button className='feedback-btn'>Оставить отзыв</button>
          <button className='contact-btn'>Написать ментору</button>
        </div>
      </div>
    </div>
  );
}

export default Purchases;
