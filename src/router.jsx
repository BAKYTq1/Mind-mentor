import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import UserLayout from "./Layout/UserLayout";
// import UserData from "./components/UserData";
import Notfound from "./components/Notfound/Notfound";
import UserData from "./components/UserData";
import Kursy from "./pages/Kursy/Kursy";



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
               path: 'kursy',
               element: <Kursy/>
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
