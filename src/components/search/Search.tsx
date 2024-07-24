import React, { memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Search, SearchIconWrapper, StyledInputBase } from '../header/style';
import { useSearchActions } from '../store/actions/searchAction';

export const SearchComponent = memo(() => {
  const { setDeleteSearchTextAction, setSearchTextAction, searchText } =
    useSearchActions();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchText}
        onChange={(e) => setSearchTextAction(e.target.value)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        aria-label="close"
        onClick={setDeleteSearchTextAction}
        sx={{
          width: '20px',
          height: '20px',
          margin: '10px',
          right: 4,
          top: -3,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </Search>
  );
});
