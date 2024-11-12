import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>Усі</Button>
      <Button selected={filter === statusFilters.active}>Активні</Button>
      <Button selected={filter === statusFilters.completed}>Завершені</Button>
    </div>
  );
};
