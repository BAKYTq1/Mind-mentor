import React from "react";
import { FaRegComments } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const specialists = ["UX/UI Дизайнер", "Frontend разработчик", "Backend разработчик"];
const requests = Array(100).fill({
  name: "Марина Сополова",
  role: "UX/UI Дизайнер",
  avatar: "https://i.pravatar.cc/150?img=32"
});

const SpecialistsPanel = () => {
  return (
    <div className="w-[488px] h-[766px] bg-white rounded-[24px] p-6 flex flex-col justify-between shadow-md">
      <div>
        <h2 className="text-lg font-bold mb-[16px]">Нужны специалисты</h2>
        <div className="flex  ">
          {specialists.map((item, index) => (
            <button
              key={index}
              className="text-sm font-medium text-black px-4 py-1 border-b-2 border-transparent hover:border-pink-400 transition-all"
            >
              {item}
            </button>
          ))}
        </div>

        <h3 className="text-base font-semibold mb-2">Требование к специалистам</h3>
        <p className="text-sm text-gray-800 mb-6">
          Нужно создать сайт и приложение, где пользователи могут купить курс и получить ментора.
        </p>

        <h4 className="text-[18px] font-semibold mb-4">Запросы</h4>

        <div className="space-y-4 max-h-[470px] overflow-y-auto pr-2">
          {requests.map((req, i) => (
            <div key={i} className="flex items-center h-[50px] justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={req.avatar}
                  alt={req.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{req.name}</p>
                  <p className="text-sm text-gray-500">{req.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-yellow-400 p-2 rounded-full text-black hover:scale-105 transition">
                  <FaRegComments />
                </button>
                <button className="bg-yellow-400 p-2 rounded-full text-black hover:scale-105 transition">
                  <IoMdAdd />
                </button>
                <button className="bg-red-500 p-2 rounded-full text-white hover:scale-105 transition">
                  <IoClose />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      
    </div>
  );
};

export default SpecialistsPanel;
