import axios from "../axios";
import { getToken } from "./getToken";

export const getVacancies = async (
  keyWord = "",
  salaryFrom = "",
  salaryTo = "",
  catalogue = "",
  isFiltered = false,
  isSearched = false,
  page = 0
) => {
  debugger;
  let url = `vacancies/?published=1&page=${page}&count=4`;
  if (isFiltered || isSearched) {
    if (salaryFrom && salaryTo != 0) {
      url += "&no_agreement=1";
    }
    if (String(salaryFrom).trim() != "") {
      if (parseInt(salaryFrom) < 0) {
        return { objects: [] };
      }
      url += `&payment_from=${salaryFrom}`;
    }
    if (String(salaryTo).trim() !== "") {
      if (parseInt(salaryTo) < 0) {
        return { objects: [] };
      }
      url += `&payment_to=${salaryTo}`;
    }
    if (String(catalogue).trim() !== "") {
      url += `&catalogues=${catalogue}`;
    }
    if (keyWord.trim() !== "") {
      url += `&keyword=${keyWord}`;
    }
  }
  try {
    if (!window.localStorage.getItem("access_token")) {
      await getToken();
    }
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
