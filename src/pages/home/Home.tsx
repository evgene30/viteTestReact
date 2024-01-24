import React from 'react';
import { Box } from '@mui/material';
import { paginationStyles } from '@/pages/home/style';
import { DataTable } from '@/components/table/DataTable';
import { DialogSelect } from '@/components/dialog/Dialog';

export const Home = () => (
  <Box sx={paginationStyles as never}>
    <DialogSelect />
    <DataTable />
  </Box>
);
