import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/selectors";
// import { selectTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Активні: {active}</p>
      <p className={css.text}>Завершені: {completed}</p>
    </div>
  );
};
