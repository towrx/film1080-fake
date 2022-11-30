import { configureStore } from "@reduxjs/toolkit";

import moviesSeriReducer from "./reducers/moviesSeriSlice";
import moviesNominatedReducer from "./reducers/moviesNominatedSlice";
import moviesAnimeReducer from "./reducers/moviesAnimeSlice";
import moviesChartReducer from "./reducers/moviesChartSlice";
import moviesCinemaReducer from "./reducers/moviesCinemaSlice";
import moviesNewReducer from "./reducers/moviesSlice";
import moviesOddReducer from "./reducers/moviesOddSlice";
import moviesRecommendReducer from "./reducers/moviesRecommendSlice";
import moviesUpcomingReducer from "./reducers/moviesUpComingSlice";
import movieCurrentReducer from "./reducers/movieCurrentSlice";
import moviesCategoryReducer from "./reducers/moviesCategorySlice";
import searchReducer from "./reducers/searchSlice";
import authReducer from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    moviesSeri: moviesSeriReducer,
    moviesNominated: moviesNominatedReducer,
    moviesAnime: moviesAnimeReducer,
    moviesChart: moviesChartReducer,
    moviesCinema: moviesCinemaReducer,
    moviesNew: moviesNewReducer,
    moviesOdd: moviesOddReducer,
    moviesRecommend: moviesRecommendReducer,
    moviesUpComing: moviesUpcomingReducer,
    movieCurrent: movieCurrentReducer,
    moviesCategory: moviesCategoryReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

export default store;
