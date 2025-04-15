import React, {useState, useEffect, useRef} from 'react';
import Icon from "../../assets/icons/icon.svg";
import CourseImg from "../../assets/img/courseImg.png";
import {VscKebabVertical} from "react-icons/vsc";
import {CgSortAz} from "react-icons/cg";
import {IoMdAddCircle} from "react-icons/io";
import {FaListAlt} from "react-icons/fa";
import {BiSolidCommentDetail} from "react-icons/bi";
import {GiRoundStar} from "react-icons/gi";
import {FaAnglesLeft, FaAnglesRight} from "react-icons/fa6";
import CourseDataModal from "../coursesModals/courseDataModal/CourseDataModal.jsx";
import CourseDeleteModal from "../coursesModals/courseDeleteModal/CourseDeleteModal.jsx";

const AdminCourse = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);
    const [modalType, setModalType] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const [courses, setCourses] = useState([...Array(125)].map((_, index) => ({
        id: index + 1,
        name: `Курс по UX/UI ${index + 1}`,
        author: "Марина Сополова",
        price: "2000 с",
        rating: 4.6,
        reviews: 245,
        image: CourseImg,
    })));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = Array.from({length: Math.ceil(courses.length / itemsPerPage)}, (_, i) => i + 1);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderPageNumbers = () => {
        const visiblePages = [];
        for (let i = 1; i <= pageNumbers.length; i++) {
            if (i === 1 || i === pageNumbers.length || (i >= currentPage - 2 && i <= currentPage + 2)) {
                visiblePages.push(i);
            } else if (visiblePages[visiblePages.length - 1] !== '...') {
                visiblePages.push('...');
            }
        }
        return visiblePages;
    };

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             setActiveMenu(null);
    //         }
    //     };
    //
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    const handleOpenModal = (type, course) => {
        setModalType(type);
        setSelectedCourse(course);
        setActiveMenu(null); // менюну жабат
    };

    const handleDeleteCourse = (id) => {
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id)); // Курс өчүрүү
        setModalType(null);  // Модалды жабуу
    };

    return (
        <div className="flex gap-[20px]">
            <div className="w-[412px] p-[20px]">
                <div className="flex justify-between mb-[12px] text-[16px] font-[500]">
        <div className=" justify-between flex gap-[20px]">
            <div className={"w-[405px] pr-[30px] rounded-[20px]"}>
                <div className={"flex justify-between mb-[12px] text-[16px] font-[500]"}>
                    <p>Все курсы</p>
                    <p>Популярные курсы</p>
                </div>
                <div className="flex justify-between mb-[18px]">
                    <h2 className="text-[32px] font-bold">10 000 <span className="text-[18px] font-medium">курс</span>
                    </h2>
                    <h2 className="text-[32px] font-bold">320 <span className="text-[18px] font-medium">курс</span></h2>
                </div>
                <p className="text-[rgb(111,109,115)] font-[500] mb-[16px]">Популярные категории курсов</p>
                <div>
                    {[...Array(10)].map((_, index) => (
                        <div className="flex justify-between w-[372px] h-[46px]" key={index}>
                            <div className="flex gap-[12px] items-center">
                                <img className="w-[32px]" src={Icon} alt=""/>
                                <h3 className="font-[500] text-[14px]">UX/UI дизайн</h3>
                            </div>
                            <div className="flex gap-[20px] items-center">
                                <h3 className="font-[500] text-[14px]">324 раз</h3>
                                <VscKebabVertical/>
                            </div>
                        </div>))}
                </div>
            </div>

            <div className="w-[700px] h-[810px] gap-[20px] rounded-[20px] pr-[20px]">
                <div>
                    <h3 className="text-[20px] font-[500]">Курсы</h3>
                    <div className="flex justify-between mt-[12px] mb-[12px]">
                        <p className="text-[rgb(111,109,115)] font-[500] text-[16px]">Все курсы</p>
                        <div className="flex gap-[12px] items-center">
                            <CgSortAz className="text-[30px]"/>
                            <FaListAlt className="text-[20px]"/>
                            <IoMdAddCircle className="text-[24px]"/>
                        </div>
                    </div>
                </div>

                <div className="h-[652px]">
                    {currentItems.map((item) => (<div
                        key={item.id}
                        className="h-[54px] mb-[12px] flex justify-between items-center group hover:bg-gray-200 pl-2 ml-[-7px] rounded-md transition-all duration-200"
                    >
                        <div
                            className="flex items-center gap-[12px] transition-all duration-200 group-hover:translate-x-[36px]">
                            <input
                                type="checkbox"
                                className="absolute w-6 h-6 border border-[#09080D] rounded-lg bg-[#D9D9D9] transform -translate-x-9 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-600 transition-opacity duration-100"
                            />
                            <img className="w-[85px] h-[54px]" src={item.image} alt=""/>
                            <div>
                                <p className="text-[14px] font-[500]">{item.name}</p>
                                <p className="text-[14px] font-[500] text-[rgb(111,109,115)]">
                                    {item.author} <span>{item.price}</span>
                                </p>
                            </div>
                        </div>

                        <div className="relative flex gap-[7px] text-[#6F6D73]">
                            <p className="text-[13px] font-bold">{item.rating}</p>
                            <GiRoundStar/>
                            <p className="text-[13px] font-bold">{item.reviews}</p>
                            <BiSolidCommentDetail/>

                            <div className="relative" ref={menuRef}>
                                <VscKebabVertical
                                    className="ml-[7px] cursor-pointer"
                                    onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                                />
                                {activeMenu === item.id && (<div
                                    className="absolute right-0 mt-[10px] w-[120px] bg-[#0F0F11] text-white rounded-[10px] p-[10px] z-10 shadow-lg">
                                    <p
                                        className="text-[14px] font-medium mb-2 cursor-pointer hover:underline"
                                        onClick={() => handleOpenModal('data', item)}
                                    >
                                        Данные
                                    </p>
                                    <p
                                        className="text-[14px] text-red-500 font-medium cursor-pointer hover:underline"
                                        onClick={() => handleOpenModal('delete', item)}
                                    >
                                        Удалить
                                    </p>
                                </div>)}
                            </div>
                        </div>
                    </div>))}
                </div>

                <div className="flex justify-between items-center mt-[8px]">
                    <div className="flex gap-[28px]">
                        {renderPageNumbers().map((item, index) => (<button
                            key={index}
                            onClick={() => item !== '...' && paginate(item)}
                            disabled={item === '...'}
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "9999px",
                                fontWeight: 500,
                                backgroundColor: currentPage === item ? "#23AFCE" : "transparent",
                                color: currentPage === item ? "#fff" : "#000",
                                cursor: item === '...' ? "default" : "pointer",
                                transition: "all 0.2s ease",
                                opacity: item === '...' ? 0.6 : 1,
                            }}
                        >
                            {item}
                        </button>))}
                    </div>
                    <div className="flex gap-[28px] items-center">
                        <FaAnglesLeft
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            className="cursor-pointer"
                        />
                        <FaAnglesRight
                            onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {modalType === 'data' && selectedCourse && (<CourseDataModal
                course={selectedCourse}
                onClose={() => setModalType(null)}
            />)}
            {modalType === 'delete' && selectedCourse && (<CourseDeleteModal
                course={selectedCourse}
                onClose={() => setModalType(null)}
                onConfirm={(id) => handleDeleteCourse(id)} // Курс өчүрүлөт
            />)}
        </div>
        </div>
        </div>
        </div>
        );
};

export default AdminCourse;
