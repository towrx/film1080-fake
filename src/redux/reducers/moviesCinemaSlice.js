import { createSlice } from "@reduxjs/toolkit";

const moviesCinemaSlice = createSlice({
  name: "moviesCinema",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesCinemaStart(state) {
      state.isFetch = true;
    },
    getMoviesCinemaSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesCinemaError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesCinemaStart, getMoviesCinemaSuccess, getMoviesCinemaError } = moviesCinemaSlice.actions;

export default moviesCinemaSlice.reducer;
