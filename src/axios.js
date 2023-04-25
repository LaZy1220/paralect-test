import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;
const apiClientSecret = import.meta.env.VITE_APP_API_CLIENT_SECRET;
const accessToken = window.localStorage.getItem("access_token");
const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "x-secret-key": apiKey,
    "X-Api-App-Id": apiClientSecret,
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default instance;
