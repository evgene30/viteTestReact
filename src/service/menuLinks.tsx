import React from 'react';
import { About } from '@/pages/about/About';

export type TRoutes = { [key: string]: string };

export const routes: TRoutes = {
  Home: '/',
  About: '/about',
  Work: '/work',
};

const getComponent = (key: string) => {
  switch (key) {
    case 'About':
      return <About />;
    case 'Work':
      return <div>W1</div>;
    default:
      return <div>{key}</div>;
  }
};

export const menuLinks = Object.keys(routes).map((key) => ({
  title: key,
  link: routes[key],
  path: key.toLocaleLowerCase(),
  element: getComponent(key),
}));
