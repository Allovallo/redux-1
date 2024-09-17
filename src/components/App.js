import { Layout } from "./Layout/Layout";
import { TaskList } from "./TaskList/TaskList";
import { TaskForm } from "./TaskForm/TaskForm";
import { AppBar } from "./AppBar/AppBar";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
