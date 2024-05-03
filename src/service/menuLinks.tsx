import React from 'react';
import { About } from '@/pages/about/About';
import { Home } from '@/pages/home/Home';

export const menuLinks = [
  {
    link: '/',
    title: 'Home',
    path: '/',
    element: <Home />,
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
  },
];
