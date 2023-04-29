import axios from "../axios";

export const getDetails = async (id) => {
  try {
    const { data } = await axios.get(`vacancies/${id}/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
