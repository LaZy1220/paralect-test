import axios from "../axios";

const apiLogin = "sergei.stralenia@gmail.com";
const apiPassword = "paralect123";
const apiClientId = "2356";
const apiClientSecret =
  "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";
const apiHr = "0";

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
