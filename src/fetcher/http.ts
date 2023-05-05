import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosRequestConfig
} from 'axios';
import { NavigateFunction } from 'react-router-dom';
import StorageUtils from '~/utils/storage';

const http = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = StorageUtils.get('access-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

const responseBody = <T>(res: AxiosResponse<T>): T => res.data;

class HttpService {
  get<T>(url: string, config?: AxiosRequestConfig) {
    return http.get<T>(url, config).then(responseBody);
  }
  post<T>(url: string, body: object, config?: AxiosRequestConfig) {
    return http.post<T>(url, body, config).then(responseBody);
  }

  put<T>(url: string, body: object, config?: AxiosRequestConfig) {
    return http.put<T>(url, body, config).then(responseBody);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return http.delete<T>(url, config).then(responseBody);
  }
}

export default new HttpService();
