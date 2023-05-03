import { checkIsFavorite, getFavorites } from "../../utils/favorites";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";
import { NothingHere } from "../NothingHere/NothingHere";
import { VacanciesItem } from "./VacanciesItem/VacanciesItem";
import styles from "./VacanciesList.module.scss";
import { Pagination } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export const VacanciesList = ({
  setSearch,
  setSalaryFrom,
  setSalaryTo,
  setIndustry,
  isLoading,
  setIsLoading,
  vacancies,
  currentPage,
  setCurrentPage,
  setVacancies,
}) => {
  let maxPage;

  const parseFavoriteVacancies = getFavorites();

  if (Math.ceil(vacancies.total / 4) > 125) {
    maxPage = 125;
  } else {
    maxPage = Math.ceil(vacancies.total / 4);
  }
  const largeScreen = useMediaQuery("(min-width: 440px)");
  return (
    <>
      {isLoading ? (
        <LoaderSpinner />
      ) : vacancies.objects.length === 0 ? (
        <NothingHere
          setSearch={setSearch}
          setSalaryFrom={setSalaryFrom}
          setSalaryTo={setSalaryTo}
          setIndustry={setIndustry}
          setVacancies={setVacancies}
          setIsLoading={setIsLoading}
          isHomePage
        />
      ) : (
        <>
          <ul className={styles.list}>
            {vacancies.objects.map((vacancy) => {
              const isFavorite = checkIsFavorite(
                vacancy.id,
                parseFavoriteVacancies
              );
              return (
                <VacanciesItem
                  key={vacancy.id}
                  vacancy={vacancy}
                  checkIsFavorite={isFavorite}
                />
              );
            })}
          </ul>
          {vacancies.objects.length > 0 && (
            <div className={styles.center}>
              <Pagination
                size={largeScreen ? "md" : "xs"}
                value={currentPage}
                onChange={setCurrentPage}
                total={maxPage}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
