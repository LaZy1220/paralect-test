import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiUrl = import.meta.env.VITE_APP_API_URL;

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "x-secret-key": apiKey,
  },
});

export default instance;
