import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer, { UserState } from './features/user/userSlice';

export type AppState = {
  user: UserState;
};

const rootReducer = combineReducers<AppState>({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
