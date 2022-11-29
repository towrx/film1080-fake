import { getMovieCurrentError, getMovieCurrentStart, getMovieCurrentSuccess } from "~/redux/reducers/movieCurrentSlice";
import { getMoviesAnimeError, getMoviesAnimeStart, getMoviesAnimeSuccess } from "~/redux/reducers/moviesAnimeSlice";
import {
  getMoviesCategoryError,
  getMoviesCategoryStart,
  getMoviesCategorySuccess,
} from "~/redux/reducers/moviesCategorySlice";
import { getMoviesChartError, getMoviesChartStart, getMoviesChartSuccess } from "~/redux/reducers/moviesChartSlice";
import { getMoviesCinemaError, getMoviesCinemaStart, getMoviesCinemaSuccess } from "~/redux/reducers/moviesCinemaSlice";
import {
  getMoviesNominatedStart,
  getMoviesNominatedSuccess,
  getMoviesNominatedError,
} from "~/redux/reducers/moviesNominatedSlice";
import { getMoviesOddError, getMoviesOddStart, getMoviesOddSuccess } from "~/redux/reducers/moviesOddSlice";
import {
  getMoviesRecommendError,
  getMoviesRecommendStart,
  getMoviesRecommendSuccess,
} from "~/redux/reducers/moviesRecommendSlice";
import { getMoviesSeriError, getMoviesSeriStart, getMoviesSeriSuccess } from "~/redux/reducers/moviesSeriSlice";
import { getMoviesNewError, getMoviesNewStart, getMoviesNewSuccess } from "~/redux/reducers/moviesSlice";
import {
  getMoviesUpComingError,
  getMoviesUpComingStart,
  getMoviesUpComingSuccess,
} from "~/redux/reducers/moviesUpComingSlice";
import { getSearchError, getSearchStart, getSearchSuccess } from "~/redux/reducers/searchSlice";

export const getMoviesNominated = (dispatch) => {
  dispatch(getMoviesNominatedStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesNominatedSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesNominatedError(error));
    });
};

export const getMoviesNew = (dispatch) => {
  dispatch(getMoviesNewStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=2";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesNewSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesNewError(error));
    });
};

export const getMoviesAnime = (dispatch) => {
  dispatch(getMoviesAnimeStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=3";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesAnimeSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesAnimeError(error));
    });
};

export const getMoviesCinema = (dispatch) => {
  dispatch(getMoviesCinemaStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=4";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesCinemaSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesCinemaError(error));
    });
};

export const getMoviesSeri = (dispatch) => {
  dispatch(getMoviesSeriStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=5";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesSeriSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesSeriError(error));
    });
};

export const getMoviesOdd = (dispatch) => {
  dispatch(getMoviesOddStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=6";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesOddSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesOddError(error));
    });
};

export const getMoviesChart = (dispatch) => {
  dispatch(getMoviesChartStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=7";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesChartSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesChartError(error));
    });
};

export const getMoviesUpComing = (dispatch) => {
  dispatch(getMoviesUpComingStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=8";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesUpComingSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesUpComingError(error));
    });
};

export const getMoviesRecommend = (dispatch) => {
  dispatch(getMoviesRecommendStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=9";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesRecommendSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesRecommendError(error));
    });
};

export const getMovieCurrent = (dispatch, slug) => {
  dispatch(getMovieCurrentStart());
  const apiURL = "https://ophim1.com/phim/" + slug;
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMovieCurrentSuccess(payload));
    })
    .catch((error) => {
      dispatch(getMovieCurrentError(error));
    });
};

export const getMoviesCategory = (dispatch, page) => {
  dispatch(getMoviesCategoryStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=" + page;
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getMoviesCategorySuccess(payload));
    })
    .catch((error) => {
      dispatch(getMoviesCategoryError(error));
    });
};

export const getSearch = (dispatch, inputSearch) => {
  dispatch(getSearchStart());
  const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  fetch(apiURL)
    .then((response) => response.json())
    .then((payload) => {
      dispatch(getSearchSuccess(payload));
    })
    .catch((error) => {
      dispatch(getSearchError(error));
    });
};
