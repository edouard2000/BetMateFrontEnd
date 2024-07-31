import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import fixtureReducer from './slices/fixtureSlice';
import betReducer from './slices/betSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    fixtures: fixtureReducer,
    bet: betReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
