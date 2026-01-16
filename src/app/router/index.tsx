import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../../pages/HomePage';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import ForgotPassword from '../../pages/ForgotPassword';
import VerifyCode from '../../pages/VerifyCode';
import ResetPassword from '../../pages/ResetPassword';
import AuthSuccess from '../../pages/AuthSuccess';
import CategoryPage from '../../features/categories/CategoryPage';
import ProtectedRoute from '../../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'category/:categoryName',
        element: <CategoryPage/>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'verify-code',
        element: <VerifyCode />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
      {
        path: 'success',
        element: <AuthSuccess />,
      },
    ],
  },
]);
