import axios from "../axios";
import { getToken } from "./getToken";

export const getAllVacancies = async (page) => {
  try {
    if (!window.localStorage.getItem("access_token")) {
      getToken();
    }
    const { data } = await axios.get(`vacancies/?page=${page}&count=5`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
