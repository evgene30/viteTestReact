import { Box } from '@mui/material';
import { paginationStyles } from '@/pages/home/style';
import { DataTable } from '@/components/table/DataTable';
import { DialogSelect } from '@/components/dialog/Dialog';
import { SplitPanels } from '@/components/splitPanels/SplitPanels';

export const Home = () => (
  <Box sx={paginationStyles}>
    <DialogSelect />
    <DataTable />
    <SplitPanels />
  </Box>
);
