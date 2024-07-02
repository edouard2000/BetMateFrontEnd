import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
    },
    clearUserProfile: (state) => {
      state.profile = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;

export default userSlice.reducer;