import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/operations";

import { TaskForm } from "./TaskForm/TaskForm";
import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
