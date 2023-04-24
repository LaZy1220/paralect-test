import styles from "./Filters.module.scss";
import Cross from "../../assets/Cross.svg";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.body}>
        <h3>Фильтры</h3>
        <div className={styles.reset}>
          <span className={styles["reset-text"]}>Сбросить всё</span>
          <img src={Cross} alt="cross" />
        </div>
      </div>
    </div>
  );
};
