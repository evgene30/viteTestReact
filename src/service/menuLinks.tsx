import React from 'react';

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
  element: <div>{key}</div>,
}));
