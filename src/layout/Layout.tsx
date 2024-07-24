import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { layoutStyle } from '@/layout/styles';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const Layout: FC = () => (
  <Box component="main" sx={layoutStyle}>
    <Header />
    <Box className="content">
      <Outlet />
    </Box>
    <Footer />
  </Box>
);
