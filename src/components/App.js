// import { TaskForm } from "./TaskForm/TaskForm";
// import { AppBar } from "./AppBar/AppBar";
// import { Layout } from "./Layout/Layout";
// import { TaskList } from "./TaskList/TaskList";

// export const App = () => {
//   return (
//     <Layout>
//       <AppBar />
//       <TaskForm />
//       <TaskList />
//     </Layout>
//   );
// };

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/selectors";
import { fetchTasks } from "../redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <p>{items?.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};
