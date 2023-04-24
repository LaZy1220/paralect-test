import { Container } from "../components/Container/Container";
import { Filters } from "../components/Filters/Filters";

export const Home = () => {
  return (
    <main className="home">
      <Container>
        <Filters />
        <div>Поиск</div>
        <div>Вакансии</div>
      </Container>
    </main>
  );
};
