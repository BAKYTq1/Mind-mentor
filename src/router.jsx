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

import CoursesPage from "./pages/coursespage/CoursesPage";
import Korzina from "./components/korzina/Korzina";
import Pokupka from "./components/korzina-pokupka/Pokupka";
import NewProject from "./components/NewProject";
import HistoryPage from "./pages/history/HistoryPage.jsx";
import WatchPage from "./pages/watchpage/WatchPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import DataProjectAdmin from "./components/DataProjectAdmin";

import SigneIn from "./pages/Auth/SigneIn.jsx";
import Register from "./pages/Auth/Register.jsx";

import Project from "./pages/project/Project.jsx";
import Mentor from "./pages/mentor/Mentor.jsx";
import SavedLayout from "./Layout/SavedLayout.jsx";
import ProjectDetails from "./components/projectDetails/ProjectDetails.jsx";


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
    },
    {
        path: 'kours',
        element: <CoursesPage/>
    },
    {
        path: 'History',
        element: <HistoryPage/>
    },
    {
        path: '/смотреть',
        element: <WatchPage/>
    },
    {
        path: '/projects',
        element: <Project/>
    },
    {
        path: '/сохраненные',
        element: <FavoritePage/>
    },
    {
        path: '/mentors',
        element: <Mentor/>
    },
    {
        path: "details",
        element: <Korzina/>
    },
    {
        path: "pokupka",
        element: <Pokupka/>
    },
    {
        path: 'new-project',
        element: <NewProject/>
    },
    {
        path: 'data-project',
        element: <DataProjectAdmin/>
    },
    {
        path: '/saved',
        element: <SavedLayout/>,
        children: [
            {
                index: true,
                element: <FavoritePage/>
            },
        ]
    },
    {
        path: '/project-details',
        element: <ProjectDetails/>
    }
])
            {

                path: '/sign-in',
                element: <SigneIn/>
            },
            {
                path:"register",
                element:<Register/>
            }

                path: '/mentors',
                element: <Mentor/>
            },


        ],
       
      },
      {
         path:'adminka',
         element: <UserLayout/>,
         children: [
           
         ]
      },
      {
         path:"details",
         element: <Korzina/>
      },
      {
         path:"pokupka",
         element: <Pokupka/>
      },

      {
         path:"details",
         element: <Korzina/>
      },
      {
         path:"pokupka",
         element: <Pokupka/>
      },


     {
         path: 'course-detail',
         element: <CourseDetail/>,
     },
      {
         
            path: 'new-project',
            element: <NewProject/>
         
      },
      {
         
         path: 'data-project',
         element: <DataProjectAdmin/>
      
   },
   {
    path:'/saved',
    element:<SavedLayout/>,
    children: [
        {
            index: true,
            element: <FavoritePage/>
        },
    ]
   }
     
      
])
