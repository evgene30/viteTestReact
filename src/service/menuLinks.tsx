import React from 'react';
import { About } from '@/pages/about/About';

export type TRoutes = { [key: string]: string };

export const routes: TRoutes = {
  Home: '/',
  About: '/about',
  Work: '/work',
};

export const menuLinks = Object.keys(routes).map((key) => ({
  title: key,
  link: routes[key],
  path: key.toLocaleLowerCase(),
  element: key === 'About' ? <About /> : <div>{key}</div>,
}));
