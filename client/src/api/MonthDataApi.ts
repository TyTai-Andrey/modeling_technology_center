import { AxiosRequestConfig } from 'axios';
import { serverError } from '@utils/notifications';

// Utils
import BaseApi from '@api/BaseApi';
import { BaseParams, RespResult } from '@typings/index';
import { MonthDataItemModel } from '@redux/monthData/interfaces';

export default class MonthDataApi {
  static getMonthDataList(
    params?: BaseParams,
  ): Promise<RespResult<MonthDataItemModel>> {
    const client = BaseApi.getClient();

    const options: AxiosRequestConfig = {
      url: '/api/monthData/',
      method: 'GET',
      params,
    };

    return client(options)
      .then((response) => response.data)
      .catch((error: Error) => {
        serverError(error.message);
      });
  }
}
