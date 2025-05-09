"use client"

import { useState } from "react"
import big from "../../assets/big1.png"

const WatchPage = () => {
    const [checkedLessons, setCheckedLessons] = useState({
        1: true,
        2: true,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
    })

    const toggleCheckbox = (lessonId) => {
        setCheckedLessons((prev) => ({
            ...prev,
            [lessonId]: !prev[lessonId],
        }))
    }

    return (
        <div className="w-full mx-auto max-w-[1180px] px-4 md:px-0">
            <img src={big || "/placeholder.svg"} alt="" className="w-full" />

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-[30px] md:mt-[60px]">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-[18px] md:text-[22px]">Данные курса</h3>
                    </div>

                    <div className="flex text-[rgba(111,109,115,1)] mt-3 gap-2">
                        <p>22 раздела</p>
                        <p>22 лекций</p>
                        <p>21 ч 39 мин общая продолжительность</p>
                    </div>

                    <div>
                        <h6 className="font-bold mt-4 text-[18px]">Описание</h6>
                        <p className="mt-4">
                            Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать програмами как Figma,Affter
                            Effect.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с
                            нуля.Научитесь работать програмами.Сделаем 3 полноценных проекта для вашего Вы узнаете в этом курсы,как
                            создавать сайты с нуля.Научитесь работать програмами как.Сделаем 3 полноценных проекта для вашего Вы
                            узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать програмами как.Сделаем 3 полноценных
                            проекта для вашегоВы узнаете в этом курсы,как создавать сайты с нуля. Научитесь работать
                            програмами.Сделаем 3 полн оценных проекта для вашего Вы узнаете в этом курсы,как создавать сайты с нуля.
                            Научитесь работать програмами как.Сделаем 3 полноц енных проекта для вашего Вы узнаете в этом курсы,как
                            создавать сайты с нуля. Научитесь работать програмами.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mt-4">Чему вы научитесь</h4>
                        <p className="mt-4">
                            Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать <br /> програмами как Figma,Affter
                            Effect.Сделаем 3 полноценных проекта <br /> для вашего
                        </p>
                        <p className="mt-2">
                            Вы узнаете в этом курсы,как создавть сайты с нуля.Научитесь работать <br /> програмами как Figma,Affter
                            Effect.Сделаем 3 полноценных проекта <br /> для вашего
                        </p>
                        <p className="mt-2">
                            Вы узнаете в этом курсы,как создавать сайты с нуля.Научитесь работать <br /> програмами как Figma,Affter
                            Effect.Сделаем 3 полноценных проекта <br /> для вашего
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 min-h-[800px]">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[18px] md:text-[22px]">Урок</h3>
                        <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium mt-1">Подготовка</p>
                    </div>

                    <div className="mt-4">
                        <div
                            className="flex items-center justify-between py-3 md:py-4 bg-gray-100 rounded-lg px-3 md:px-4 hover:bg-gray-100 transition-colors cursor-pointer"
                            onClick={() => toggleCheckbox(1)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">01</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[1] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[1] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Как проходить курс</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 bg-gray-100 rounded-lg px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer"
                            onClick={() => toggleCheckbox(2)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">02</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[2] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[2] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Скачиваем материалы</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold text-[14px] uppercase text-gray-800">Основы Figma</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(3)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">04</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[3] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[3] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Об обновлении Figma</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(4)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">05</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[4] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[4] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Какие размеры у сайта</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(5)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">06</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[5] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[5] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Создаём frame сайта</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(6)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">07</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[6] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[6] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Что такое сетка grid</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(7)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">08</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[7] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[7] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Основы работы с фигурами/Изображение</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(8)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">09</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[8] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[8] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Основы работы с текстом</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(9)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">10</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[9] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[9] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Группировка слоёв</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold text-[14px] uppercase text-gray-800">Основы Figma</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(10)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">04</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[10] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[10] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Об обзор основ Figma</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(11)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">05</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[11] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[11] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Какие разобраться у сайта</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(12)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">06</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[12] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[12] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Создать frame сайта</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(13)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">07</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[13] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[13] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Что такое сетка grid</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(14)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">08</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[14] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[14] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Основы работы с фигурами/Изображение</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(15)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">09</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[15] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[15] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Основы работы с текстом</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>

                        <div
                            className="flex items-center justify-between py-3 md:py-4 px-3 md:px-4 mt-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-lg"
                            onClick={() => toggleCheckbox(16)}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-[16px] font-medium text-gray-600">10</span>
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-sm ${checkedLessons[16] ? "bg-yellow-400" : "bg-gray-300"}`}
                                >
                                    <svg
                                        className={`w-4 h-4 ${checkedLessons[16] ? "text-black" : "text-gray-400"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[16px] font-medium">Группировка слоёв</p>
                            </div>
                            <p className="text-[rgba(111,109,115,1)] text-[14px] font-medium">12:00 мин</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage
