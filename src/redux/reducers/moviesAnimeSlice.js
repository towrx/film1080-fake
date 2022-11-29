import { createSlice } from "@reduxjs/toolkit";

const moviesAnimeSlice = createSlice({
  name: "moviesAnime",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesAnimeStart(state) {
      state.isFetch = true;
    },
    getMoviesAnimeSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesAnimeError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesAnimeStart, getMoviesAnimeSuccess, getMoviesAnimeError } = moviesAnimeSlice.actions;

export default moviesAnimeSlice.reducer;
