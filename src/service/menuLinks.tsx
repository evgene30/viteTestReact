import React from 'react';
import { About } from '@/pages/about/About';
import { Home } from '@/pages/home/Home';
import { getLoadUsers } from '@/routes/loaders/loaders';

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
    element: <div>W1</div>,
    children: [
      {
        path: '/work/:contactId',
        element: <div>Contakt</div>,
      },
    ],
  },
];
