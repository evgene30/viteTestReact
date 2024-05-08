import React, { FC } from 'react';
import { Stack, Pagination } from '@mui/material';
import { paginationStyles } from './styles';

type TPaginationComponent = {
  count: number;
  page: number;
  setPage: (item: number) => void;
};

export const PaginationComponent: FC<TPaginationComponent> = ({
  page,
  setPage,
  count,
}) => {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} sx={paginationStyles}>
      <Pagination
        data-testid="pagination-component"
        count={count}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};
