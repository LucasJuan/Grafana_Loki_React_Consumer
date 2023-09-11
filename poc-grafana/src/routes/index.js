import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

const ReRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
};

export default ReRoutes;
