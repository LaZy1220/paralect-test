import styles from "./VacanciesItem.module.scss";
import Location from "../../../assets/location.svg";
import CustomStar from "../../CustomStar";
import cn from "classnames";

export const VacanciesItem = ({
  id,
  profession,
  town,
  type_of_work,
  payment_to,
  payment_from,
  currency,
  isFavorite = false,
}) => {
  return (
    <li className={styles.card} data-elem={`vacancy-${id}`}>
      <div className={styles["card-body"]}>
        <div className={styles.description}>
          <span className={styles.profession}>{profession}</span>
          <div className={styles.flex}>
            <span className={styles.payment}>
              з/п {payment_to} - {payment_from} {currency}
            </span>
            <span className={styles.text}>{type_of_work.title}</span>
          </div>
          <div className={styles.location}>
            <img src={Location} alt="location" />
            <span className={styles.text}>{town.title}</span>
          </div>
        </div>
        <div
          className={cn(styles.star, {
            [styles["hover-star"]]: !isFavorite,
            [styles.favorite]: isFavorite,
            [styles["hover-favorite-star"]]: isFavorite,
          })}
        >
          <CustomStar />
        </div>
      </div>
    </li>
  );
};
