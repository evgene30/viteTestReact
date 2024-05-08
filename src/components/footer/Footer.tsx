import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuLinks } from '@/service/menuLinks';
import { footerStyles } from './styles';

export const Footer = (): JSX.Element => (
  <Box sx={footerStyles}>
    {menuLinks.map((text) => (
      <NavLink
        key={text.title}
        to={text.link}
        className={({ isActive }) => (isActive ? 'active' : 'nav-link-header')}
      >
        {text.title}
      </NavLink>
    ))}
  </Box>
);
