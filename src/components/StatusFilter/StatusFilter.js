import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  return (
    <div className={css.wrapper}>
      <Button>Усі</Button>
      <Button>Активні</Button>
      <Button>Завершені</Button>
    </div>
  );
};
