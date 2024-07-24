import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './slice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    testState: testSlice.reducer,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
