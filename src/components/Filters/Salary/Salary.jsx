import styles from "../Filters.module.scss";
import Arrow from "../../../assets/small-arrow.svg";

export const Salary = () => {
  return (
    <div className={styles.gap}>
      <h4 className={styles.subtitle}>Оклад</h4>
      <div className={styles.border}>
        <input
          data-elem="salary-from-input"
          className={styles["filters-input"]}
          placeholder="От"
        />
        <img src={Arrow} className={styles["arrow-up"]} alt="arrow" />
        <img src={Arrow} className={styles["arrow-down"]} alt="arrow" />
      </div>
      <div className={styles.border}>
        <input
          data-elem="salary-to-input"
          className={styles["filters-input"]}
          placeholder="До"
        />
        <img src={Arrow} className={styles["arrow-up"]} alt="arrow" />
        <img src={Arrow} className={styles["arrow-down"]} alt="arrow" />
      </div>
    </div>
  );
};
