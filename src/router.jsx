import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import UserLayout from "./Layout/UserLayout";
import Notfound from "./components/Notfound/Notfound";
import UserData from "./components/UserData";
import CourseDetail from "./components/courseDetail/CourseDetail.jsx";
import Profile from "./components/profile/Profile.jsx";
import UserProfile from "./components/profile/userProfile/UserProfile .jsx";
import UserPassword from "./components/profile/userPassword/UserPassword.jsx";
import PaymentMethod from "./components/profile/paymentMethod/PaymentMethod.jsx";


function About() {
    return null;
}

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: '*',
                element: <Notfound/>
            },
            {
                path: 'user-data',
                element: <UserData/>
            },
            {
                path: 'course-detail',
                element: <CourseDetail/>,
            },
        ]
    },

    {
        path: 'adminka',
        element: <UserLayout/>,
        children: []
    },
    {
        path: 'profile',
        element: <Profile/>,
    },
    {
        path: '/user-profile',
        element: <UserProfile/>,
    },
    {
        path: '/user-password',
        element: <UserPassword/>,
    },
    {
        path: '/payment-method',
        element: <PaymentMethod/>,
    }
])