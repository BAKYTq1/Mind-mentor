import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import UserLayout from "./Layout/UserLayout";
// import UserData from "./components/UserData";
import Notfound from "./components/Notfound/Notfound";
import UserData from "./components/UserData";



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

        ]
      },
      {
         path:'adminka',
         element: <UserLayout/>,
         children: [

         ]
      }
      
      
])
