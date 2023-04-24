import { Container } from "../components/Container/Container";
import { Filters } from "../components/Filters/Filters";

export const Home = () => {
  return (
    <main className="home">
      <Container>
        <div className="gap">
          <Filters />
          <div>Поиск</div>
          <div>Вакансии</div>
        </div>
      </Container>
    </main>
  );
};
