import styles from "../Filters.module.scss";
import Arrow from "/assets/small-arrow.svg";
import { incrementSalary, decrementSalary } from "../../../utils/filters";

export const Salary = ({
  setSalaryFrom,
  salaryFrom,
  setSalaryTo,
  salaryTo,
}) => {
  return (
    <div className={styles.gap}>
      <h4 className={styles.subtitle}>Оклад</h4>
      <div className={styles.border}>
        <input
          data-elem="salary-from-input"
          type="number"
          value={salaryFrom}
          onChange={(event) => setSalaryFrom(event.target.value)}
          className={styles["filters-input"]}
          placeholder="От"
        />
        <img
          onClick={() => incrementSalary(setSalaryFrom)}
          src={Arrow}
          className={styles["arrow-up"]}
          alt="arrow"
        />
        <img
          onClick={() => decrementSalary(setSalaryFrom, salaryFrom)}
          src={Arrow}
          className={styles["arrow-down"]}
          alt="arrow"
        />
      </div>
      <div className={styles.border}>
        <input
          data-elem="salary-to-input"
          type="number"
          value={salaryTo}
          onChange={(event) => setSalaryTo(event.target.value)}
          className={styles["filters-input"]}
          placeholder="До"
        />
        <img
          onClick={() => incrementSalary(setSalaryTo)}
          src={Arrow}
          className={styles["arrow-up"]}
          alt="arrow"
        />
        <img
          onClick={() => decrementSalary(setSalaryTo, salaryTo)}
          src={Arrow}
          className={styles["arrow-down"]}
          alt="arrow"
        />
      </div>
    </div>
  );
};
