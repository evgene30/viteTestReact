import { About } from '@/pages/about/About';
import { Home } from '@/pages/home/Home';
import { getLoadUsers } from '@/routes/loaders/getLoadUsers';
import { Work } from '@/pages/work/Work';
import { PrivateRoute } from '@/layout/PrivateRoute';
import { LoginPage } from '@/pages/login/LoginPage';

export const menuLinks = [
  {
    link: '/',
    title: 'Home',
    path: '/',
    element: <Home />,
    loader: () => getLoadUsers('https://jsonplaceholder.typicode.com/users'),
  },
  {
    link: '/about',
    title: 'About',
    path: '/about',
    element: <About />,
  },
  {
    link: '/work',
    title: 'Work',
    path: '/work',
    element: (
      <PrivateRoute>
        <Work />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/work/:contactId',
        element: <div>Contact</div>,
      },
    ],
  },
  {
    link: '/login',
    title: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
];
