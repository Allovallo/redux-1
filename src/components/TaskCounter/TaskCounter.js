import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  return (
    <div>
      <p className={css.text}>Активні: 0</p>
      <p className={css.text}>Завершені: 0</p>
    </div>
  );
};
