import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import fixtureReducer from './slices/fixtureSlice';
import betReducer from './slices/betSlice';
import getBetSlice from './slices/getBetSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    fixtures: fixtureReducer,
    bet: betReducer,
    bets: getBetSlice, 
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export default store;
