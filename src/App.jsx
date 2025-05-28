import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // обязательно!
import './App.css';
import './Layout/Layout.scss';

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
