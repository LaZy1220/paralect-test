import Arrow from "../../../assets/big-arrow.svg";
import styles from "../Filters.module.scss";

export const Industry = () => {
  return (
    <div className={styles.gap}>
      <h4 className={styles.subtitle}>Отрасль</h4>
      <div className={styles.border}>
        <input
          className={styles["filters-input"]}
          placeholder="Выберите отрасль"
        />
        <img className={styles.cross} src={Arrow} alt="arrow" />
      </div>
    </div>
  );
};
