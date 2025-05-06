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
    const menuItems = ["Главная", "Курсы", "Менторы", "Проекты", "История"];

    const getPath = (item) => {
        switch (item) {
            case "Главная":
                return "/";
            case "Курсы":
                return "/kours";
            case "Менторы":
                return "/mentors";
            case "Проекты":
                return "/projects";
            case "История":
                return "/history";
            default:
                return "/";
        }
    };

    return (
        <header className="w-full bg-white px-4 py-3 mt-[15px] relative">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        className="lg:hidden block mr-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <img src={md} alt="логотип" className="h-[120px] w-[170px]" />
                </div>

                <nav className="hidden lg:flex gap-10 text-[19px] font-bold">
                    {menuItems.map((item) => (
                        <Link to={getPath(item)} key={item}>
                            <button
                                onClick={() => setActiveMenu(item)}
                                className={`px-4 py-1.5 rounded transition-colors duration-200 rounded-[10px] ${
                                    activeMenu === item
                                        ? "bg-black text-white"
                                        : "bg-transparent text-black hover:bg-gray-200"
                                }`}
                            >
                                {item}
                            </button>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={glaw1} alt="calendar" className="w-[35px]" />
                    </div>
                    <div className="relative bg-black rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={glaw2} alt="bell" className="w-[35px]" />
                        <span className="absolute top-1 right-1 bg-yellow-400 w-2 h-2 rounded-full" />
                    </div>
                    <div className="relative bg-black rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={glaw3} alt="chat" className="w-[35px]" />
                        <span className="absolute top-1 right-1 bg-yellow-400 w-2 h-2 rounded-full" />
                    </div>
                    <Link to="/adminka">
                        <img src={glaw4} alt="avatar" className="w-10 h-10 rounded-full" />
                    </Link>
                </div>
            </div>

            {/* Мобильное меню (при 768px и меньше) */}
            <div
                className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-white py-4 z-10`}
            >
                <Swiper spaceBetween={10} slidesPerView={3.6} className="swiper-container w-full">
                    {menuItems.map((item) => (
                        <SwiperSlide key={item}>
                            <Link to={getPath(item)}>
                                <button
                                    onClick={() => {
                                        setActiveMenu(item);
                                        setIsOpen(false);
                                    }}
                                    className={`whitespace-nowrap px-4 py-2 rounded font-semibold transition-colors duration-200 ${
                                        activeMenu === item
                                            ? "bg-black text-white"
                                            : "bg-white text-black hover:bg-gray-100"
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
