import axios, { AxiosRequestConfig } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

export const AXIOS_CONFIGS = {
  headers: {
    Accept: 'application/json',
    Pragma: 'no-cache',
  },
  timeout: 10000,
};

export const api = (axiosConfig?: AxiosRequestConfig<any>) => {
  const instance = axios.create(axiosConfig);

  instance.interceptors.request.use(async config => {
    const convertedConfig = { ...config };

    if (config.data) {
      convertedConfig.data = decamelizeKeys(convertedConfig.data);
    }

    if (config.params) {
      convertedConfig.params = decamelizeKeys(convertedConfig.params);
    }

    return convertedConfig;
  });

  instance.interceptors.response.use(async response => {
    if (response.data && response.headers['content-type'] === 'application/json') {
      return { ...response, data: camelizeKeys(response.data) };
    }

    return response;
  });

  return instance;
};
