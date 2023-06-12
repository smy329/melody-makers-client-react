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
import MySelectedClasses from '../pages/Dashboard/MySelectedClasses';
import MyEnrolledClasses from '../pages/Dashboard/MyEnrolledClasses';
import PaymentHistory from '../pages/Dashboard/PaymentHistory';
import MakePayment from '../pages/Dashboard/MakePayment';
import InstructorRoute from './InstructorRoute';
import InstructorDashboard from '../pages/Instructor/InstructorDashboard';
import MyClasses from '../pages/Instructor/MyClasses';
import AddClass from '../pages/Instructor/AddClass';
import ManageClasses from '../pages/Admin/ManageClasses';
import ManageUsers from '../pages/Admin/ManageUsers';
import Error404 from '../pages/Error404';
import TestPay from '../pages/Dashboard/TestPay';

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
    path: '/users',
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
      {
        path: 'my-selected-classes',
        element: <MySelectedClasses />,
      },
      {
        path: 'my-enrolled-classes',
        element: <MyEnrolledClasses />,
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />,
      },
      {
        path: 'make-payment',
        element: <MakePayment />,
      },
      {
        path: 'test-pay',
        element: <TestPay />,
      },
    ],
  },
  {
    path: '/instructors',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: (
          <InstructorRoute>
            <InstructorDashboard />
          </InstructorRoute>
        ),
      },
      {
        path: 'add-class',
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: 'my-classes',
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
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
      {
        path: 'manage-classes',
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: '404',
    element: <Error404 />,
  },
]);
