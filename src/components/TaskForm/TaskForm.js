import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
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
