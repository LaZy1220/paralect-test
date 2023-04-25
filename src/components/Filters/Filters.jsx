import styles from "./Filters.module.scss";
import Cross from "../../assets/Cross.svg";
import { Industry } from "./Industry/Industry";
import { Salary } from "./Salary/Salary";
import { resetFilters } from "../../utils/filters/resetFilters";

export const Filters = ({
  setIndustry,
  industry,
  setSalaryFrom,
  salaryFrom,
  setSalaryTo,
  salaryTo,
}) => {
  return (
    <div className={styles.filters}>
      <div className={styles.body}>
        <h3 className={styles.title}>Фильтры</h3>
        <div
          className={styles.reset}
          onClick={() => resetFilters(setIndustry, setSalaryFrom, setSalaryTo)}
        >
          <span className={styles["reset-text"]}>Сбросить всё</span>
          <img className={styles.cross} src={Cross} alt="cross" />
        </div>
        <Industry setIndustry={setIndustry} industry={industry} />
        <Salary
          setSalaryFrom={setSalaryFrom}
          salaryFrom={salaryFrom}
          setSalaryTo={setSalaryTo}
          salaryTo={salaryTo}
        />
        <button data-elem="search-button" className={styles.button}>
          Применить
        </button>
      </div>
    </div>
  );
};
