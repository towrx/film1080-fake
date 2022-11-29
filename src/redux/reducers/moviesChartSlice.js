import { createSlice } from "@reduxjs/toolkit";

const moviesChartSlice = createSlice({
  name: "moviesChart",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesChartStart(state) {
      state.isFetch = true;
    },
    getMoviesChartSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesChartError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesChartStart, getMoviesChartSuccess, getMoviesChartError } = moviesChartSlice.actions;

export default moviesChartSlice.reducer;
