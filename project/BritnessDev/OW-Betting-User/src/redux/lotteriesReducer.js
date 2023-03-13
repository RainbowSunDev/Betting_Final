import { createSlice } from "@reduxjs/toolkit";
import { lotteriesService } from "../services/lotteries.service";
import { ARRYA_ERROR_MSG, RES_STATUS_SUCCESS } from "../config/constants";
import { checkResponse } from "../utils";

const WARNING_TIME = 15;
const BLOCKING_TIME = 5;
export const lottriesSlice = createSlice({
  name: "lottries",
  initialState: {
    lotteries: [],
    currentLottery: {},
  },
  reducers: {
    saveLotteries: (state, action) => {
      state.lotteries = action.payload.lotteries;
    },
    changeLotteries: (state, action) => {
      let { drawIssues, preDrawCodes } = action.payload.data;
      state.lotteries = state.lotteries.map((item, i) => {
        var temp = { ...item };
        if (item.lotteryType == action.payload.lotteryType) {
          temp.drawIssues = drawIssues;
          temp.preDrawCodes = preDrawCodes;
        }
        return temp;
      });
    },
    saveCurrentLottery: (state, action) => {
      state.currentLottery = action.payload;
    },
    setLotteryStatus: (state, action) => {
      state.lotteries = state.lotteries.map((item, i) => {
        var temp = { ...item };
        if (action.payload._id == item.lotteryType) {
          temp.status = action.payload.status; // status  'doing' 'block' 'drawing' 'new'
        }
        return temp;
      });
    },
  },
});

export const {
  saveLotteries,
  saveCurrentLottery,
  setLotteryStatus,
  changeLotteries,
} = lottriesSlice.actions;

export default lottriesSlice.reducer;
