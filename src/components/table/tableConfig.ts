import { GridColDef } from '@mui/x-data-grid';

export const columnsConfig: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80, sortable: true, align: 'left' },
  {
    field: 'name',
    headerName: 'User name',
    flex: 1,
    align: 'left',
    sortable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    align: 'left',
    sortable: true,
  },
  {
    field: 'phone',
    headerName: 'User phone',
    flex: 1,
    align: 'left',
    sortable: true,
  },
  {
    field: 'website',
    headerName: 'User website',
    sortable: true,
    flex: 1,
    align: 'left',
  },
];
