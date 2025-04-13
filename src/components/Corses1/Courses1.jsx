"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import avi from  "../../assets/avi.svg"
import courl2 from "../../assets/courl2.svg"
import courl3 from "../../assets/courl3.svg"
import img from "../../assets/img.png"
import strel from "../../assets/strel.svg"
import strel2 from "../../assets/strel2.svg"
import strel3 from "../../assets/strel3.svg"

const Courses1 = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
    const [showMore, setShowMore] = useState(false)
    const logAction = (action) => {
        console.log(`[${new Date().toISOString()}] User action: ${action}`)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            logAction(`Window resized to ${window.innerWidth}px`)
        }

        window.addEventListener("resize", handleResize)
        logAction("Component mounted")

        return () => {
            window.removeEventListener("resize", handleResize)
            logAction("Component unmounted")
        }
    }, [])

    const getSlidesPerView = () => {
        if (windowWidth < 768) {
            return 1
        } else if (windowWidth < 964) {
            return 2
        } else {
            return 3
        }
    }

    const handleShowMore = () => {
        setShowMore(true)
        logAction("Show more button clicked")
    }

    const courses = [
        {
            id: 1,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SoFX9UCzI398YpwZyymvxkS0LwZYQv.png',
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 2,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I6lxuS1l9WwQzneGwSFBWXht69dmGC.png",
            price: "2000 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 3,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: img,
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 4,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image:avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SoFX9UCzI398YpwZyymvxkS0LwZYQv.png",
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 5,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I6lxuS1l9WwQzneGwSFBWXht69dmGC.png",
            price: "2000 ₽",
            bgColor: "bg-green-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
        {
            id: 6,
            title: "Курс по дизайну UX/UI Figma,After Effect",
            rating: 4.5,
            students: 1200,
            language: "Русский",
            instructor: {
                image: avi,
                rating: 4.9,
            },
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TPhnYfBU9K0pOVIRh0E48inhLyqdFn.png",
            price: "2000 ₽",
            bgColor: "bg-yellow-300",
            tags: ["Дизайнеры", "Frontend Разработчики", "Backend Разработчики"],
        },
    ]

    const visibleCourses = windowWidth < 768 ? (showMore ? courses : courses.slice(0, 3)) : courses
    return (
        <div className="container w-full px-4 py-8 bg-white">
            <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Курсы</h2>
                    <div className="flex items-center">
                        <button
                            className=" flex hover:text-gray mr-4 rounded-4xl bg-[rgba(250,250,250,1)] p-3 pl-5 pr-5"
                            onClick={() => logAction("View all courses clicked")}
                        >
                            Посмотреть все

                            <img className={"ml-5   mt-1"} src={strel3} alt=""/>
                        </button>
                        {windowWidth >= 768 && (
                            <div className="flex">
                                <button
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-2\ swiper-button-prev-courses"
                                    onClick={() => logAction("Previous slide button clicked")}
                                >
                                    <img src={strel2} alt=""/>
                                </button>
                                <button
                                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center swiper-button-next-courses"
                                    onClick={() => logAction("Next slide button clicked")}
                                >
                                    <img src={strel} alt=""/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {windowWidth >= 768 ? (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={getSlidesPerView()}
                        navigation={{
                            prevEl: ".swiper-button-prev-courses",
                            nextEl: ".swiper-button-next-courses",
                        }}
                        className="courses-swiper w-full"
                        onSlideChange={() => logAction("Slide changed")}
                    >
                        {courses.map((course) => (
                            <SwiperSlide key={course.id}>{renderCourseCard(course, logAction)}</SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="flex flex-col gap-6">
                        {visibleCourses.map((course) => (
                            <div key={course.id}>{renderCourseCard(course, logAction)}</div>
                        ))}

                        {!showMore && courses.length > 3 && (
                            <div className="mt-4 text-center">
                                <button className="text-gray-500 hover:text-black" onClick={handleShowMore}>
                                    Показать еще
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

const renderCourseCard = (course, logAction) => (
    <div className="bg-white rounded-[25px] shadow-sm border rounded-4xl  border-gray-100 h-full"
         style={{
             boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)'
         }}
    >
        <div className="relative">
            <div className="aspect-[4/3] relative p[20px]">
                <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full pt-2 pr-4 pb-2 pl-4 rounded-4xl  object-cover"
                />
                <div
                    className="absolute top-4 ml-8  pl-3 pr-3  bg-white rounded-[55px] px-2 py-1 flex items-center">
                    <span className="text-sm p-1  pfont-bold">{course.rating}</span>
                    <span className="ml-1">😊</span>
                </div>
                <div className="absolute top-2 right-2 bg-white/80 rounded-md px-2 py-1">
                </div>
                <div className="absolute bottom-2 mb-3 mr-5 right-2 flex flex-col gap-2">
                    <img src={courl2} alt=""/>
                    <img src={courl3} alt=""/>
                </div>
            </div>
        </div>
        <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{course.title}</h3>
            <div className="flex items-center mb-2">
                <img
                    src={course.instructor.image || "/placeholder.svg"}
                    alt="Instructor"
                    className="w-6 rounded-[100px]  h-6 rounded-full mr-2 object-cover"
                />
                <span className="text-sm font-bold mr-1">{course.instructor.rating}</span>
                <span className="text-sm text-gray-500 mr-1">{course.students} студентов</span>
                <span className="text-sm text-gray-500">{course.language}</span>
            </div>
            <div className="mb-3">
                <p className="text-sm mb-2">Для кого этот курс</p>
                <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`text-xs px-3 pt-2 pr-5 pb-2 pl-5 rounded-full border ${tag === "Дизайнеры" ? 'border-black' : tag === "Frontend Разработчики" ? 'border-[rgba(255,208,44,1)]' : tag === "Backend Разработчики" ? 'border-[rgba(35,175,206,1)]' : 'border-gray-300'}`}
                            onClick={() => logAction(`Tag ${tag} clicked for course ${course.id}`)}
                        >
                 {tag}
                  </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{course.price}</span>
                <button
                    className="bg-gray-800 text-white px-5 py-3 rounded-[17px]  text-sm"
                    onClick={() => logAction(`Details button clicked for course ${course.id}`)}
                >
                    Подробно
                </button>
            </div>
        </div>
    </div>
)

export default Courses1
