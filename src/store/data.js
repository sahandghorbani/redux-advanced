// store.js
// go to App componet
import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());

    try {
      const response = await axios.get("your_api_endpoint");
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
