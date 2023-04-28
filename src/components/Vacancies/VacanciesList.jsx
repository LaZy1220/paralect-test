import { VacanciesItem } from "./VacanciesItem/VacanciesItem";
import { Paginate } from "../Paginate/Paginate";
import styles from "./VacanciesList.module.scss";

export const VacanciesList = ({
  isLoading,
  vacancies,
  currentPage,
  setCurrentPage,
}) => {
  const isFavorite = true;
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul className={styles.list}>
            {vacancies.map((vacancy) => {
              if (vacancy.id === 45706493) {
                return (
                  <VacanciesItem isFavorite key={vacancy.id} {...vacancy} />
                );
              }
              return <VacanciesItem key={vacancy.id} {...vacancy} />;
            })}
          </ul>
          {vacancies.length > 0 && (
            <div className={styles.center}>
              <Paginate
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
