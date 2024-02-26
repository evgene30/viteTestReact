import React from 'react';
import { Box } from '@mui/material';
import { aboutStyle } from './style';
import { ActionButton } from '@/components/buttons/ActionButton';

export const sortArr = [
  { id: 1, title: 'test1', label: 6 },
  { id: 2, title: 'test4', label: 7 },
  { id: 3, title: 'test4', label: 8 },
  { id: 3, title: 'test4', label: 9 },
  { id: 3, title: 'test4', label: 10 },
];

export const About = () => (
  <Box sx={aboutStyle}>
    <ActionButton data={sortArr}>Open</ActionButton>
  </Box>
);
