import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: null,
    isFetch: false,
    isError: false,
  },
  reducers: {
    getSearchStart(state) {
      state.isFetch = true;
    },
    getSearchSuccess(state, action) {
      state.isFetch = false;
      state.data = action.payload;
      state.isError = false;
    },
    getSearchError(state, action) {
      state.isFetch = false;
      state.isError = true;
      console.log(action.payload);
    },
    removeSearchData(state) {
      state.data = null;
    },
  },
});

export const { getSearchStart, getSearchSuccess, getSearchError, removeSearchData } = searchSlice.actions;

export default searchSlice.reducer;
