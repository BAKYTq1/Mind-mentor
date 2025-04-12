// import { Routes, Route, MemoryRouter } from 'react-router-dom';
// import Layout from "./Layout/Layout.jsx";
// import Home from "./pages/Home/Home.jsx";
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router.jsx';

function App() {
    return (
        <div>
          <RouterProvider router={myRouter}/>
        </div>
    );
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

export  function App() {
  return (
    <div className='wrapper'>
     <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
