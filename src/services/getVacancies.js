import axios from "../axios";
import { getToken } from "./getToken";

export const getVacancies = async (
  keyWord,
  salaryFrom,
  salaryTo,
  catalogue,
  isFiltered,
  isSearched,
  page = 0
) => {
  if (!window.localStorage.getItem("access_token")) {
    getToken();
  }
  let url = `vacancies/?published=1&page=${page}&count=4`;
  if (isFiltered || isSearched) {
    if (salaryFrom || salaryTo) {
      url += "&no_agreement=1";
    }
    if (String(salaryFrom).trim() != "") {
      url += `&payment_from=${salaryFrom}`;
    }
    if (salaryTo.trim() !== "") {
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
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
