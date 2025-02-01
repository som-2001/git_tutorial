// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    present: [],
    past: [],
    future: [],
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.future=[];
      state.present.push(state.value);
      
      if (state.present.length > 1) {
        state.past.push(state.present[state.present.length - 2]);
      }
    },
    decrement: (state) => {
      state.value -= 1;
      state.future=[];
      state.present.push(state.value);
   
    },
    redo: (state) => {
      const popPresentElement = state.future.pop(
        state.future[state.future.length - 1]
      );
      state.present.push(popPresentElement);

      if (state.present.length > 1) {
        state.past.push(popPresentElement);
      }

      state.value=popPresentElement;
    },
    undo: (state) => {
      const popFutureElement = state.present.pop(
        state.present[state.present.length - 1]
      );
      state.future.push(popFutureElement);
      state.past.pop(state.past[state.past.length - 1]);
      state.value = state.present[state.present.length - 1];
    },
  },

});

export const { increment, decrement, redo, undo } = counterSlice.actions;
export default counterSlice.reducer;
