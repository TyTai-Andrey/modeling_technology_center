import { RootState } from '@store/index';

export const getMonthDataReducer = (store: RootState) => store.monthData;

export const getMonthDataLoading = (store: RootState) =>
  getMonthDataReducer(store).loading;
export const getMonthDataError = (store: RootState) =>
  getMonthDataReducer(store).error;

export const getMonthDataData = (store: RootState) =>
  getMonthDataReducer(store).data;

export const getMonthDataResult = (store: RootState) =>
  getMonthDataData(store)?.result;
export const getMonthDataTotal = (store: RootState) =>
  getMonthDataData(store)?.total;
