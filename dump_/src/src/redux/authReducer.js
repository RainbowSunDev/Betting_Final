import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../services/users.service";
import { showToast, closeToast } from "./toastReducer";
import {
  openLoadingSpinner,
  closeLoadingSpinner,
} from "./loadingSpinnerReducer";
import {
  ARRYA_ERROR_MSG,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  RES_STATUS_SUCCESS,
} from "../config/constants";
import { checkResponse } from "../utils";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: false,
    userToken: null,
    registering: false,
    rememberPwd: false,
    userinfo: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.userToken = action.payload.token;
      state.userinfo = !state.rememberPwd ? {} : action.payload.userinfo;
    },
    loginFailure: (state) => {
      state.loggedIn = false;
    },
    logout: (state) => {
      localStorage.removeItem("persist:auth");
      state.userToken = null;
      state.loggedIn = false;
    },
    setRemeberPwd: (state) => {
      state.rememberPwd = !state.rememberPwd;
    },
    setUserInfo: (state, action) => {
      state.userinfo = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setRemeberPwd } =
  authSlice.actions;

export const LoginUser = (user) => async (dispatch) => {
  dispatch(openLoadingSpinner());

  const response = await userService.login(user);
  const res = await checkResponse(response);

  if (res.status === RES_STATUS_SUCCESS) {
    dispatch(
      loginSuccess({
        token: res.data.token,
        userinfo: { username: res.data.username, password: res.data.password },
      })
    );
    dispatch(closeLoadingSpinner());
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
    dispatch(closeLoadingSpinner());
  }
};

export const registerUser = (user) => async (dispatch) => {
  dispatch(openLoadingSpinner());

  const response = await userService.registerUser(user);
  const res = await checkResponse(response);

  if (res.status == RES_STATUS_SUCCESS) {
    dispatch(showToast({ message: REGISTER_SUCCESS }));
    dispatch(closeLoadingSpinner());
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
    dispatch(closeLoadingSpinner());
  }
};

export default authSlice.reducer;
