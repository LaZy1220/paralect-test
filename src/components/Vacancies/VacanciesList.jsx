import { VacanciesItem } from "./VacanciesItem/VacanciesItem";
import styles from "./VacanciesList.module.scss";
import { Pagination } from "@mantine/core";

export const VacanciesList = ({
  isLoading,
  vacancies,
  currentPage,
  setCurrentPage,
}) => {
  const isFavorite = true;
  let maxPage;
  if (Math.ceil(vacancies.total / 4) > 126) {
    maxPage = 126;
  } else {
    maxPage = Math.ceil(vacancies.total / 4);
  }
  console.log(maxPage);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : vacancies.objects.length === 0 ? (
        <div>ПУсто</div>
      ) : (
        <>
          <ul className={styles.list}>
            {vacancies.objects.map((vacancy) => {
              if (vacancy.id === 45706493) {
                return (
                  <VacanciesItem isFavorite key={vacancy.id} {...vacancy} />
                );
              }
              return <VacanciesItem key={vacancy.id} {...vacancy} />;
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
