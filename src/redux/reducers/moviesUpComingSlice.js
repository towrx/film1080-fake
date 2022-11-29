import { createSlice } from "@reduxjs/toolkit";

const moviesUpComingSlice = createSlice({
  name: "moviesUpComing",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getMoviesUpComingStart(state) {
      state.isFetch = true;
    },
    getMoviesUpComingSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getMoviesUpComingError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
  },
});

export const { getMoviesUpComingStart, getMoviesUpComingSuccess, getMoviesUpComingError } = moviesUpComingSlice.actions;

export default moviesUpComingSlice.reducer;
