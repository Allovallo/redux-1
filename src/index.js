import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
