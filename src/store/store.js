import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';
import unreadMessageReducer from './unreadMessageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    unreadMessage: unreadMessageReducer,
  },
});