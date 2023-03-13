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
    currentRoom: {},
  },
  reducers: {
    saveHistoryRooms: (state, action) => {
      state.historyRooms = action.payload.rooms;
    },
    enterRoomSuccess: (state, action) => {
      state.entered = true;
      state.currentRoom = action.payload.currentRoom;
    },
    outRoom: (state) => {
      state.entered = false;
    },
  },
});

export const { saveHistoryRooms, enterRoomSuccess, outRoom } =
  roomSlice.actions;


export const checkRoom = (roomData) => async (dispatch) => {
  dispatch(openLoadingSpinner());
  const response = await roomService.checkRoom(roomData);
  const res = await checkResponse(response);

  if (res.status === RES_STATUS_SUCCESS) {
    dispatch(enterRoomSuccess({ currentRoom: res.data.currentRoom }));
    dispatch(closeLoadingSpinner());
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
    dispatch(closeLoadingSpinner());
  }
};

export default roomSlice.reducer;
