import { useState } from "react";
import { Link } from "react-router-dom";
import glaw1 from "../../assets/glaw1.svg";
import glaw2 from "../../assets/glaw2.svg";
import glaw3 from "../../assets/glaw3.svg";
import glaw4 from "../../assets/glaw4.svg";
import md from "../../assets/md.svg";
import { Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState("Главная");
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Главная", "Курсы", "Менторы", "Проекты"];
    return (
        <header className="w-full bg-white px-4 py-3 shadow-md relative">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        className="lg:hidden block mr-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <img src={md} alt="логотип" className="w-full h-8" />
                </div>

                <nav className="hidden lg:flex gap-12 font-semibold ml-10">
                    {menuItems.map((item) => (
                        <Link
                            to={
                                item === "Менторы"
                                    ? "/mentors"
                                    : item === "Главная"
                                        ? "/"
                                        : item === "Проекты"
                                            ? "/projects"
                                            : "/courses"
                            }
                            key={item}
                        >
                            <button
                                onClick={() => setActiveMenu(item)}
                                className={`px-4 py-1.5 rounded transition ${
                                    activeMenu === item ? "bg-gray-800 text-white" : "text-black"
                                }`}
                            >
                                {item}
                            </button>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
                        <img src={glaw1} alt="calendar" className="w-[35px]" />
                    </div>
                    <div className="relative bg-black rounded-full w-8 h-8 flex items-center justify-center">
                        <img src={glaw2} alt="bell" className="w-[35px]" />
                        <span className="absolute top-1 right-1 bg-yellow-400 w-2 h-2 rounded-full" />
                    </div>
                    <div className="relative bg-black rounded-full w-8 h-8 flex items-center justify-center">
                        <img src={glaw3} alt="calendar" className="w-[35px]" />
                        <span className="absolute top-1 right-1 bg-yellow-400 w-2 h-2 rounded-full" />
                    </div>
                   <Link to={'adminka'}><img src={glaw4} alt="avatar" className="w-8 h-8 rounded-full" /></Link> 
                </div>
            </div>

            {/* Мобильное меню (при 768px и меньше) */}
            <div
                className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-white py-4 z-10`}
            >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3.6}
                    className="swiper-container w-full"
                >
                    {menuItems.map((item) => (
                        <SwiperSlide key={item}>
                            <Link
                                to={
                                    item === "Менторы"
                                        ? "/mentors"
                                        : item === "Главная"
                                            ? "/"
                                            : item === "Проекты"
                                                ? "/projects"
                                                : "/courses"
                                }
                            >
                                <button
                                    onClick={() => setActiveMenu(item)}
                                    className={`whitespace-nowrap px-4 py-2 rounded font-semibold transition ${
                                        activeMenu === item ? "bg-gray-800 text-white" : "text-black"
                                    }`}
                                >
                                    {item}
                                </button>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </header>
    );
}
