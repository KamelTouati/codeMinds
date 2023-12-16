import axios from "axios";
import CookieService from "../services/CookieService";
import { TOKEN_KEY } from "../data";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

// add interceptor for auth
axiosInstance.interceptors.request.use(
  (config) => {
    const token = CookieService.get(TOKEN_KEY);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
