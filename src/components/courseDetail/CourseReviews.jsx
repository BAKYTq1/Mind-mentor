import React, { useState } from 'react';
import Smile from "../../assets/icons/smile.svg";
import Avatar from "../../assets/mentor2.svg";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

const CourseReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;
    const reviews = [...Array(250)].map((_, index) => ({
        index: index + 1,
        name: `Канатова Рано ${index + 1}`,
        text: "Несмотря на то, что курс онлайн, преподаватели всегда были на связи, оперативно отвечали на вопросы и давали развернутую обратную связь по заданиям. Это очень мотивировало.",
    }));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const reviewsItems = reviews.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    const displayedPages = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, '...', totalPages];
        } else if (currentPage >= totalPages - 2) {
            return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    };

    return (
        <div className="container px-4 md:px-0">
            <h3 className="text-[20px] md:text-[24px] font-[700] mb-[20px] md:mb-[30px]">Отзывы</h3>
            {reviewsItems.map((review) => (
                <div key={review.index} className="p-[16px] md:p-[20px]">
                    <div className="flex flex-col sm:flex-row gap-[16px] md:gap-[20px] items-start sm:items-center">
                        <div>
                            <img src={Avatar} alt="Avatar" />
                            <div className="flex gap-[5px] mt-2">
                                <p>5.0</p>
                                <img src={Smile} alt="Smile" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[18px] md:text-[20px] font-[500] text-[rgb(15,82,87)]">
                                {review.name}
                            </h3>
                            <p className="text-[14px] md:text-[16px] font-[500]">
                                {review.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center justify-between mt-[24px] md:mt-[30px] gap-[20px] sm:gap-0">
                <div className="flex items-center flex-wrap gap-[10px]">
                    {displayedPages().map((number, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (number === '...') return;
                                setCurrentPage(number);
                            }}
                            className={`min-w-[44px] w-[44px] sm:w-[64px] h-[42px] rounded-[32px] text-[16px] sm:text-[18px] font-[700] ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {number}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-[10px] sm:gap-[15px] ml-0 sm:ml-[25px]">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="w-[44px] sm:w-[64px] h-[44px] bg-[rgb(45,45,45)] rounded-[32px] text-[16px] sm:text-[18px] font-[700] text-white flex items-center justify-center"
                    >
                        <BsCaretLeft />
                    </button>

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="w-[44px] sm:w-[64px] h-[44px] bg-[rgb(45,45,45)] rounded-[32px] text-[16px] sm:text-[18px] font-[700] text-white flex items-center justify-center"
                    >
                        <BsCaretRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseReviews;
