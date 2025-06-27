import { userStore } from '@/store/UserStore';
import axios from 'axios';

export const HOST = '';
export const BACKEND_URL = `${HOST}`;

export const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

axiosClient.interceptors.request.use(function (config) {
  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`;
  }

  return config;
});
