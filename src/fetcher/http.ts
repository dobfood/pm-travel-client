import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';
import StorageUtils from '~/utils/storage';

const http = axios.create({
  // baseURL: process.env.REACT_PUBLIC_API_URL
});

http.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = StorageUtils.get('access-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const resData = <T>(data: T) => data;

class HTTPService {
  get<T>(url: string, config?: AxiosRequestConfig) {
    return http.get<T>(url, config).then(resData);
  }
  post<T>(url: string, body: unknown = {}, config?: AxiosRequestConfig) {
    return http.post<T>(url, body, config).then(resData);
  }
  put<T>(url: string, body: unknown = {}, config?: AxiosRequestConfig) {
    return http.put<T>(url, body, config).then(resData);
  }
  delete<T>(url: string, config?: AxiosRequestConfig) {
    return http.delete<T>(url, config).then(resData);
  }
}

export default new HTTPService();
