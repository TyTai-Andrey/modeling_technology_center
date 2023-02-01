import axios from 'axios';

export default class BaseApi {
  static getClient() {
    return axios.create({
      baseURL: '',
      headers: {},
    });
  }
}
