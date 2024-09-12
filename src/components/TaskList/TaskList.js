import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      // eslint-disable-next-line no-undef
      return tasks.filter((task = !task.completed));
    case statusFilters.completed:
      // eslint-disable-next-line no-undef
      return tasks.filter((task = task.completed));
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector((state) => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
