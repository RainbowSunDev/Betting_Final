import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    opened: false,
    message: "",
  },
  reducers: {
    showToast: (state, action) => {
      state.opened = true;
      state.message = action.payload.message;
    },
    closeToast: (state) => {
      state.opened = false;
    },
  },
});

export const { showToast, closeToast } = toastSlice.actions;

export const selectToastState = (state) => state.toastState.opened;
export const selectToastMessage = (state) => state.toastState.message;

export default toastSlice.reducer;
