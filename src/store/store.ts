import { configureStore } from "@reduxjs/toolkit";
import { activeButtonSlice } from "./activeButtonSlice";

export const store = configureStore({
  reducer: {
    activeButton: activeButtonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
