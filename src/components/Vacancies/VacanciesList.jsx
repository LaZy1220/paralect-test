import { VacanciesItem } from "./VacanciesItem/VacanciesItem";

export const VacanciesList = () => {
  const town = {
    title: "minsk",
  };
  const data = [
    {
      profession: "Менеджер-дизайнер",
      firm_name: "",
      town: "Минск",
      catalogues: "",
      type_of_work: "",
      payment_to: "",
      payment_from: "70000",
      currency: "rub",
    },
    {
      profession: "Front",
      firm_name: "",
      town: "Минск",
      catalogues: "",
      type_of_work: "",
      payment_to: "",
      payment_from: "",
      currency: "",
    },
  ];
  return (
    <ul>
      {data.map((vacancy) => (
        <VacanciesItem key={vacancy.profession} {...data} />
      ))}
    </ul>
  );
};
