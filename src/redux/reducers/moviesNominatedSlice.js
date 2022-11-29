import { createSlice } from "@reduxjs/toolkit";

const moviesNominatedSlice = createSlice({
  name: "moviesNominated",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesNominatedStart(state) {
      state.isFetch = true;
    },
    getMoviesNominatedSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesNominatedError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesNominatedStart, getMoviesNominatedSuccess, getMoviesNominatedError } =
  moviesNominatedSlice.actions;

export default moviesNominatedSlice.reducer;
