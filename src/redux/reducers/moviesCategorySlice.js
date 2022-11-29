import { createSlice } from "@reduxjs/toolkit";

const moviesCategorySlice = createSlice({
  name: "moviesCategory",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesCategoryStart(state) {
      state.isFetch = true;
    },
    getMoviesCategorySuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesCategoryError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesCategoryStart, getMoviesCategorySuccess, getMoviesCategoryError } = moviesCategorySlice.actions;

export default moviesCategorySlice.reducer;
