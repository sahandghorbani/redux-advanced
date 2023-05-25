// store.js

import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('your_api_endpoint');
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const { actions: dataActions, reducer: dataReducer } = dataSlice;
export default store;
