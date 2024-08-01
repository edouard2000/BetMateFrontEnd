import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch bets for the logged-in user
export const fetchBetsByUser = createAsyncThunk(
  'bets/fetchBetsByUser',
  async (userId, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    const response = await axios.post(
      'http://localhost:5001/api/get-bets',
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  },
);


const betsSlice = createSlice({
  name: 'bets',
  initialState: {
    publishedBets: [],
    unpublishedBets: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBet: (state, action) => {
      const bet = action.payload;
      if (bet.ispublished) {
        state.publishedBets.push(bet);
      } else {
        state.unpublishedBets.push(bet);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBetsByUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBetsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.publishedBets = action.payload.filter(bet => bet.ispublished);
        state.unpublishedBets = action.payload.filter(bet => !bet.ispublished);
      })
      .addCase(fetchBetsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBet } = betsSlice.actions;

export default betsSlice.reducer;
