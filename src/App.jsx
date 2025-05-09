// import { Routes, Route, MemoryRouter } from 'react-router-dom';
// import Layout from "./Layout/Layout.jsx";
// import Home from "./pages/Home/Home.jsx";
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router.jsx';
import './App.css'
import './Layout/Layout.scss'

function App() {
    return (
        <div>
          <RouterProvider router={myRouter}/>
        </div>
    );

}

export default App;
