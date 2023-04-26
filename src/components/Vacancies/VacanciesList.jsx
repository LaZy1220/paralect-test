import { VacanciesItem } from "./VacanciesItem/VacanciesItem";
import styles from "./VacanciesList.module.scss";

export const VacanciesList = ({ vacancies }) => {
  const isFavorite = true;
  return (
    <ul className={styles.list}>
      {vacancies.map((vacancy) => {
        if (vacancy.id === 45706493) {
          return <VacanciesItem isFavorite key={vacancy.id} {...vacancy} />;
        }
        return <VacanciesItem key={vacancy.id} {...vacancy} />;
      })}
    </ul>
  );
};
