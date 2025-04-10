import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;