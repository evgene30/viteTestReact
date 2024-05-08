import React, { memo, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { useLoaderData } from 'react-router-dom';

import { noResultStyles } from '@/components/table/styles';
import { LoadUsersType } from '@/routes/loaders/getLoadUsers';
import { columnsConfig } from './tableConfig';

export const DataTable = memo((): JSX.Element => {
  const { users } = useLoaderData() as LoadUsersType;

  const apiRef = useGridApiRef();

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 1,
  });

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        slots={{
          loadingOverlay: LinearProgress,
          noRowsOverlay: () => <Box sx={noResultStyles}>No result</Box>,
        }}
        rowCount={users.length}
        loading={!users}
        rows={users}
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        columns={columnsConfig}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        apiRef={apiRef}
      />
    </Box>
  );
});
