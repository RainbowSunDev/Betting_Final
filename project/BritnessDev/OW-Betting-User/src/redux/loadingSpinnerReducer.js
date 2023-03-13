import { createSlice } from "@reduxjs/toolkit";

export const loadingSpinnerSlice = createSlice({
  name: "loadingSpinner",
  initialState: {
    opened: false,
  },
  reducers: {
    openLoadingSpinner: (state) => {
      state.opened = true;
    },
    closeLoadingSpinner: (state) => {
      state.opened = false;
    },
  },
});

export const { openLoadingSpinner, closeLoadingSpinner } =
  loadingSpinnerSlice.actions;

export const loadingSpinnerState = (state) => state.snackBarState.opened;

export default loadingSpinnerSlice.reducer;
