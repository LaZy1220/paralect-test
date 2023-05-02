import { Container } from "../../components/Container/Container";
import { NothingHere } from "../../components/NothingHere/NothingHere";
import styles from "./Favorites.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { getFavorites } from "../../utils/favorites";
import { Card } from "../../components/Card/Card";
import { Pagination } from "@mantine/core";
import { useState } from "react";

export const Favorites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const parseFavoriteVacancies = getFavorites();
  const navigate = useNavigate();

  const lastVacancyIndex = currentPage * 4;
  const firstVacancyIndex = lastVacancyIndex - 4;
  const maxPage = Math.ceil(parseFavoriteVacancies.length / 4);
  const currentVacancies = parseFavoriteVacancies.slice(
    firstVacancyIndex,
    lastVacancyIndex
  );
  return (
    <main>
      {parseFavoriteVacancies.length === 0 || !parseFavoriteVacancies ? (
        <div
          className={cn(styles.favorites, {
            [styles.nothing]:
              parseFavoriteVacancies.length === 0 || !parseFavoriteVacancies,
          })}
        >
          <NothingHere />
        </div>
      ) : (
        <Container>
          <ul className={styles.list}>
            {currentVacancies.map((favoriteVacancy) => {
              return (
                <li
                  className={styles["list-item"]}
                  key={favoriteVacancy.id}
                  data-elem={`vacancy-${favoriteVacancy.id}`}
                >
                  <Card
                    vacancy={favoriteVacancy}
                    navigate={navigate}
                    checkIsFavorite={true}
                  />
                </li>
              );
            })}
          </ul>
          {parseFavoriteVacancies.length > 4 && (
            <div className={styles.center}>
              <Pagination
                value={currentPage}
                onChange={setCurrentPage}
                total={maxPage}
              />
            </div>
          )}
        </Container>
      )}
    </main>
  );
};
