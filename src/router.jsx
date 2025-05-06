import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import UserLayout from "./Layout/UserLayout";
import Notfound from "./components/Notfound/Notfound";
import UserData from "./components/UserData";
import CoursesPage from "./pages/coursespage/CoursesPage";
import Korzina from "./components/korzina/Korzina";
import Pokupka from "./components/korzina-pokupka/Pokupka";



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

        ]
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
      
      
])