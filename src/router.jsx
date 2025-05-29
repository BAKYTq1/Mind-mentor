import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import UserLayout from "./Layout/UserLayout";
import SavedLayout from "./Layout/SavedLayout";

import Home from "./pages/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import UserData from "./components/UserData";
import CourseDetail from "./components/courseDetail/CourseDetail.jsx";
import Profile from "./components/profile/Profile.jsx";
import UserProfile from "./components/profile/userProfile/UserProfile .jsx";
import UserPassword from "./components/profile/userPassword/UserPassword.jsx";
import PaymentMethod from "./components/profile/paymentMethod/PaymentMethod.jsx";

import CoursesPage from "./pages/coursespage/CoursesPage";
import Korzina from "./components/korzina/Korzina";
import Pokupka from "./components/korzina-pokupka/Pokupka";
import NewProject from "./components/NewProject";
import HistoryPage from "./pages/history/HistoryPage.jsx";
import WatchPage from "./pages/watchpage/WatchPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import DataProjectAdmin from "./components/DataProjectAdmin";
import Podbor from "./components/podbor/Podbor.jsx";
import Hero from "./components/hero/Hero.jsx";

import SigneIn from "./pages/Auth/SigneIn.jsx";
import Register from "./pages/Auth/Register.jsx";

import Project from "./pages/project/Project.jsx";
import Mentor from "./pages/mentor/Mentor.jsx";
import MentorDetail from "./pages/MentorDetail/MentorDetail.jsx";
import ProjectDetails from "./components/projectDetails/ProjectDetails.jsx";
import Curriculum from "./pages/Сurriculum/Curriculum.jsx";
import Purchases from "./pages/Purchases/Purchases.jsx";
import ChooseSpecialization from "./components/chooseSpecialization/ChooseSpecialization.jsx";
import ProjectDetail from "./pages/ProjectDetail/Projectdetail.jsx";
import MentorCreate from "./components/Mentor-Create/MentorCreate.jsx";
import ChangeMentorInfo from "./pages/ChangeMentorInfo/ChangeMentorInfo.jsx";
import Savedmentor from "./pages/savedMentor/Savedmentor.jsx";
import Savedproject from "./pages/savedproject/SavedProject.jsx";
import Team from "./components/Team/Team.jsx";
import RegisterAdmin from "./pages/Auth/RegisterAdmin.jsx";
import ProjectsAdminka from "./components/ProjectsAdminka/index.jsx";
import EditProject from "./components/EditProject/EditProject.jsx";

function About() {
    return null;
}

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: '*', element: <Notfound /> },
            { path: 'user-data', element: <UserData /> },
            { path: 'kours', element: <CoursesPage /> },
            { path: 'History', element: <HistoryPage /> },
            { path: '/смотреть', element: <WatchPage /> },
            { path: '/projects', element: <Project /> },
            { path: 'course-detail', element: <CourseDetail /> },
            { path: '/mentors', element: <Mentor /> },
            { path: 'mentor-detail', element: <MentorDetail /> },
            { path: 'project-detail', element: <ProjectDetail /> },
            { path: '/curriculum', element: <Curriculum /> },
            { path: '/purchases', element: <Purchases /> },
            { path: '/ChangeInfoMentor', element: <ChangeMentorInfo /> },
            { path: 'data-project', element: <DataProjectAdmin /> },
            { path: 'details', element: <Korzina /> },
            { path: 'pokupka', element: <Pokupka /> },
            { path: 'Podbor', element: <Podbor /> },
            
        ]
    },
    
    {
        path: 'adminka',
        
        element: <UserLayout />,
        children: []
    },
    
    { path: '/team', element: <Team /> },
    { path: 'new-project', element: <NewProject /> },
    { path: 'profile', element: <Profile /> },
    { path: '/user-profile', element: <UserProfile /> },
    { path: '/user-password', element: <UserPassword /> },
    { path: '/payment-method', element: <PaymentMethod /> },
    { path: '/like1', element: <FavoritePage /> },
    { path: '/sign-in', element: <SigneIn /> },
    { path: 'register', element: <Register /> },
    { path: 'mentors-detail/:mentorId', element: <MentorDetail /> },
    { path: 'mentor-create', element: <MentorCreate /> },
    { path: '/project-details', element: <ProjectDetails /> },
    { path: '/register-admin', element: <RegisterAdmin /> },


    {
        path: '/saved',
        element: <SavedLayout />,
        children: [
            { index: true, element: <FavoritePage /> },
            { path: 'сохраненные', element: <FavoritePage /> },
            { path: 'saved-mentor', element: <Savedmentor /> },
            { path: 'saved-project', element: <Savedproject /> },
        ]
    },
    {
        path: '/project-details',
        element: <ProjectDetails/>
    },
    {
        path: '/team',
        element: <Team/>
    },
    {
        path: '/register-admin',
        element: <RegisterAdmin/>
    },
     {
        path:'Podbor',
        element: <Podbor/>
   },
    
])



export default myRouter;
