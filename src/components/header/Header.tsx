import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { menuLinks } from '@/service/menuLinks';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  buttonHeader,
  headerStyle,
} from './style';

export const Header = () => {
  const titleApp = 'Testing';

  return (
    <AppBar position="static" sx={headerStyle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {titleApp}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
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
};
