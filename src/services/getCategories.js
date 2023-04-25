import axios from "../axios";

export const getCategories = async () => {
  try {
    const { data } = await axios.get("catalogues/");
    const res = data.map((category) => category.title);
    return res;
  } catch (error) {
    console.log(error);
  }
};
