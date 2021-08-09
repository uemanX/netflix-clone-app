
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice, CounterState } from './features/counter/counterSlice';


export type AppState = {
  counter: CounterState
};

const rootReducer = combineReducers<AppState>({
  counter: counterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;