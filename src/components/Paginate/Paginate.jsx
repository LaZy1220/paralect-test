import styles from "./Paginate.module.scss";
import CustomArrow from "../CustomArrow";
import cn from "classnames";

export const Paginate = () => {
  return (
    <div className={styles.paginate}>
      <div className={cn(styles.box, styles["left-arrow"])}>
        <CustomArrow />
      </div>
      <div className={styles.box}>1</div>
      <div className={styles.box}>2</div>
      <div className={styles.box}>3</div>
      <div className={styles.box}>
        <CustomArrow />
      </div>
    </div>
  );
};
