import axios from "../axios";
import { getToken } from "./getToken";

export const getAllVacancies = async () => {
  try {
    if (!window.localStorage.getItem("access_token")) {
      getToken();
    }
    const { data } = await axios.get("vacancies/");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
