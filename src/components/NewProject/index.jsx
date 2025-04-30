import React from "react";

export default function NewProject() {
  return (
    <div className="min-h-screen w-[1440px] h-[1174px] m-[auto] bg-[#0F0F10] text-white font-sans p-10">
    <div className="ml-[80px]">
      <h1 className="text-[64px] font-bold  mb-[50px] ">Новый проект</h1>
      <div className="flex flex-col lg:flex-row gap-[150px]">

        {/* Left Side - Обложка */}
        <div className="w-full max-w-sm">
          <p className="mb-2">Обложка</p>
          <div className="h-[140px] bg-[#D9D9D9] rounded-lg border-2 border-dashed border-cyan-400 flex items-center justify-center mb-4">
            <img src="/upload-icon.svg" alt="Upload" className="w-8 h-8" />
          </div>
          <button className="w-full bg-[#00BFD8] text-white py-2 rounded-md mb-4">
            Изменить
          </button>

          <div className="bg-[#1A1A1A] rounded-lg p-2 flex items-center gap-3">
            <div className="bg-[#00BFD8] p-2 rounded-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M..." stroke="currentColor" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm">Cover.img</p>
              <div className="w-full h-2 bg-gray-600 rounded">
                <div className="h-2 bg-[#00BFD8] rounded" style={{ width: '45%' }}></div>
              </div>
            </div>
            <button className="text-white text-xl ml-2">×</button>
          </div>
        </div>

        {/* Right Side - Inputs */}
        <div className="flex-1 space-y-4">
          {/* Название проекта */}
          <div>
            <p className="mb-1">Название проекта</p>
            <input
              type="text"
              defaultValue="Проект Mind Mentor"
              className=" w-[703px] h-[46px] bg-[white] rounded-[16px] px-4 py-2 text-black  border border-gray-600"
            />
          </div>

          {/* Описание проекта */}
          <div>
            <p className="mb-1">Описание проекта</p>
            <textarea
              rows="4"
              defaultValue="Нужно создать сайт и приложение, где пользователи могут купить курс и получить ментора.Нужно создать сайт и приложение, где пользователи могут купить курс"
              className="  w-[703px] h-[180px]  text-black rounded-[16px] px-4 py-2 bg-[white] border border-gray-600"
            />
          </div>
          <div>
            <p className="mb-1">Требование к специалистам</p>
            <textarea
              rows="4"
              defaultValue="Нет"
              className="  w-[703px] h-[104px] bg-[white]  text-black  rounded-[16px] px-4 py-2  border border-gray-600"
            />
          </div>


          {/* Специалисты */}
          <div className="w-[703px]">
            <p className="mb-1">Специалист</p>
            <div className="space-y-2 grid grid-cols-3">
              <input
                type="text"
                defaultValue="Дизайнер"
                className="w-[229px] h-[46px] bg-[white]  text-black rounded-[16px] px-4 py-2  border border-gray-600"
              />
              <input
                type="text"
                defaultValue="Бекенд"
                className="w-[229px] h-[46px] bg-[white]  text-black rounded-[16px] px-4 py-2  border border-gray-600"
              />
                <input
                type="text"
                defaultValue="Бекенд"
                className="w-[229px] h-[46px] rounded-[16px] px-4 py-2 bg-[white]  text-black border border-gray-600"
              />
              <input
                type="text"
                defaultValue="Бекенд"
                className="w-[229px] h-[46px] rounded-[16px] px-4 py-2 bg-[white]  text-black border border-gray-600"
              />
            </div>
            <button className="text-[white] ml-[470px] mt-2 hover:underline">
              Добавить еще специалистов
            </button>
          </div>

          {/* Цена и Язык */}
          <div className="flex mt-[80px] w-[703px]">
            <div className="flex-1 ">
              <p className="mb-1">Цена</p>
              <input
                type="text"
                defaultValue="2000"
                className="w-[340px] h-[46px] rounded-[16px] px-4 py-2 bg-[white]  text-black  border border-gray-600"
              />
            </div>
            <div className="flex-1">
              <p className="mb-1">Язык</p>
              <select className="w-[340px] h-[46px] rounded-[16px] px-4 py-2 bg-[white]  text-black  border border-gray-600 ">
                <option>Русский</option>
                <option>Кыргызча</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-[703px] justify-between pt-4">
            <button className="bg-white w-[340px] h-[46px]  text-black py-2 px-8 rounded-[16px]">
              Отмена
            </button>
            <button className="bg-[#00BFD8] w-[340px] h-[46px]  text-white py-2 px-8 rounded-[16px] hover:bg-cyan-600">
              Дальше
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

