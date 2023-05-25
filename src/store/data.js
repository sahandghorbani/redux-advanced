// store.js

import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    sendPostRequestStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendPostRequestSuccess: (state) => {
      state.loading = false;
    },
    sendPostRequestFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  sendPostRequestStart,
  sendPostRequestSuccess,
  sendPostRequestFailure,
} = apiSlice.actions;

export const sendPostRequest = (requestData) => {
  return async (dispatch) => {
    dispatch(sendPostRequestStart());

    try {
      await axios.post('your_api_endpoint', requestData);
      dispatch(sendPostRequestSuccess());
      console.log('Request sent successfully');
    } catch (error) {
      dispatch(sendPostRequestFailure(error.message));
      console.error('Request failed:', error);
    }
  };
};

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
});

export default store;
