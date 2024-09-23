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
import { useValidateContextForm } from '@/hooks/useValidateContextForm';

export const DataTable = memo((): JSX.Element => {
  const { addFormObject } = useValidateContextForm();
  const { openModal, closeModal, isOpen } = useModal();
  const { searchText, setDeleteSearchTextAction } = useSearchActions();
  const { users } = useLoaderData() as LoadUsersType;

  useEffect(() => {
    if (searchText && users?.length) {
      console.log('Search Text:', searchText);
      console.log('Users:', users);

      let filteredUsers;
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(Number(searchText))) {
        filteredUsers = users.filter((user) => user.id === Number(searchText));
      } else {
        filteredUsers = users.filter((user) =>
          user.name.toLowerCase().includes(searchText.toLowerCase()),
        );
      }

      console.log('Filtered Users:', filteredUsers);

      // Проверяем наличие совпадений перед вызовом модального окна
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
      // addFormObject({ id: 'search', data: filteredUsers });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

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
