const favoriteVacancies = window.localStorage.getItem("favorite-vacancies");

export const addFavorite = (vacancy, setFavorite) => {
  const parseFavoriteVacancies = favoriteVacancies
    ? JSON.parse(favoriteVacancies)
    : [];
  parseFavoriteVacancies.push(vacancy);
  const newFavoriteVacancies = JSON.stringify(parseFavoriteVacancies);
  localStorage.setItem("favorite-vacancies", newFavoriteVacancies);
  setFavorite(true);
};

export const removeFavorite = (id) => {};
export const checkIsFavorite = (vacancy) => {};
export const checkIsFavorites = (vacancies) => {};
