export const addFavorite = (vacancy, setIsFavorite) => {
  const favoriteVacancies = window.localStorage.getItem("favorite-vacancies");
  const parseFavoriteVacancies = favoriteVacancies
    ? JSON.parse(favoriteVacancies)
    : [];
  parseFavoriteVacancies.push(vacancy);
  const newFavoriteVacancies = JSON.stringify(parseFavoriteVacancies);
  localStorage.setItem("favorite-vacancies", newFavoriteVacancies);
  setIsFavorite(true);
};

export const removeFavorite = (id, setIsFavorite) => {
  const favoriteVacancies = window.localStorage.getItem("favorite-vacancies");
  const parseFavoriteVacancies = JSON.parse(favoriteVacancies);
  const filtered = parseFavoriteVacancies.filter(
    (vacancy) => vacancy.id !== id
  );
  const newFavoriteVacancies = JSON.stringify(filtered);
  localStorage.setItem("favorite-vacancies", newFavoriteVacancies);
  setIsFavorite(false);
};
export const checkIsFavorite = (vacancy) => {};
export const checkIsFavorites = (vacancies) => {};
