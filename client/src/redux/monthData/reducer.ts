// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { monthDataActions } from './actions';

// Typings
import { MonthDataItemModel } from './interfaces';

interface InitialState {
  data: {
    total: number;
    result: MonthDataItemModel[];
  } | null;
  loading: boolean;
  error: boolean;
}
const initialState: InitialState = {
  data: null,
  loading: false,
  error: false,
};

export const monthDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(monthDataActions.fetchMonthDataRequest, (state) => {
    state.loading = true;
    state.error = false;
  });

  builder.addCase(monthDataActions.fetchMonthDataSuccess, (state, action) => {
    state.data = action.payload;
    state.loading = false;
    state.error = false;
  });

  builder.addCase(monthDataActions.fetchMonthDataFailure, (state, action) => {
    state.data = null;
    state.loading = false;
    state.error = true;
  });
});
