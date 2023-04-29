import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";
import { NothingHere } from "../NothingHere/NothingHere";
import { VacanciesItem } from "./VacanciesItem/VacanciesItem";
import styles from "./VacanciesList.module.scss";
import { Pagination } from "@mantine/core";

export const VacanciesList = ({
  isLoading,
  vacancies,
  currentPage,
  setCurrentPage,
}) => {
  let maxPage;
  if (Math.ceil(vacancies.total / 4) > 125) {
    maxPage = 125;
  } else {
    maxPage = Math.ceil(vacancies.total / 4);
  }
  return (
    <>
      {isLoading ? (
        <LoaderSpinner />
      ) : vacancies.objects.length === 0 ? (
        <NothingHere isHomePage />
      ) : (
        <>
          <ul className={styles.list}>
            {vacancies.objects.map((vacancy) => {
              return <VacanciesItem key={vacancy.id} vacancy={vacancy} />;
            })}
          </ul>
          {vacancies.objects.length > 0 && (
            <div className={styles.center}>
              <Pagination
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
