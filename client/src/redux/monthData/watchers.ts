// Core
import { all, call, takeLatest } from 'redux-saga/effects';

// Types
import { monthDataTypes } from './types';

// Workers
import {
  fetchMonthData,
} from './workers';

function* watchFetchMonthData() {
  yield takeLatest(
    monthDataTypes.FETCH_MONTHDATA_ASYNC,
    fetchMonthData,
  );
}

export function* watchMonthData() {
  yield all([
    call(watchFetchMonthData),
  ]);
}
