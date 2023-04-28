import styles from "./Paginate.module.scss";
import CustomArrow from "../CustomArrow";
import cn from "classnames";
import {
  incrementPage,
  decrementPage,
  handleChangePage,
} from "../../utils/paginate";

export const Paginate = ({ currentPage, setCurrentPage }) => {
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
        onClick={() => decrementPage(currentPage, setCurrentPage)}
      >
        <CustomArrow />
      </button>
      {currentPage === 1 ? (
        <>
          <button className={cn(styles.box, styles.active)}>
            {currentPage}
          </button>
          <button
            onClick={() => handleChangePage(currentPage + 1, setCurrentPage)}
            className={styles.box}
          >
            {currentPage + 1}
          </button>
          <button
            onClick={() => handleChangePage(currentPage + 2, setCurrentPage)}
            className={styles.box}
          >
            {currentPage + 2}
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => handleChangePage(currentPage - 1, setCurrentPage)}
            className={styles.box}
          >
            {currentPage - 1}
          </button>
          <button className={cn(styles.box, styles.active)}>
            {currentPage}
          </button>
          <button
            onClick={() => handleChangePage(currentPage + 1, setCurrentPage)}
            className={styles.box}
          >
            {currentPage + 1}
          </button>
        </>
      )}
      <button
        className={styles.box}
        onClick={() => incrementPage(setCurrentPage)}
      >
        <CustomArrow />
      </button>
    </div>
  );
};
