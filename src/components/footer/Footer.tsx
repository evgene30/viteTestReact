import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuLinks } from '@/service/menuLinks';
import { footerStyles } from './styles';
import { titleApp } from '../header/Header';

export const Footer = (): JSX.Element => (
  <Box sx={footerStyles}>
    <Box className="linkBlock">
      {menuLinks.map((text) => (
        <NavLink
          key={text.title}
          to={text.link}
          className={({ isActive }) =>
            isActive ? 'active' : 'nav-link-header'
          }
        >
          {text.title}
        </NavLink>
      ))}
    </Box>
    <Box className="copyrightBlock">
      {titleApp} &copy; {new Date().getFullYear()}
    </Box>
  </Box>
);
