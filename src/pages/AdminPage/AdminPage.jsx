import { useState } from "react";
import adm1 from "../../assets/adm1.svg";
import adm2 from "../../assets/adm2.svg";
import adm3 from "../../assets/adm3.svg";
import adm4 from "../../assets/adm4.svg";
import adm5 from "../../assets/adm5.svg";
import adm6 from "../../assets/adm6.svg";
import adm7 from "../../assets/adm7.svg";
import adm8 from "../../assets/adm8.svg";
import Dashboard from "../../components/User-dashboard/Dashboard..jsx";
import Mentory from "../../components/mentory/Mentory.jsx";
import AdminCourse from "../../components/adminCourses/AdminCourse.jsx";
import Dashboarde from "../../components/Dashboard/Dashboarde.jsx";
import Payments from "../../components/payments/Payments.jsx";
import Chat from "../../components/Chat/Chat.jsx";
import ProjectsAdminka from "../../components/ProjectsAdminka/Index.jsx";
import { useNavigate } from "react-router-dom";


const AdminPage = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: "grid", img: adm1, title: "grid" },
        { id: "list", img: adm2, title: "List" },
        { id: "dashboard", img: adm3, title: "Dashboard" },
        { id: "videos", img: adm4, title: "Videos" },
        { id: "favorites", img: adm5, title: "Favorites" },
        { id: "payments", img: adm6, title: "payments" },
        { id: "messages", img: adm7, title: "Messages" },
        { id: "windows", img: adm8, title: "Windows" },
    ];
    const navigate = useNavigate();

    const renderContent = () => {
        switch (activeTab) {
            case "grid":
                return <div className="w-full h-full bg-black">
                    <Dashboarde/>
                </div>;
            case "list":
                return <Dashboard />;
            case "dashboard":
                return <Mentory />;
            case "videos":
                return <AdminCourse />;
            case "favorites":
                return <div className=""><ProjectsAdminka/></div>;
            case "payments":
                return <div className=""><Payments/></div>;
            case "messages":
                return <div className=""><Chat/></div>;
            case "windows":
                return <div className=""></div>;
            default:
                return <div className="p-6">Dashboard Page</div>;
        }
    };

    return (
        <div className="w-[1200px] flex justify-between h-[976px] mx-auto">
            <div className="w-10 flex flex-col h-[810px] mt-[44px] items-center justify-between space-y-6 bg-black z-20">
                {menuItems.map((item) => {
                    const buttonClass = item.id === "windows" ? "mt-[250px]" : "";
                    return (
                        <button
                            key={item.id}
                            className={`rounded-full !bg-white h-[65px] w-[50px] flex items-center justify-center transition-colors ${
                                activeTab === item.id
                                    ? "!bg-yellow-400 text-black"
                                    : "!bg-white text-black hover:bg-gray-200"
                            } ${buttonClass}`}
                            onClick={() => {
                                if (item.id === "windows") {
                                    navigate("/");
                                } else {
                                    setActiveTab(item.id);
                                }
                            }}
                            title={item.title}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[50px] h-[20px] object-contain"
                            />
                        </button>
                    );
                })}
            </div>
            <div className="w-[1132px] h-[810px] flex-1 bg-black ml-[20px] mt-[44px]">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminPage;
