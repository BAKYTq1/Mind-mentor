import { useState } from "react";
import adm1 from "../../assets/adm1.svg";
import adm2 from "../../assets/adm2.svg";
import adm3 from "../../assets/adm3.svg";
import adm4 from "../../assets/adm4.svg";
import adm5 from "../../assets/adm5.svg";
import adm6 from "../../assets/adm6.svg";
import adm7 from "../../assets/adm7.svg";
import adm8 from "../../assets/adm8.svg";
import Filtr from "../Filtr/Filtr.jsx";
import MentorModal from "../mentor-modal/Modal.jsx";
import Mentor from "../../pages/Mentor.jsx"
import Dashboard from "../../components/User-dashboard/Dashboard..jsx";
import Mentory from "../../components/mentory/Mentory.jsx";
import AdminCourse from "../../components/adminCourses/AdminCourse.jsx";

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("grid");

    const menuItems = [
        { id: "grid", img: adm1, title: "grid" },
        { id: "list", img: adm2, title: "List" },
        { id: "dashboard", img: adm3, title: "Dashboard" },
        { id: "videos", img: adm4, title: "Videos" },
        { id: "favorites", img: adm5, title: "Favorites" },
        { id: "chat", img: adm6, title: "Chat" },
        { id: "messages", img: adm7, title: "Messages" },
        { id: "windows", img: adm8, title: "Windows" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "grid":
                return (
                    <div className="w-full h-full bg-black">
                         <Mentory/>
                        {/* <MentorModal/> */}
                    </div>
                );
            case "list":
                return (
                    <div className="bg-black">
                        {/* <h1 className="text-2xl font-bold">List Page</h1>
                        <p>List content goes here</p> */}
                        <Dashboard/>
                        {/* <Mentor/> */}
                    </div>
                );
            case "dashboard":
                return (
                    <div className="">
                        <AdminCourse/>
                        <Filtr/>
                        <MentorModal/>
                    </div>
                );
            case "videos":
                return (
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Videos Page</h1>
                        <p>Videos content goes here</p>
                    </div>
                );
            case "favorites":
                return (
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Favorites Page</h1>
                        <p>Favorites content goes here</p>
                    </div>
                );
            case "chat":
                return (
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Chat Page</h1>
                        <p>Chat content goes here</p>
                    </div>
                );
            case "messages":
                return (
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Messages Page</h1>
                        <p>Messages content goes here</p>
                    </div>
                );
            case "windows":
                return (
                    <div className=" p-6">
                        <h1 className="text-2xl font-bold">Windows Page</h1>
                        <p>Windows content goes here</p>
                    </div>
                );
            default:
                return (
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Dashboard Page</h1>
                        <p>Dashboard content goes here</p>
                    </div>
                );
        }
    };

    return (
        <div className="w-[1200px] flex h-[810px] mx-auto">
            <div className="w-16 flex flex-col h-full items-center justify-between pt-[60px] py-4 space-y-6 bg-black shadow-md z-20">
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

                            onClick={() => setActiveTab(item.id)}
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
            <div className="w-[1132px] h-[810px] flex-1 bg-white">{renderContent()}</div>
        </div>
    );

};

export default AdminPage;
