import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Instructors from '../pages/Instructors';
import Classes from '../pages/Classes';
import DashboardLayout from '../layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import UserDashboard from '../pages/Dashboard/UserDashboard';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminRoute from './AdminRoute';

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
  {
    path: '/user',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
    ],
  },
]);
