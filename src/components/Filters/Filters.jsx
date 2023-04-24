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
          <img src={Cross} alt="cross" />
        </div>
        <Industry />
        <Salary />
        <button className={styles.button}>Применить</button>
      </div>
    </div>
  );
};
