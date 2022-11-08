import axios from 'axios';

import { HOS_API } from '../constants';

// import { authService } from '../services/auth-service';
const authService = { refreshAccessToken: () => "new re token" };

// import { getAccessToken } from './auth-helper';
const getAccessToken = () => "token";

const axiosApiInstance = axios.create({
  baseURL: HOS_API,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const hasOverrideAuthorization = !!config.headers.Authorization;
    if (!hasOverrideAuthorization) {
      const accessToken = getAccessToken();
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    }
    // config.headers.Accept = "application/vnd.imedneo.api.v1+json";
    config.headers.Accept = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest?.url !== "/api/auth/login"
    ) {
      originalRequest._retry = true;
      const accessToken = await authService.refreshAccessToken();
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);
export default axiosApiInstance;
