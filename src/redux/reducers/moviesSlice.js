import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesNewStart(state) {
      state.isFetch = true;
    },
    getMoviesNewSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesNewError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesNewStart, getMoviesNewSuccess, getMoviesNewError } = moviesSlice.actions;

export default moviesSlice.reducer;
