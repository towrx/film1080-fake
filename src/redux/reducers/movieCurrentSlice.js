import { createSlice } from "@reduxjs/toolkit";

const movieCurrentSlice = createSlice({
  name: "movieCurrent",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMovieCurrentStart(state) {
      state.isFetch = true;
    },
    getMovieCurrentSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMovieCurrentError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMovieCurrentStart, getMovieCurrentSuccess, getMovieCurrentError } = movieCurrentSlice.actions;

export default movieCurrentSlice.reducer;
