import { createSlice } from "@reduxjs/toolkit";
import { roomService } from "../services/rooms.service";
import { ARRYA_ERROR_MSG, RES_STATUS_SUCCESS } from "../config/constants";
import { checkResponse } from "../utils";
import { showToast } from "./toastReducer";
import {
  closeLoadingSpinner,
  openLoadingSpinner,
} from "./loadingSpinnerReducer";

export const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    historyRooms: [],
    entered: false,
  },
  reducers: {
    saveHistoryRooms: (state, action) => {
      state.historyRooms = action.payload.rooms;
    },
    enterRoomSuccess: (state) => {
      state.entered = true;
    },
    outRoom: (state) => {
      state.entered = false;
    },
  },
});

export const { saveHistoryRooms, enterRoomSuccess, outRoom } =
  roomSlice.actions;

export const loadRooms = (state) => state.roomsState.historyRooms;

export const checkRoom = (roomData) => async (dispatch) => {
  dispatch(openLoadingSpinner());
  const resposne = await roomService.checkRoom(roomData);
  const res = await checkResponse(resposne);

  if (res.status === RES_STATUS_SUCCESS) {
    dispatch(enterRoomSuccess());
    dispatch(closeLoadingSpinner());
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
    dispatch(closeLoadingSpinner());
  }
};

export const getRoomList = () => async (dispatch) => {
  const resposne = await roomService.getRoomList();
  const res = await checkResponse(resposne);

  if (res.status === RES_STATUS_SUCCESS) {
    const rooms = res.data.rooms;
    dispatch(saveHistoryRooms({ rooms }));
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
  }
};

export default roomSlice.reducer;
