import { createSlice } from "@reduxjs/toolkit";

const moviesRecommendSlice = createSlice({
  name: "moviesRecommend",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesRecommendStart(state) {
      state.isFetch = true;
    },
    getMoviesRecommendSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesRecommendError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesRecommendStart, getMoviesRecommendSuccess, getMoviesRecommendError } =
  moviesRecommendSlice.actions;

export default moviesRecommendSlice.reducer;
