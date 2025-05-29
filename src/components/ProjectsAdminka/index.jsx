import React, { useState, useRef, useEffect } from 'react';
import CourseImg from "../../assets/img/courseImg.png";
import { VscKebabVertical } from "react-icons/vsc";
import { CgSortAz } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { GiRoundStar } from "react-icons/gi";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProject } from '../../redux/Project/ProjectGet.js';
import { deleteProject } from '../../redux/Project/DeleteProject.js';
import Loading from '../../shared/Loading/Loading.jsx';
import SpecialistsPanel from '../Special/index.jsx';

const ProjectsAdminka = () => {
    const dispatch = useDispatch();
    const { projects, loading, error } = useSelector((state) => state.getproject);
    const { loading: deleteLoading } = useSelector((state) => state.deleteproject);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [activeMenu, setActiveMenu] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        dispatch(getProject());
    }, [dispatch]);

    const allProjects = projects?.projectsFilter || [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allProjects.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = Array.from({ length: Math.ceil(allProjects.length / itemsPerPage) }, (_, i) => i + 1);

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

    const handleDelete = async (projectId) => {
        const confirmed = window.confirm("Чын эле өчүргүңүз келип жатабы?");
        if (!confirmed) return;

        try {
            await dispatch(deleteProject(projectId)).unwrap();
            alert("Проект ийгиликтүү өчүрүлдү!");
            dispatch(getProject());
        } catch (err) {
            alert("Өчүрүүдө ката чыкты: " + err);
        }
    };

    if (loading || deleteLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex gap-[20px] justify-center pt-[24px] pb-[24px] bg-black">
            <div className="w-[622px] h-[766px] gap-[20px] p-[20px] border rounded-[24px] bg-white overflow-y-auto">
                <div className="w-full pr-[20px]">
                    <h3 className="text-[20px] font-[500]">проекты</h3>
                    <div className="flex justify-between mt-[12px] mb-[12px]">
                        <p className="text-[rgb(111,109,115)] font-[500] text-[16px]">Все проекты</p>
                        <div className="flex gap-[12px] items-center">
                            <CgSortAz className="text-[30px]" />
                            <FaListAlt className="text-[20px]" />
                            <Link to="/new-project">
                                <IoMdAddCircle className="text-[24px]" />
                            </Link>
                        </div>
                    </div>

                    <div className="h-[606px]">
                        {currentItems?.map((item) => (
                            <div
                                key={item.projectId}
                                className="h-[62px] mb-[12px] flex justify-between items-center group hover:bg-gray-200 pl-2 ml-[-7px] rounded-md transition-all duration-200"
                            >
                                <div className="flex items-center gap-[12px] transition-all duration-200 group-hover:translate-x-[36px]">
                                    <input
                                        type="checkbox"
                                        className="absolute w-6 h-6 border border-[#09080D] rounded-lg bg-[#D9D9D9] transform -translate-x-9 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                                    />
                                    <img
                                        className="w-[85px] h-[54px] object-cover rounded-md"
                                        src={item.projectImageUrl || CourseImg}
                                        alt="project"
                                    />
                                    <div>
                                        <p className="text-[14px] font-[500]">{item.projectName}</p>
                                        <p className="text-[14px] font-[500] text-[rgb(111,109,115)]">
                                            {item.hasRequests ? "Есть запросы" : "Нет запросов"}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative flex gap-[16px] text-[#6F6D73] items-center">
                                    <span>{item.projectPrice} c</span>
                                    <div>
                                        <div className="flex gap-[7px] items-center">
                                            <p className="text-[13px] font-bold">{item.avgRating?.toFixed(1) || "0.0"}</p>
                                            <GiRoundStar />
                                        </div>
                                        <div className="flex gap-[7px] items-center">
                                            <p className="text-[13px] font-bold">{item.projectReviewCount}</p>
                                            <BiSolidCommentDetail />
                                        </div>
                                    </div>

                                    <div className="relative" ref={menuRef}>
                                        <VscKebabVertical
                                            className="ml-[7px] cursor-pointer"
                                            onClick={() => setActiveMenu(activeMenu === item.projectId ? null : item.projectId)}
                                        />
                                        {activeMenu === item.projectId && (
                                            <div className="absolute right-0 mt-[10px] w-[120px] bg-[#0F0F11] text-white rounded-[10px] p-[10px] z-10 shadow-lg">
                                                <Link
                                                    to={`/adminka/ProjectDetail/${item.projectId}`}
                                                    className="text-[14px] font-medium mb-2 cursor-pointer hover:underline block"
                                                >
                                                    Данные
                                                </Link>
                                                <Link
                                                    to={`/EditProject/${item.projectId}`}
                                                    className="text-[14px] font-medium mb-2 cursor-pointer hover:underline block"
                                                >
                                                    Изменить
                                                </Link>
                                                <p
                                                    className="text-[14px] text-red-500 font-medium cursor-pointer hover:underline"
                                                    onClick={() => handleDelete(item.projectId)}
                                                >
                                                    Удалить
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-[12px]">
                        <div className="flex gap-[28px]">
                            {renderPageNumbers().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => item !== '...' && paginate(item)}
                                    disabled={item === '...'}
                                    className={`w-[32px] h-[32px] rounded-full font-medium ${
                                        currentPage === item ? "bg-[#23AFCE] text-white" : "text-black"
                                    } ${item === '...' ? "cursor-default opacity-60" : "cursor-pointer"} transition-all duration-200`}
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
                                onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <SpecialistsPanel />
        </div>
    );
};

export default ProjectsAdminka;
