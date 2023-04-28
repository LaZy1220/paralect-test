import axios from "../axios";

export const getCatalogues = async () => {
  try {
    const { data } = await axios.get("catalogues/");
    const res = data.map((category) => ({
      value: category.key,
      label: category.title,
    }));
    return res;
  } catch (error) {
    console.log(error);
  }
};
