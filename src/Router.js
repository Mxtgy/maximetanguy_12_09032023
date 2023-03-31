import { Routes, Route } from 'react-router-dom';
import Home from './Pages/homepage/Home.js';
import Dashboard from './Pages/dashboard/Dashboard.js';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/user/:user" element={<Dashboard/>}></Route>
        </Routes>
    );
}

export default Router;