import React from 'react';
import { Box } from '@mui/material';
import { aboutStyle } from './style';
import { SortableTable } from '@/components/sortableTable/SortTable';

export const About = () => (
  <Box sx={aboutStyle}>
    <SortableTable />
  </Box>
);
