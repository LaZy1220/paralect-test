import axios from "../axios";
import { getToken } from "./getToken";

export const getAllVacancies = async () => {
  try {
    if (!window.localStorage.getItem("access_token")) {
      getToken();
    }
  } catch (error) {
    console.log(error);
  }
};
