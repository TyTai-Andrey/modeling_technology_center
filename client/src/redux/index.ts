// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { all, call } from 'redux-saga/effects';
import { History } from 'history';

// Reducers
import { monthDataReducer } from './monthData/reducer';

// Watchers
import { watchMonthData } from './monthData/watchers';

export const rootReducer = (history: History) =>
  combineReducers({
    form: formReducer,
    monthData: monthDataReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([call(watchMonthData)]);
}
