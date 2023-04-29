import { useNavigate } from "react-router-dom";
import { Card } from "../Card/Card";

export const VacanciesItem = ({ vacancy }) => {
  const navigate = useNavigate();
  return (
    <li>
      <Card navigate={navigate} {...vacancy} />
    </li>
  );
};
