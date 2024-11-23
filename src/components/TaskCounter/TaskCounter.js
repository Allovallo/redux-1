import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const tasks = useSelector(selectTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Активні: {count.active}</p>
      <p className={css.text}>Завершені: {count.completed}</p>
    </div>
  );
};
