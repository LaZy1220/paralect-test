import { useEffect, useState } from "react";
import styles from "./Details.module.scss";
import { Container } from "../../components/Container/Container";
import { LoaderSpinner } from "../../components/LoaderSpinner/LoaderSpinner";
import { getDetails } from "../../services/getDetails";
import { useParams } from "react-router-dom";

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
    <main className={styles.details}>
      <Container>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <>
            <div>Шапка</div>
            <div>все остальное</div>
          </>
        )}
      </Container>
    </main>
  );
};
