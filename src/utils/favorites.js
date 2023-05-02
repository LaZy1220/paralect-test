export const addFavorite = (vacancy) => {
  const favoriteVacancies = window.localStorage.getItem("favorite-vacancies");
  const emptyArray = [];
  if (favoriteVacancies) {
    const parseFavoriteVacancies = JSON.parse(favoriteVacancies);
    parseFavoriteVacancies.push(vacancy);
    localStorage.setItem("favorite-vacancies", parseFavoriteVacancies);
  } else {
    emptyArray.push(vacancy);
    const newFavoriteVacancies = JSON.stringify(emptyArray);
    localStorage.setItem("favorite-vacancies", newFavoriteVacancies);
  }
};
export const removeFavorite = (id) => {};
export const checkIsFavorite = (vacancy) => {};
export const checkIsFavorites = (vacancies) => {};
