import axios from "../axios";

const apiLogin = import.meta.env.VITE_APP_API_LOGIN;
const apiPassword = import.meta.env.VITE_APP_API_PASSWORD;
const apiClientId = import.meta.env.VITE_APP_API_CLIENT_ID;
const apiClientSecret = import.meta.env.VITE_APP_API_CLIENT_SECRET;
const apiHr = import.meta.env.VITE_APP_API_HR;

export const getToken = async () => {
  try {
    const { data } = await axios.post("oauth2/password", {
      login: apiLogin,
      password: apiPassword,
      client_id: apiClientId,
      client_secret: apiClientSecret,
      hr: apiHr,
    });
    if (data.access_token) {
      window.localStorage.setItem("access_token", data.access_token);
      window.localStorage.setItem("refresh_token", data.refresh_token);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
