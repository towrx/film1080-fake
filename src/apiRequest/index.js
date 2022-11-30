import { toast } from "react-toastify";
import {
  changePasswordError,
  changePasswordStart,
  changePasswordSuccess,
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess,
  updateInfoUserError,
  updateInfoUserStart,
  updateInfoUserSuccess,
} from "~/redux/reducers/authSlice";
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

export const getLogin = (dispatch, payload) => {
  dispatch(loginStart());
  // const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  // fetch(apiURL)

  new Promise((resolve, reject) => {
    setTimeout(() => {
      const { username, password } = payload;
      // console.log(payload, username, password);
      payload.pathAvatar =
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
      payload.email = "admin@gmail.com";
      payload.gender = "made";
      payload.nickname = "Admin...";
      payload.dataMovies = {
        listMovieLike: [],
        listMovieFollow: [],
        listMovieWatched: [],
      };
      if (username === "admin" && password === "123") resolve(payload);
      else reject("Tài khoản hoặc mật khẩu không chính xác!");
    }, 2000);
  })
    .then((payload) => {
      console.log("success", payload);
      dispatch(loginSuccess(payload));
      toast.success("Đăng nhập thành công!");
    })
    .catch((error) => {
      console.log(error);
      dispatch(loginError(error));
    });
};

export const getRegister = (dispatch, payload) => {
  dispatch(registerStart());
  // const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  // fetch(apiURL)
  new Promise((resolve) => {
    setTimeout(() => {
      payload.pathAvatar =
        "https://images.unsplash.com/photo-1609372332255-611485350f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
      payload.dataMovies = {
        listMovieLike: [],
        listMovieFollow: [],
        listMovieWatched: [],
      };
      resolve(payload);
    }, 2000);
  })
    .then((payload) => {
      console.log("success", payload);
      dispatch(registerSuccess(payload));
      toast.success("Đăng ký thành công!");
    })
    .catch((error) => {
      console.log(error);
      dispatch(registerError(error));
    });
};

export const getUpdateInfoUser = (dispatch, payload) => {
  dispatch(updateInfoUserStart());
  // const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  // fetch(apiURL)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 2000);
  })
    .then((payload) => {
      console.log("success", payload);
      dispatch(updateInfoUserSuccess(payload));
      toast.success("Cập nhập thông tin thành công!");
    })
    .catch((error) => {
      console.log(error);
      dispatch(updateInfoUserError(error));
    });
};

export const getChangePassword = (dispatch, payload) => {
  dispatch(changePasswordStart());
  // const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  // fetch(apiURL)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 2000);
  })
    .then((payload) => {
      console.log("success", payload);
      dispatch(changePasswordSuccess(payload));
      toast.success("Cập nhập mật khẩu thành công!");
    })
    .catch((error) => {
      console.log(error);
      dispatch(changePasswordError(error));
    });
};
