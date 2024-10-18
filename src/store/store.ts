import { configureStore } from "@reduxjs/toolkit";
import { activeButtonSlice } from "./activeButtonSlice";
import { chooseGridSlice } from "./Settings/setGridSlice";
import { playersSlice } from "./Settings/setPlayerNumberSlice";
import { themeSlice } from "./Settings/setThemeSlice";

export const store = configureStore({
  reducer: {
    activeButton: activeButtonSlice.reducer,
    chooseGrid: chooseGridSlice.reducer,
    players: playersSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
