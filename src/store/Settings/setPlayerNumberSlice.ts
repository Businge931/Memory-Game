import { createSlice } from "@reduxjs/toolkit";

interface players {
  players: number;
}

const initialState: players = {
  players: 0,
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayerNumber: (state, action) => {
      state.players = action.payload;
    },
  },
});

export const { setPlayerNumber } = playersSlice.actions;
