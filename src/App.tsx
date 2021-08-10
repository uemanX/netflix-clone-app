import * as React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { counterSlice } from "./features/counter/counterSlice";
import HomeScreen from "./components/HomeScreen";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <HomeScreen />
    </div>
  );
};

export default App;
