import styles from "./Filters.module.scss";
import Cross from "../../assets/Cross.svg";
import { Industry } from "./Industry/Industry";
import { Salary } from "./Salary/Salary";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.body}>
        <h3 className={styles.title}>Фильтры</h3>
        <div className={styles.reset}>
          <span className={styles["reset-text"]}>Сбросить всё</span>
          <img className={styles.cross} src={Cross} alt="cross" />
        </div>
        <Industry />
        <Salary />
        <button data-elem="search-button" className={styles.button}>
          Применить
        </button>
      </div>
    </div>
  );
};
