import { GridColDef } from '@mui/x-data-grid';

export const columnsConfig: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'User name',
    editable: true,
    width: 290,
  },
  {
    field: 'email',
    headerName: 'Email',
    editable: true,
    width: 190,
  },
  {
    field: 'phone',
    headerName: 'User phone',
    type: 'number',
    editable: true,
    width: 290,
  },
  {
    field: 'website',
    headerName: 'User website',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 190,
  },
];
