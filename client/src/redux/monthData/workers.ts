// Core
import { put, call } from 'redux-saga/effects';

// Actions
import { monthDataActions } from './actions';

// Api
import MonthDataApi from '@api/MonthDataApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { BaseParams, RespResult } from '@typings/index';
import { MonthDataItemModel } from './interfaces';

export function* fetchMonthData(action: PayloadAction<BaseParams | undefined>) {
  yield put(monthDataActions.fetchMonthDataRequest());

  const filter = action.payload;

  const response: RespResult<MonthDataItemModel> = yield call(
    MonthDataApi.getMonthDataList,
    filter,
  );
  if (response) {
    yield put(monthDataActions.fetchMonthDataSuccess(response));
  } else {
    yield put(monthDataActions.fetchMonthDataFailure());
  }
}
