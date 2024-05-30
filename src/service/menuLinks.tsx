import React from 'react';
import { About } from '@/pages/about/About';
import { Home } from '@/pages/home/Home';
import { getLoadUsers } from '@/routes/loaders/getLoadUsers';
import { Work } from '@/pages/work/Work';

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
    element: <Work />,
    children: [
      {
        path: '/work/:contactId',
        element: <div>Contact</div>,
      },
    ],
  },
];
