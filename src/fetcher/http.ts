import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError
} from 'axios';
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

http.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default http;
