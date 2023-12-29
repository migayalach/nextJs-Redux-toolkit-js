import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter ++;
    },
    decrement: (state) => {
      if (state.counter > 0 && state.counter --);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
