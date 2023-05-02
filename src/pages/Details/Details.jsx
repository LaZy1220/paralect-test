import { useEffect, useState } from "react";
import styles from "./Details.module.scss";
import { Container } from "../../components/Container/Container";
import { LoaderSpinner } from "../../components/LoaderSpinner/LoaderSpinner";
import { getDetails } from "../../services/getDetails";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";

export const Details = () => {
  const [vacancy, setVacancy] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then((data) => {
      setVacancy(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <Container>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <div className={styles.details}>
            <Card vacancy={vacancy} />
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
