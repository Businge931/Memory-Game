import { createSlice } from "@reduxjs/toolkit";

interface buttonState {
  isActive: boolean;
}

const initialState: buttonState = {
  isActive: false,
};

export const activeButtonSlice = createSlice({
  name: "activeButton",
  initialState,
  reducers: {
    setActiveButton: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { setActiveButton } = activeButtonSlice.actions;
