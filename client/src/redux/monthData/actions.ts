// Core
import { createAction } from '@reduxjs/toolkit';
import { BaseParams, RespResult } from '@typings/index';
import { MonthDataItemModel } from './interfaces';

// Types
import { monthDataTypes } from './types';

export const monthDataActions = {
  // Sync
  fetchMonthDataRequest: createAction(monthDataTypes.FETCH_MONTHDATA_REQUEST),

  fetchMonthDataSuccess: createAction(
    monthDataTypes.FETCH_MONTHDATA_SUCCESS,
    (data: RespResult<MonthDataItemModel>) => ({ payload: data }),
  ),

  fetchMonthDataFailure: createAction(monthDataTypes.FETCH_MONTHDATA_FAILURE),

  // Async
  fetchMonthDataAsync: createAction(
    monthDataTypes.FETCH_MONTHDATA_ASYNC,
    (filter?: BaseParams) => ({ payload: filter }),
  ),
};
