import React from 'react'
import './Curriculum.scss'
import CourseCard from './CourseCard/CourseCard'
import teacherAvatar from '../../assets/MirbekImg/avatar.svg'

function Curriculum() {
  const aboutdata1 = [
    {
      id: 1,
      title: "Как проходить курс",
      time: "2:00 мин",
    },
    {
      id: 2,
      title: "Скачиваем материалы",
      time: "2:00 мин",
    }
  ]
  const aboutdata2 = [
    {
      id: 3,
      title: "Об обновлении Figma",
      time: "2:00 мин",
    },
    {
      id: 4,
      title: "Какие размеры у сайта",
      time: "2:00 мин",
    },
    {
      id: 5,
      title: "Создаём frame сайта",
      time: "2:00 мин",
    },
    {
      id: 6,
      title: "Что такое сетка grid",
      time: "2:00 мин",
    }
  ]
  return (
    <div className='curriculum'>
      <CourseCard
        teacher={{ name: 'Марина Сополова', avatar: teacherAvatar }}
        title="Курс по дизайну UX/UI Figma, Affter Effect"
        description="Вы узнаете в этом курсы, как создавать сайты с нуля. Научитесь работать программами как Figma"
        progress={{ completed: 0, total: 65 }}
      />
      <div className='curriculum-container'>
        <div className='curriculum-container-header'>
          <h1>Данные курса</h1>
          <ul>
            <li>22 раздела</li>
            <li>22 лекций</li>
            <li>21 ч 39 мин общая продолжителность</li>
          </ul>
        </div>
        <div className='curriculum-container-body'>
          <div className='curriculum-container-body-1'>
            <h1>1. Подготовка</h1>
            {
              aboutdata1.map((item) => (
                <div className='curriculum-container-body-1-item' key={item.id}>
                  <h2>{item.id < 10 ? `0${item.id}` : item.id}</h2>
                  <h2>{item.title}</h2>
                  <p>{item.time}</p>
                </div>
              ))
            }
          </div>
          <div className='curriculum-container-body-2'>
            <h1>2. Основы Figma</h1>
            {
              aboutdata2.map((item) => (
                <div className='curriculum-container-body-2-item' key={item.id}>
                  <h2>{item.id < 10 ? `0${item.id}` : item.id}</h2>
                  <h2>{item.title}</h2>
                  <p>{item.time}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='curriculum-container-footer'>
          <button>Оставить отзыв</button>
          <button>Начать курс</button>
        </div>
      </div>
    </div>
  )
}

export default Curriculum