import { Routes, Route } from 'react-router-dom';
import Home from './Pages/homepage/Home.js';
import Dashboard from './Pages/dashboard/Dashboard.js';
import Error from './Pages/error/Error.js';

/*
This is the router managing all the routes.
*/
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/user/:userId" element={<Dashboard/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
}

export default Router;