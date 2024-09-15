import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/layout/Layout';
import { ErrorPage } from '@/pages/error/ErrorPage';
import { menuLinks } from '@/service/menuLinks';
import { LoginPage } from '@/pages/login/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: menuLinks,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
