import { layer } from "@fortawesome/fontawesome-svg-core";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isLoginPending: false,
      isLoginError: false,
      message: "",
    },
    register: {
      isRegisterPending: false,
      isRegisterError: false,
      message: "",
    },
    updateInfoUser: {
      isUpdateInfoUserPending: false,
      isUpdateInfoUserError: false,
      message: "",
    },
    changePassword: {
      isChangePasswordPending: false,
      isChangePasswordError: false,
      message: "",
    },

    user: null,
  },
  reducers: {
    addMovieToListLike(state, action) {
      const isHave = state.user.dataMovies.listMovieLike.every((element) => {
        return element.movie.slug !== action.payload.movie.slug;
      });
      isHave && state.user.dataMovies.listMovieLike.push(action.payload);
    },
    addMovieToListFollow(state, action) {
      const isHave = state.user.dataMovies.listMovieFollow.every((element) => {
        return element.movie.slug !== action.payload.movie.slug;
      });
      isHave && state.user.dataMovies.listMovieFollow.push(action.payload);
    },
    addMovieToListWatched(state, action) {
      const isHave = state.user.dataMovies.listMovieWatched.every((element) => {
        return element.movie.slug !== action.payload.movie.slug;
      });

      isHave && state.user.dataMovies.listMovieWatched.push(action.payload);
    },
    deleteMovieToListLike(state, action) {
      state.user.dataMovies.listMovieLike.splice(action.payload, 1);
    },
    deleteMovieToListFollow(state, action) {
      state.user.dataMovies.listMovieFollow.splice(action.payload, 1);
    },
    deleteMovieToListWatched(state, action) {
      state.user.dataMovies.listMovieWatched.splice(action.payload, 1);
    },
    loginStart(state) {
      state.login.isLoginPending = true;
      state.login.isLoginError = false;
    },
    loginSuccess(state, action) {
      state.login.isLoginPending = false;
      state.user = action.payload;
      state.login.isLoginError = false;
    },
    loginError(state, action) {
      state.login.isLoginPending = false;
      state.login.isLoginError = true;
      state.login.message = action.payload;
    },

    logoutUser(state) {
      state.user = null;
    },

    registerStart(state) {
      state.register.isRegisterPending = true;
      state.register.isRegisterError = false;
    },
    registerSuccess(state, action) {
      state.register.isRegisterPending = false;
      state.user = action.payload;
      state.register.isRegisterError = false;
    },
    registerError(state, action) {
      state.register.isRegisterPending = false;
      state.register.isRegisterError = true;
      state.register.message = action.payload;
    },

    updateInfoUserStart(state) {
      state.register.isUpdateInfoUserPending = true;
      state.register.isUpdateInfoUserError = false;
    },
    updateInfoUserSuccess(state, action) {
      state.register.isUpdateInfoUserPending = false;
      state.user.nickname = action.payload.nickname;
      state.user.gender = action.payload.gender;
      state.register.isUpdateInfoUserError = false;
    },
    updateInfoUserError(state, action) {
      state.register.isUpdateInfoUserPending = false;
      state.register.isUpdateInfoUserError = true;
      state.register.message = action.payload;
    },
    changePasswordStart(state) {
      state.register.isChangePasswordPending = true;
      state.register.isChangePasswordError = false;
    },
    changePasswordSuccess(state) {
      state.register.isChangePasswordPending = false;
      state.register.isChangePasswordError = false;
    },
    changePasswordError(state, action) {
      state.register.isChangePasswordPending = false;
      state.register.isChangePasswordError = true;
      state.register.message = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  logoutUser,
  registerStart,
  registerSuccess,
  registerError,
  updateInfoUserStart,
  updateInfoUserSuccess,
  updateInfoUserError,
  changePasswordStart,
  changePasswordSuccess,
  changePasswordError,
  addMovieToListLike,
  addMovieToListFollow,
  addMovieToListWatched,
  deleteMovieToListFollow,
  deleteMovieToListLike,
  deleteMovieToListWatched,
} = authSlice.actions;

export default authSlice.reducer;
