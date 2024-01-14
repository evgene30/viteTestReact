import { type Selector, createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TCounterState, TUnicKey } from './types';

const selectState = (state: RootState) => state.testState;
export const getSettings = ({ keyPrimary, addKey }: TUnicKey): Selector =>
  createSelector(selectState, (testState: TCounterState) => {
    if (testState[keyPrimary]) {
      if (addKey && testState[keyPrimary].pagination[addKey]) {
        return testState[keyPrimary].pagination[addKey];
      }

      return testState[keyPrimary].pagination.init;
    }

    return testState.defaultSettings.pagination.init;
  });
