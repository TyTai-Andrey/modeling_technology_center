export type RespResult<T> = {
  result: T[];
  total: number;
};

export type BaseParams = {
  skip?: number;
  take?: number;
};
