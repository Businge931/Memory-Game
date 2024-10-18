import { createSlice } from "@reduxjs/toolkit";

interface themeTypes {
  themeName: string | null;
}
const initialState: themeTypes = {
  themeName: null,
};

export const themeSlice = createSlice({
  name: "theme-slice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.themeName = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
