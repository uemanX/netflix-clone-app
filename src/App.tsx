import './app.css';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { counterSlice } from './features/counter/counterSlice';
import HomeScreen from './components/HomeScreen';

type Props = {};

const App = (props: Props) => {
  return (
    <div className='app'>
      <HomeScreen />
    </div>
  );
};

export default App;
