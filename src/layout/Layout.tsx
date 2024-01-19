import React, { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, SxProps, Theme } from '@mui/material';
import { layoutStyle } from '@/layout/styles';
import { Header } from '@/components/header';
import { Home } from '@/pages/home/Home';
import { Footer } from '@/components/footer';

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <Box component="main" sx={layoutStyle as SxProps<Theme>}>
      <Header />
      <Box className="content">
        {location.pathname === '/' ? <Home /> : <Outlet />}
      </Box>
      <Footer />
    </Box>
  );
};
