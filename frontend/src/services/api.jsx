import axios from 'axios';
import { getCookie } from '../utils/Cookie';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, 
});


api.interceptors.request.use(
  (config) => {
    const token = getCookie('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }

    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;





