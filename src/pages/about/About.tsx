import React from 'react';
import { Box } from '@mui/material';
import { aboutStyle } from './style';
import { NavTabs } from '@/components/tooltip/CustomTooltip';

export const About = () => (
  <Box sx={aboutStyle}>
    <NavTabs />
  </Box>
);
