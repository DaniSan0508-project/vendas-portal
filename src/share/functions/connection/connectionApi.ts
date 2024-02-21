import axios from 'axios';
import { MethodsEnum } from '../../enums/methods.enum';
import {
  ERROR_ACCESS_DANIED,
  ERROR_CONNECTION,
} from '../../constants/errorStatus';

export default class ConnectionApi {
  static async call<T>(url: string, method: string, body?: any): Promise<T> {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        default:
        return (await axios.patch<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: any): Promise<T | undefined> {
    try {
      return await ConnectionApi.call<T>(url, method, body);
    } catch (error: any) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      } else {
        return undefined;
      }
    }
  }
}

export const ConnectionApiGet = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodsEnum.GET) || undefined;
};

export const ConnectionApiPost = async <T>(url: string, body: any): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodsEnum.POST, body);
};

export const ConnectionApiDelete = async (url: string) => {
  return ConnectionApi.connect(url, MethodsEnum.DELETE);
};

export const ConnectionApiPut = async <T>(url: string, body: any): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodsEnum.PUT, body);
};

export const ConnectionApiPatch = async <T>(url: string, body: any): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodsEnum.PATCH, body);
};
