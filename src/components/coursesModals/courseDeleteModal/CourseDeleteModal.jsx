import React from "react";

const CourseDeleteModal = ({ course, onClose, onConfirm }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-50">
            <div className="bg-white p-[20px] rounded-[24px] w-[332px] shadow-xl relative">
                <h2 className="text-[24px] font-extrabold leading-[120%] tracking-[0px] text-center mt-[-5px] mb-[20px]">
                    Вы точно хотите удалить этот курс?
                </h2>

                <div className="flex gap-[12px] items-center mb-[20px]">
                    <img className="w-[85px] h-[54px] rounded-[4px] object-cover" src={course.image} alt={course.name} />
                    <div>
                        <p className="text-[16px] font-[500]">{course.name}</p>
                        <p className="text-[14px] text-[rgb(111,109,115)]">{course.author}</p>
                    </div>
                </div>

                <button
                    className="bg-[#23AFCE] w-full h-[46px] border"
                    style={{
                        backgroundColor: "#23AFCE",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                        borderRadius: "12px",
                        marginBottom: "12px"
                    }}
                    onClick={onClose}
                >
                    Отмена
                </button>
                <button
                    className="bg-[#09080D] w-full h-[46px] border"
                    style={{
                        backgroundColor: "#09080D",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                        borderRadius: "12px"
                    }}
                    onClick={() => onConfirm(course.id)}  // ID өтөт жана курс өчүрүлөт
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default CourseDeleteModal;
