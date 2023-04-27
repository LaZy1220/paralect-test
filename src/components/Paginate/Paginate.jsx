import styles from "./Paginate.module.scss";
import CustomArrow from "../CustomArrow";
import cn from "classnames";

export const Paginate = ({ currentPage }) => {
  let pravePage = currentPage - 1;
  let nextPage = currentPage + 1;
  return (
    <div className={styles.paginate}>
      <button
        className={cn(
          {
            [styles.disabled]: currentPage === 1,
          },
          styles.box,
          styles["left-arrow"]
        )}
      >
        <CustomArrow />
      </button>
      {currentPage === 1 ? (
        <>
          <button className={cn(styles.box, styles.active)}>
            {currentPage}
          </button>
          <button className={styles.box}>{currentPage + 1}</button>
          <button className={styles.box}>{currentPage + 2}</button>
        </>
      ) : (
        <>
          <button className={styles.box}>{pravePage}</button>
          <button className={cn(styles.box, styles.active)}>
            {currentPage}
          </button>
          <button className={styles.box}>{nextPage}</button>
        </>
      )}
      <div className={styles.box}>
        <CustomArrow />
      </div>
    </div>
  );
};
