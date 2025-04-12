"use client"
import { useState } from "react"
import mentor from "../assets/mentor.svg"
import mentor2 from "../assets/mentor2.svg"
import mentor4 from "../assets/mentor4.svg"
import mentor3 from "../assets/mentor3.svg"


const coursesData = [
    {
        id: 1,
        title: "Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков",
        type: "Технология",
        price: "3000 ₽",
        date: "12.02.25",
        image: mentor2,
        bgColor: "bg-yellow-400"
    },
    {
        id: 2,
        title: "Курс по UX/UI",
        type: "Курс",
        price: "3000 ₽",
        date: "12.02.25",
        image: mentor3,
        bgColor: "bg-blue-500"
    },
    {
        id: 3,
        title: "Личная консультация, проверка 2–3 проектов, советы по ошибкам и план развитие ваших навыков",
        type: "Технология",
        price: "3000 ₽",
        date: "12.02.25",
        image: mentor4,
        bgColor: "bg-yellow-400"
    },
    ...Array.from({ length: 20 }, (_, i) => ({
        id: i + 4,
        title: `Курс ${i + 4}`,
        type: i % 2 === 0 ? "Курс" : "Технология",
        price: `${3000 + i * 500} ₽`,
        date: `12.0${(i % 5) + 1}.25`,
        image: i % 2 === 0 ? mentor3 : mentor2,
        bgColor: i % 2 === 0 ? "bg-blue-500" : "bg-yellow-400"
    }))
];

const ITEMS_PER_PAGE = 3;

export default function Mentor() {
    const [activeTab, setActiveTab] = useState("Курсы")
    const [currentPage, setCurrentPage] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setCurrentPage(1)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const filteredData = coursesData.filter(item =>
        activeTab === "Курсы" || item.type === activeTab
    );

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full relative">
                <div className="flex justify-between items-center p-5">
                    <h2 className="text-xl font-bold">Данные ментора</h2>
                    <button
                        className="text-2xl font-bold hover:text-gray-600"
                        onClick={handleClose}
                    >
                        ×
                    </button>
                </div>

                <div className="flex items-center gap-3 px-5 pb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={mentor}
                            alt="Марина Сополова"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-medium text-lg">Марина Сополова</p>
                        <div className="flex items-center text-sm gap-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                4 курса
              </span>
                            <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                2 технологии
              </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 px-5">
                    <button
                        className={`py-2 rounded-[18px] font-medium ${activeTab === "Курсы" ? "!bg-[#22c1d6] text-white" : "!bg-white border text-black"}`}
                        onClick={() => handleTabChange("Курсы")}
                    >
                        Курсы
                    </button>
                    <button
                        className={`py-2 rounded-[18px] font-medium${activeTab === "Технологии" ? "!bg-[#22c1d6] text-white" : "!bg-white text-black !border border-[gray] rounded-[18px] p-4"}`}
                        onClick={() => handleTabChange("Технологии")}
                    >
                        Технология
                    </button>
                </div>

                <div className="px-5 py-4 flex justify-between">
                    <span className="text-gray-600">Всего продано</span>
                    <span>{totalItems} курса</span>
                </div>

                <div className="px-5 space-y-3">
                    {currentItems.map((course) => (
                        <div key={course.id} className="border border-[gray] rounded-xl p-4">
                            <div className="flex gap-3">
                                <div
                                    className={`w-12 h-12 rounded-full ${course.bgColor} flex items-center justify-center overflow-hidden`}>
                                    <img src={course.image} alt="Аватар" className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex-1 ">
                                    <p className="font-medium">{course.title}</p>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-gray-500">{course.type}</span>
                                        <div className="flex gap-4">
                                            <span className={" text-gray-500"}>{course.price}</span>
                                            <span className={"text-gray-500"}>{course.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-2 p-5">
                    {currentPage > 1 && (
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                    )}

                    {currentPage > 3 && <span className="mx-1">...</span>}

                    {currentPage > 2 && (
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            {currentPage - 1}
                        </button>
                    )}

                    <button
                        className="w-8 h-8 flex items-center justify-center rounded-full !bg-[#22c1d6] text-white"
                    >
                        {currentPage}
                    </button>

                    {currentPage < totalPages - 1 && (
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </button>
                    )}

                    {currentPage < totalPages - 2 && <span className="mx-1">...</span>}

                    {currentPage !== totalPages && totalPages > 1 && (
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            onClick={() => handlePageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    )}

                    <button
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 ml-1"
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        «
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        »
                    </button>
                </div>
        </div>
</div>
)
}