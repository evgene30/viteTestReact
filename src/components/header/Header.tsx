import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { menuLinks } from '@/service/menuLinks';
import { buttonHeader, headerStyle } from './style';
import { SearchComponent } from '../search/Search';

export const titleApp = 'Testing App';

export const Header = () => (
  <AppBar position="static" sx={headerStyle}>
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        className="headerTitle"
      >
        <Link to="/">{titleApp}</Link>
      </Typography>
      <SearchComponent />
      {menuLinks.map((text) => (
        <NavLink
          key={text.title}
          to={text.link}
          className={({ isActive }) =>
            isActive ? 'active' : 'nav-link-header'
          }
        >
          <Button sx={buttonHeader} color="inherit">
            {text.title}
          </Button>
        </NavLink>
      ))}
    </Toolbar>
  </AppBar>
);
