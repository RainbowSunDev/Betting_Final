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
import { saveHistoryRooms } from "./roomReducer";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: false,
    userToken: null,
    registering: false,
    rememberPwd: false,
    userInfo: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.userToken = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    savePoint:(state, action) => {
      state.userInfo.point = action.payload.point;
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
    setuserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setRemeberPwd, savePoint } =
  authSlice.actions;

export const LoginUser = (user) => async (dispatch) => {
  dispatch(openLoadingSpinner());

  const response = await userService.login(user);
  const res = await checkResponse(response);

  if (res.status === RES_STATUS_SUCCESS) {
    dispatch(
      loginSuccess({
        token: res.data.token,
        userInfo: {
          username: res.data.username,
          avatar: res.data.avatar,
          password: user.password,
          nickname: res.data.nickname,
          point: res.data.point,
          _id: res.data.id,
        },
      })
    );
    dispatch(saveHistoryRooms({ rooms: res.data.room_history }));
    dispatch(closeLoadingSpinner());
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
    dispatch(closeLoadingSpinner());
  }
};

export const signUpUser = (user) => async (dispatch) => {
  dispatch(openLoadingSpinner());

  const response = await userService.signUpUser(user);
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
