import { useState } from "react";
import DataUser from "../../data/UserData";
import marina from "../../assets/svg/user-avatar.svg"
import c_icon1 from "../../assets/svg/cours1.svg"
import c_icon2 from "../../assets/svg/cours2.svg"
import c_icon3 from "../../assets/svg/cours3.svg"

export default function DataUserCard() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-[514px] h-[805px] bg-white rounded-2xl p-6 shadow-md  relative">
        <button className="absolute top-4 right-4 text-2xl font-bold">×</button>

        <h2 className="text-xl font-bold mb-4">Данные пользователя</h2>

        <div className="flex items-center gap-3 mb-5">
          <img
            src={marina}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold leading-tight">Марина Сополова</p>
            <div className="text-sm text-gray-500 flex gap-13 mt-1">
              <span className="flex items-center gap-1"><img src={c_icon1} alt="" className="w-4 h-4"/> 4 курса</span>
              <span className="flex items-center gap-1"><img src={c_icon2} alt="" className="w-4 h-4"/> 2 технологии</span>
              <span className="flex items-center gap-1"><img src={c_icon3} alt="" className="w-4 h-4"/> 1 проект</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
                  <button
            onClick={() => setActiveTab("courses")}
            className={`flex-1 px-4 py-2 rounded-[16px] text-sm  border border-[#cfcfcf] ${
              activeTab === "courses" ? "bg-cyan-500 text-white" : "bg-black text-black"
            }`}
          >
            Курсы
          </button>


          <button
            onClick={() => setActiveTab("tech")}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium border border-[#cfcfcf]  ${
              activeTab === "tech" ? "bg-cyan-500 text-white" : "bg-white text-black"
            }`}
          >
            Технологии
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium border border-[#cfcfcf]  ${
              activeTab === "projects" ? "bg-cyan-500 text-white" : "bg-white text-black"
            }`}
          >
            Проекты
          </button>
        </div>

        <div className="h-[520px] overflow-y-auto space-y-3 pr-1">
          {DataUser[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 items-start bg-[#f9f9f9] rounded-xl p-3 text-sm"
            >
              <img
                src={item.image}
                alt="icon"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="leading-snug mb-1">{item.title}</p>
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{item.type}</span>
                  <span>{item.price} C</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center items-center gap-1 text-sm">
          <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-200">«</button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`w-8 h-8 rounded-full ${
                p === 2 ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
          <span className="mx-1">...</span>
          <button className="w-8 h-8 rounded-full text-gray-700 hover:bg-gray-100">15</button>
          <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-200">»</button>
        </div>

       
      </div>
    </div>
  );
}


