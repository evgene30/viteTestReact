import React from 'react';
import { Box } from '@mui/material';
import { SelectLabels } from '@/components/select';
import { paginationStyles } from '@/pages/home/style';
import { DataTable } from '@/components/table/DataTable';

export const Home = () => (
  <Box sx={paginationStyles}>
    <SelectLabels />
    <DataTable />
  </Box>
);
