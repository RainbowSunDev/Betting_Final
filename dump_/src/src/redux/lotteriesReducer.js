import { createSlice } from "@reduxjs/toolkit";
import { lotteriesService } from "../services/lotteries.service";
import { ARRYA_ERROR_MSG, RES_STATUS_SUCCESS } from "../config/constants";
import { checkResponse } from "../utils";

export const lottriesSlice = createSlice({
  name: "lottries",
  initialState: {
    lotteries: [],
  },
  reducers: {
    saveLotteries: (state, action) => {
      state.lotteries = [...state.lotteries, action.payload.lottery];
    },
    clearLotteries: (state) => {
      state.lotteries = [];
    },
  },
});

export const { saveLotteries, clearLotteries } = lottriesSlice.actions;

export const loadLotteries = (state) => state.lotteriesState.lotteries;

export const getLotteriesInfo = (url) => async (dispatch) => {
  const resposne = await lotteriesService.getLotteriesInfo(url);
  const res = await resposne.json();

  if (!res.errorCode) {
    dispatch(saveLotteries({ lottery: res }));
  } else {
    dispatch(showToast({ message: ARRYA_ERROR_MSG[0] }));
  }
  // if (res.status === RES_STATUS_SUCCESS) {
  //    dispatch(saveLotteries())
  // } else {
  //   dispatch(showToast({ message: ARRYA_ERROR_MSG[res.msg] }));
  //   dispatch(closeLoadingSpinner());
  // }
};

export default lottriesSlice.reducer;
