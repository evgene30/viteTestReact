import React from 'react';
import { Box } from '@mui/material';
import { aboutStyle } from './style';
import { ActionButton } from '@/components/buttons/ActionButton';

export const About = () => (
  <Box sx={aboutStyle}>
    <ActionButton text="У меня получилось! -">Open</ActionButton>
  </Box>
);
