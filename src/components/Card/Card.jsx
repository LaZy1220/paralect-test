import { checkPayment } from "../../utils/checkPayment";
import Location from "../../assets/location.svg";
import CustomStar from "../CustomStar";
import cn from "classnames";
import styles from "./Card.module.scss";
import { useEffect, useState } from "react";
import { addFavorite } from "../../utils/favorites";

export const Card = ({ vacancy, navigate = false }) => {
  const {
    id,
    profession,
    town,
    type_of_work,
    payment_to,
    payment_from,
    currency,
  } = vacancy;
  const [isFavorite, setIsFavorite] = useState(false);
  const payment = checkPayment(payment_from, payment_to);
  const favoriteVacancies = window.localStorage.getItem("favorite-vacancies");
  return (
    <>
      <div className={styles.card} data-elem={`vacancy-${id}`}>
        <div className={styles["card-body"]}>
          <div className={styles.description}>
            {navigate ? (
              <span
                onClick={() => navigate(`/details/${id}`)}
                className={styles.profession}
              >
                {profession}
              </span>
            ) : (
              <span className={styles["detail-profession"]}>{profession}</span>
            )}

            <div className={styles.flex}>
              <span
                className={cn(styles.payment, {
                  [styles["detail-payment"]]: !navigate,
                })}
              >
                з/п{" "}
                {payment_from === 0 || payment_to === 0
                  ? payment
                  : `${payment_from} - ${payment_to} ${currency}`}
              </span>
              <span
                className={cn(styles.text, {
                  [styles["detail-text"]]: !navigate,
                })}
              >
                {type_of_work.title}
              </span>
            </div>
            <div className={styles.location}>
              <img src={Location} alt="location" />
              <span className={styles.town}>{town.title}</span>
            </div>
          </div>
          {isFavorite ? (
            <div className={styles.favorite}>
              <CustomStar data-elem={`vacancy-${id}-shortlist-button`} />
            </div>
          ) : (
            <div
              onClick={() => addFavorite(vacancy)}
              className={cn(styles.star, {
                [styles["hover-star"]]: !isFavorite,
                [styles.favorite]: isFavorite,
              })}
            >
              <CustomStar data-elem={`vacancy-${id}-shortlist-button`} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
