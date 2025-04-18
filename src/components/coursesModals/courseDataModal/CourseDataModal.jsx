import React, { useState } from "react";
import CloseIcon from "../../..//assets/icons/close-icon.svg"
import CourseInfo1 from "../../../assets/icons/courseInfo-icon.svg";
import CourseInfo2 from "../../../assets/icons/courseInfo-icon2.svg";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Ava1 from "../../../assets/ava1.svg";
import Mentor2 from "../../../assets/Mentor2.svg";

const CourseDataModal = ({ course, onClose }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const sales = [...Array(24)].map((_, index) => ({
        id: index + 1,
        name: `Курс по UX/UI ${index + 1}`,
        date: "12.02.25",
    }));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sales.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sales.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderPageNumbers = () => {
        const visiblePages = [];
        for (let i = 1; i <= pageNumbers.length; i++) {
            if (i === 1 || i === pageNumbers.length || (i >= currentPage - 1 && i <= currentPage + 1)) {
                visiblePages.push(i);
            } else if (visiblePages[visiblePages.length - 1] !== "...") {
                visiblePages.push("...");
            }
        }
        return visiblePages;
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-50">
            <div className="bg-white p-[24px] rounded-[16px] w-[398px] h-[607px] shadow-xl relative">
                <div className={"flex justify-between items-center mb-[25px]"}>
                    <h2 className="text-xl font-[700] text-[24px]">Данные курса</h2>
                    <img className={"w-[14px] cursor-pointer"} src={CloseIcon} alt="" onClick={onClose} />
                </div>

                <p className={"text-[#6F6D73] text-[14px] font-[500] mb-[16px]"}>Автор курса</p>

                <div className={"flex gap-[12px] items-center"}>
                    <img className={"w-[45px] h-[45px] bg-[#00000080] rounded-[50%]"} src={Ava1} alt="Avatar" />
                    <div>
                        <h3 className={"text-[16px] font-[600] text-[#000000]"}>Марина Сополова</h3>
                        <div className={"flex gap-[5px] text-[#6F6D73] text-[15px] font-[500]"}>
                            <img src={CourseInfo1} alt="" />
                            <p>4 курса</p>
                            <img className={"ml-[14px]"} src={CourseInfo2} alt="" />
                            <p>2 технологии</p>
                        </div>
                    </div>
                </div>

                <div className={"flex justify-between text-[#6F6D73] text-[15px] font-[500] mt-[20px] mb-[18px]"}>
                    <p>Всего продано</p>
                    <p>{sales.length} раза</p>
                </div>

                <div className="">
                    {currentItems.map((item, index) => (
                        <div className={"flex mb-[17px] justify-between items-center"} key={item.id}>
                            <div className={"flex items-center gap-[12px]"}>
                                <img className={"w-[36px] h-[35px] rounded-[50%] bg-[#00000080]"} src={Mentor2} alt="Avatar" />
                                <p className={"text-[15px] font-[500]"}>{item.name}</p>
                            </div>
                            <p className={"text-[14px] font-[450] text-[#6F6D73]"}>{item.date}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-[8px]">
                    <div className="flex gap-[28px]">
                        {renderPageNumbers().map((item, index) => (
                            <button
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
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-[28px] items-center">
                        <FaAnglesLeft
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            className="cursor-pointer"
                        />
                        <FaAnglesRight
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDataModal;
