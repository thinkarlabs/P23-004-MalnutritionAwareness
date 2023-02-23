import Axios, {AxiosRequestConfig} from 'axios';
import {Service} from 'axios-middleware';
import { TOAST_MESSAGE } from '../constants/constants';
import { REQUEST_TIMEOUT } from './APIConstants';

const service = new Service(Axios);

service.register({
  onRequest(config) {
    console.log(config, 'config');
    // TODO: set request headers here
    return config;
  },
  onRequestError(error) {
    console.log(error, 'error');
    throw error.response;
  },
  onResponse(response) {
    console.log(response, 'response');
    return response;
  },
  onResponseError(error) {
    console.log(error, 'error response');
    const errorRes = error.response;
    throw handleErrorResponse(errorRes);
  },
});

export const postCall = async (
    url: string,
    data: Object,
    config: AxiosRequestConfig,
    ignoreTimeOut?: false,
  ) => {
    return await Axios.post(
      url,
      data,
      await getRequestConfig(config, ignoreTimeOut),
    );
};

  const getRequestConfig = async (
    config: AxiosRequestConfig,
    ignoreTimeout?: false,
  ) => {
    const jwtToken = false;
    let requestConfig = null;

    if (ignoreTimeout) {
      requestConfig = {...config};
    } else {
      requestConfig = {...config, timeout: REQUEST_TIMEOUT};
    }

    if (jwtToken) {
      requestConfig = {
        ...requestConfig,
        headers: {
          ...requestConfig.headers,
          Authorization: 'Bearer ' + jwtToken,
        },
      };
    } else {
      requestConfig = {
        ...requestConfig,
        headers: {
          ...requestConfig.headers,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      };
    }

    console.log(requestConfig, 'requestConfig');
    return requestConfig;
  };

  const handleErrorResponse = (response) => {
    let errorMessage = '';
      switch (response?.status) {
        case 401:
            errorMessage = TOAST_MESSAGE.UNAUTHORIZED;
        break;
        case 404:
          errorMessage = TOAST_MESSAGE.UNEXPECTED;
        break;
        default:
          errorMessage = TOAST_MESSAGE.UNKNOWN_ERROR;
          break;
      }
      return errorMessage;
    };
