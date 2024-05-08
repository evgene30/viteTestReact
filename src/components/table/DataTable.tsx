import React, { memo, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useLoaderData } from 'react-router-dom';
import { noResultStyles } from '@/components/table/styles';
import { PaginationComponent } from '@/components/pagination/Pagination';
import { LoadUsersType } from '@/routes/loaders/loaders';
import { columnsConfig } from './tableConfig';

export const DataTable = memo((): JSX.Element => {
  const { users } = useLoaderData() as LoadUsersType;
  const [page, setPage] = useState(1);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page,
  });

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
        loading={!users}
        rows={users}
        autoHeight
        columns={columnsConfig}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
      />
    </Box>
  );
});
