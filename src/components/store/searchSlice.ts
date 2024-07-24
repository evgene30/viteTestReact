import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchText: string;
}

const initialState: SearchState = {
  searchText: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setDeleteSearchText: () => initialState,
  },
});

export const { setDeleteSearchText, setSearchText } = searchSlice.actions;

export default searchSlice.reducer;
