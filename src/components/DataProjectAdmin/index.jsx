import React from "react";
import imgData from "../../assets/images/dataProject.png"
import imgMarina from "../../assets/svg/course-icon.svg"

export default function DataProjectAdmin() {
  return (

    <div className="bg-black w-[1440px] h-[1487px] m-auto">
    <div className="bg-black w-[1200px] h-[1488px]  m-auto text-white min-h-screen p-10">
      
      <div className="flex gap-5 items-start mt-[30px] mb-10">
        {/* Left Info */}
 
        <div className="space-y-4 md:col-span-2">
        <h1 className="text-[32px] font-bold mb-4">📁 Проект Mind Mentor</h1>
          <div className="flex items-center gap-4 text-sm">
            <span>4.5 ⭐</span>
            <span className="text-gray-400">4.45 оценок</span>
          </div>
          <div className="flex justify-between"> 
          <div className="text-sm text-gray-400">Последнее обновление: 09.2024</div>
          <div className="text-sm text-gray-400">Нужны 3 специалиста   Русский</div>
          </div>


          <div className="text-sm flex justify-between">
            <span className="text-white">Проект менеджер:</span>{" "}
            <div className="flex items-center gap-[10px]">
            <span className="font-semibold text-[16px]">Марина Сопонова</span>
            <img className="w-[36px] h-[36px]" src={imgMarina} alt="" />
            </div>

          </div>

          <div className="text-2xl font-bold">2000 С</div>

          <div className="flex gap-4">
            <button className="bg-white w-[266px] h-[54px] text-black font-semibold px-6 py-2 rounded-xl">
              Изменить
            </button>
            <button className="bg-red-600  w-[266px] h-[54px] text-white font-semibold px-6 py-2 rounded-xl">
              Удалить
            </button>
          </div>
        </div>

        {/* Project Image */}
        <div>
          <img
            src={imgData}
            alt="project"
            className="rounded-xl w-[556px] h-[325px] object-cover"
          />
        </div>
      </div>

      {/* Needed Specialists */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Нужны специалисты</h2>
        <div className="flex gap-4 flex-wrap text-sm">
          <div >Дизайнеры</div>
          <div>Frontend Разработчики</div>
          <div>Backend Разработчики</div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-6 mt-[40px]">
        <h2 className="font-semibold mb-2">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Проект менеджер", "Frontend разработчик", "Backend разработчик"].map(
            (role, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl">
                  <img src={imgMarina} alt="" />
                </div>
                <div>
                  <p className="font-semibold">Марина Сопонова</p>
                  <p className="text-sm text-gray-400">2 года опыта</p>
                  <p className="text-sm">{role}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Requirements */}
      <div className="mb-6 mt-[40px]">
        <h2 className="font-semibold mb-2">Требование к специалистам</h2>
        <p className="text-sm text-gray-300 ">Нет</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2 text-[24px] mt-[24px]">Описание</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
        Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter Effect.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашегоВы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами.
        </p>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="font-semibold mb-2 text-[24px]">Отзывы</h2>
        <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 space-y-6 mt-[24px]">
      {Array(20) // же comments.map()
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="flex items-center gap-4 h-[104px]">
            <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center">
              <img className="w-[50px] h-[50px]" src={imgMarina} alt="" />
            </div>
            <div>
              <p className="font-semibold text-[20px] text-[rgb(15,82,87)]">Канатова Рано</p>
         
              <p className="text-sm text-gray-300">
              Несмотря на то, что курс онлайн, преподаватели всегда были на связи, оперативно отвечали на вопросы и давали развернутую обратную связь по заданиям. Это очень мотивировало
              </p>
            </div>
          </div>
        ))}
    </div>
      </div>
    </div>
    </div>
  );
}
