import { createSlice } from "@reduxjs/toolkit";

const moviesSeriSlice = createSlice({
  name: "moviesSeri",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesSeriStart(state) {
      state.isFetch = true;
    },
    getMoviesSeriSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesSeriError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesSeriStart, getMoviesSeriSuccess, getMoviesSeriError } = moviesSeriSlice.actions;

export default moviesSeriSlice.reducer;
