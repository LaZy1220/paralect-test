export const getVacanciesWithFilters = async (
  keyWord,
  paymentFrom,
  paymentTo,
  category
) => {
  try {
    let url = `vacancies/?page=${0}&count=4`;
    if (keyWord.trim() !== "") {
      url += `&keyword=${keyWord}`;
    }
    if (paymentFrom.trim() !== "") {
      url += `&payment_from=${payment_from}`;
    }
    if (paymentTo.trim() !== "") {
      url += `&payment_to=${payment_to}`;
    }
    if (category.trim() !== "") {
      url += `&catalogues=${category}`;
    }
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
