import { createSlice } from "@reduxjs/toolkit";

const moviesOddSlice = createSlice({
  name: "moviesOdd",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesOddStart(state) {
      state.isFetch = true;
    },
    getMoviesOddSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesOddError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesOddStart, getMoviesOddSuccess, getMoviesOddError } = moviesOddSlice.actions;

export default moviesOddSlice.reducer;
