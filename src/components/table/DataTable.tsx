import { memo, useEffect, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { useLoaderData } from 'react-router-dom';

import { noResultStyles } from '@/components/table/styles';
import { LoadUsersType } from '@/routes/loaders/getLoadUsers';
import { columnsConfig } from './tableConfig';
import { useSearchActions } from '../store/actions/searchAction';
import { SelectLabels } from '../select';
import { useModal } from '../modal/ModalContext';

export const DataTable = memo((): JSX.Element => {
  const { openModal, closeModal, isOpen } = useModal();
  const { searchText, setDeleteSearchTextAction } = useSearchActions();
  const { users } = useLoaderData() as LoadUsersType;

  useEffect(() => {
    if (searchText && users?.length) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(Number(searchText))) {
        const filteredUsers = users.filter(
          (user) => user.id === Number(searchText),
        );
        if (filteredUsers?.length && searchText) {
          const component = (
            <SelectLabels
              closeModal={closeModal}
              data={filteredUsers}
              setDeleteSearchTextAction={setDeleteSearchTextAction}
            />
          );
          openModal({ component, title: 'Search result' });
        }
      } else {
        const filteredUsers = users.filter((user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase()),
        );
        if (filteredUsers?.length && searchText) {
          const component = (
            <SelectLabels
              closeModal={closeModal}
              data={filteredUsers}
              setDeleteSearchTextAction={setDeleteSearchTextAction}
            />
          );
          openModal({ component, title: 'Search result' });
        }
      }
    }
  }, [
    closeModal,
    openModal,
    searchText,
    setDeleteSearchTextAction,
    users,
    users?.length,
  ]);

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
