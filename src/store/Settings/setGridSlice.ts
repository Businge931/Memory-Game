import { createSlice } from "@reduxjs/toolkit";
import { generateNumbers } from "../../utils/randomNumbers";

interface gridState {
  grid: number;
  gridArray: number[];
}
const initialState: gridState = {
  grid: 16 | 36,
  gridArray: [],
};

export const chooseGridSlice = createSlice({
  name: "chooseGrid",
  initialState,
  reducers: {
    setGridByFour: (state, action) => {
      state.grid = 16;
      const fourGrid = generateNumbers(4, 10);
      state.gridArray.concat(fourGrid);

      // console.log(newArrFour);
    },
    setGridBySix: (state) => {
      state.grid = 36;
      const sixGrid = generateNumbers(6, 20);
      state.gridArray.concat(sixGrid);

      // console.log(newArrSix);
    },
  },
});

export const { setGridByFour, setGridBySix } = chooseGridSlice.actions;
