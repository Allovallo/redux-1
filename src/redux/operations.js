import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./tasksSlice";

axios.defaults.baseURL =
  "https://66cb337b4290b1c4f199bc03.mockapi.io/materials";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/materials/tasks");
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
