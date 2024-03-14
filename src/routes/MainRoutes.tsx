import Home from 'pages/home';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/home'))

const MainRoutes = {
    path: '/',
    element: <HomePage />
}

export default MainRoutes;
