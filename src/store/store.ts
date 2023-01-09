import { configureStore } from "@reduxjs/toolkit";
import { activeButtonSlice } from "./activeButtonSlice";
import { chooseGridSlice } from "./Settings/setGridSlice";

export const store = configureStore({
  reducer: {
    activeButton: activeButtonSlice.reducer,
    chooseGrid: chooseGridSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
