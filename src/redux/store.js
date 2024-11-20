import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

import { tasksReducer, filtersReducer } from "./tasksSlice";

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// const enchancer = devToolsEnhancer();
export const store = configureStore(
  {
    reducer: {
      tasks: tasksReducer,
      // filters: filtersReducer
    },
  }
  //   enchancer
);
