import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Instructors from '../pages/Instructors';
import Classes from '../pages/Classes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/instructors',
        element: <Instructors />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
    ],
  },
]);
