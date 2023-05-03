import axios from "axios";

const apiKey = "GEU4nvd3rej*jeh.eqp";
const apiUrl = "https://startup-summer-2023-proxy.onrender.com/2.0/";
const apiClientSecret =
  "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";
const accessToken = window.localStorage.getItem("access_token");
const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "x-secret-key": apiKey,
    "X-Api-App-Id": apiClientSecret,
  },
});

instance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default instance;
