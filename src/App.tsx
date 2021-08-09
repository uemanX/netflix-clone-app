import * as React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { counterSlice } from "./features/counter/counterSlice";

type Props = {};

const App = (props: Props) => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(counterSlice.actions.increment());
  };

  const decrement = () => {
    dispatch(counterSlice.actions.decrement());
  };

  return (
    <div>
      <h1>Let's build Netflix.</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
    </div>
  );
};

export default App;
