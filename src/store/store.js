import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import unreadMessageReducer from './unreadMessageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    unreadMessage: unreadMessageReducer,
  },
});