import css from "./TaskForm.module.css";
import { Button } from "../Button/Button";

export const TaskForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Додайте текст завдання..."
      ></input>
      <Button type="submit">Додати завдання</Button>
    </form>
  );
};
