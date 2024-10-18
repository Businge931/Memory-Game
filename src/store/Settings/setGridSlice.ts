import { createSlice } from "@reduxjs/toolkit";

interface gridState {
  gridSize: number;
  gridArray: any[];
}
const initialState: gridState = {
  gridSize: 0,
  gridArray: [],
};

export const chooseGridSlice = createSlice({
  name: "chooseGrid",
  initialState,
  reducers: {
    setGridSize: (state, action) => {
      state.gridSize = action.payload;
      state.gridArray = state.gridArray.concat(action.payload.gridArray);
    },
  },
});

export const { setGridSize } = chooseGridSlice.actions;
