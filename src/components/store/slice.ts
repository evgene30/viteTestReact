import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TActionType, TCounterState } from './types';

const initialState: TCounterState = {
  defaultSettings: {
    pagination: {
      init: {
        offset: 0,
      },
    },
    sorting: [20, 30],
  },
  testSettings: {
    pagination: {
      init: {
        offset: 10,
      },
    },
    sorting: [10, 20],
  },
};

export const testSlice = createSlice({
  name: 'testState',
  initialState,
  reducers: {
    addSettings: (state: TCounterState, action: PayloadAction<TActionType>) => {
      const { keyPrimary, addKey, settings } = action.payload;
      if (state[keyPrimary] && addKey && state[keyPrimary].pagination[addKey]) {
        state[keyPrimary].pagination[addKey].offset =
          settings.pagination[addKey].offset;
      } else {
        state[keyPrimary] = settings;
      }
    },
  },
});

export const { addSettings } = testSlice.actions;
export default testSlice.reducer;
