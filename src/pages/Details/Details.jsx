import { useEffect, useState } from "react";
import styles from "./Details.module.scss";
import { Container } from "../../components/Container/Container";
import { LoaderSpinner } from "../../components/LoaderSpinner/LoaderSpinner";
import { getDetails } from "../../services/getDetails";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { checkIsFavorite, getFavorites } from "../../utils/favorites";

export const Details = () => {
  const [vacancy, setVacancy] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const parseFavoriteVacancies = getFavorites();

  const isFavorite = checkIsFavorite(vacancy.id, parseFavoriteVacancies);

  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then((data) => {
      setVacancy(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className={styles.details}>
      <Container>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <div className={styles.flex}>
            <Card vacancy={vacancy} checkIsFavorite={isFavorite} />
            <div className={styles["details-body"]}>
              <div
                dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
              />
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};
