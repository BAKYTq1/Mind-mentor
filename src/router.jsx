import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import UserLayout from "./Layout/UserLayout";
import Notfound from "./components/Notfound/Notfound";
import UserData from "./components/UserData";
import CoursesPage from "./pages/coursespage/CoursesPage";
import NewProject from "./components/NewProject";


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
               path: '*',
               element: <Notfound/>
            },
            {
               path: 'user-data',
               element: <UserData/>
            },
            {
               path: 'kours',
               element: <CoursesPage/>
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
         
            path: 'new-project',
            element: <NewProject/>
         
      }
     
      
      
])