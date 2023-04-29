import styles from "./Filters.module.scss";
import Cross from "../../assets/Cross.svg";
import { Industry } from "./Industry/Industry";
import { Salary } from "./Salary/Salary";
import { resetFilters } from "../../utils/filters";
import { getVacancies } from "../../services/getVacancies";
import { checkIsEmpty } from "../../utils/checkIsEmpty";

export const Filters = ({
  setIndustry,
  industry,
  setSalaryFrom,
  salaryFrom,
  setSalaryTo,
  salaryTo,
  search,
  setVacancies,
  setIsLoading,
  setCurrentPage,
  setIsFiltered,
  isSearched,
}) => {
  const isEmpty = checkIsEmpty(industry, salaryFrom, salaryTo);

  return (
    <div className={styles.filters}>
      <div className={styles.body}>
        <h3 className={styles.title}>Фильтры</h3>
        <button
          className={styles.reset}
          disabled={isEmpty}
          onClick={() => {
            setIsFiltered(false);
            resetFilters(setIndustry, setSalaryFrom, setSalaryTo);
            setIsLoading(true);
            setCurrentPage(1);
            getVacancies(search, "", "", "", false, isSearched).then((data) => {
              setVacancies(data);
              setIsLoading(false);
            });
          }}
        >
          <span className={styles["reset-text"]}>Сбросить всё</span>
          <img className={styles.cross} src={Cross} alt="cross" />
        </button>
        <Industry setIndustry={setIndustry} industry={industry} />
        <Salary
          setSalaryFrom={setSalaryFrom}
          salaryFrom={salaryFrom}
          setSalaryTo={setSalaryTo}
          salaryTo={salaryTo}
        />
        <button
          onClick={() => {
            setIsLoading(true);
            setIsFiltered(true);
            setCurrentPage(1);
            getVacancies(
              search,
              salaryFrom,
              salaryTo,
              industry,
              true,
              isSearched
            ).then((data) => {
              setVacancies(data);
              setIsLoading(false);
            });
          }}
          data-elem="search-button"
          className={styles.button}
          disabled={isEmpty}
        >
          Применить
        </button>
      </div>
    </div>
  );
};
