import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../constants/constants";
const AxiosService = () => {
  //create instance
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN) || "";

    if (accessToken) {
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    }

    return config;
  });

  instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        originalRequest._retry = true;
        return instance(originalRequest);
      } else {
        return Promise.reject(error.data);
      }
    }
  );

  return instance;
};

export default AxiosService;
