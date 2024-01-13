import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './slice';

export const store = configureStore({
  reducer: {
    testState: testSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
