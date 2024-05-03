import React, { useCallback, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridSortModel,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { noResultStyles } from '@/components/table/styles';
import { PaginationComponent } from '@/components/pagination/Pagination';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Canister', firstName: 'Cerise', age: 42 },
  { id: 3, lastName: 'Canister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Area', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Darkener', age: null },
  { id: 6, lastName: 'Melisande', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export function DataTable() {
  const [page, setPage] = useState(1);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 3,
    page,
  });
  const [rowCountState, setRowCountState] = useState(10);

  const [sortModels, setSortModel] = useState<GridSortModel>([
    {
      field: 'id',
      sort: 'asc',
    },
  ]);

  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    const columnName = sortModel[0]?.field || 'id';
    const column = columns.find((col) => col.field === columnName);
    const columnField = column?.field || 'id';

    setSortModel([
      {
        field: columnField,
        sort: sortModel[0]?.sort ?? 'asc',
      },
    ]);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        slots={{
          pagination: () => (
            <PaginationComponent page={page} setPage={setPage} />
          ),
          loadingOverlay: LinearProgress,
          noRowsOverlay: () => <Box sx={noResultStyles}>No result</Box>,
        }}
        loading={!rows}
        rows={rows}
        rowCount={rowCountState}
        autoHeight
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        sortModel={sortModels}
        onSortModelChange={handleSortModelChange}
        pageSizeOptions={[10, 15]}
        // paginationMode="server"
        // sortingMode="server"
        disableRowSelectionOnClick
      />
    </Box>
  );
}
