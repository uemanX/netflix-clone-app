import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: (state) => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    incrementByAmount: (state, actions: PayloadAction<number>) => {
      state.value += actions.payload;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value;

// export default counterSlice.reducer;
