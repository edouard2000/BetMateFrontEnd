import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUnreadCount = createAsyncThunk(
  'unreadMessage/fetchUnreadCount',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://betmatebackend.onrender.com/api/general-chat/get-unreadcount/${userId}`);
      return response.data.data.unreadCount;
    } catch (error) {
      console.error('Failed to fetch unread messages count:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

const unreadMessageSlice = createSlice({
  name: 'unreadMessage',
  initialState: {
    unreadCount: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnreadCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUnreadCount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.unreadCount = action.payload;
      })
      .addCase(fetchUnreadCount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUnreadCount } = unreadMessageSlice.actions;

export default unreadMessageSlice.reducer;