import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createBet = createAsyncThunk(
  'bet/createBet',
  async ({ name, amountAllocated, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5001/api/create-bet', {
        name,
        amountAllocated,
        userId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addFixtureToBet = createAsyncThunk(
  'bet/addFixtureToBet',
  async ({ betId, fixtureId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:5001/api/bets/${betId}/fixtures`, {
        fixtureId,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFixtureFromBet = createAsyncThunk(
  'bet/removeFixtureFromBet',
  async ({ betId, fixtureId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/bets/${betId}/fixtures/${fixtureId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const betSlice = createSlice({
  name: 'bet',
  initialState: {
    currentBet: null, // Currently active bet
    bets: {}, // Dictionary of bets with betId as keys
    status: 'idle',
    error: null,
  },
  reducers: {
    setBetName: (state, action) => {
      state.currentBet.name = action.payload;
    },
    setBalance: (state, action) => {
      state.currentBet.balance = action.payload;
    },
    setCurrentBet: (state, action) => {
      state.currentBet = action.payload;
    },
    addFixture: (state, action) => {
      state.bets[state.currentBet].fixtures.push(action.payload);
    },
    removeFixture: (state, action) => {
      state.bets[state.currentBet].fixtures = state.bets[state.currentBet].fixtures.filter(
        fixture => fixture._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newBet = action.payload;
        state.bets[newBet._id] = newBet;
        state.currentBet = newBet._id;
      })
      .addCase(createBet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addFixtureToBet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addFixtureToBet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { betId, fixture } = action.payload;
        if (state.bets[betId]) {
          state.bets[betId].fixtures.push(fixture);
        }
      })
      .addCase(addFixtureToBet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeFixtureFromBet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFixtureFromBet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { betId, fixtureId } = action.payload;
        if (state.bets[betId]) {
          state.bets[betId].fixtures = state.bets[betId].fixtures.filter(fixture => fixture._id !== fixtureId);
        }
      })
      .addCase(removeFixtureFromBet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setBetName, setBalance, setCurrentBet, addFixture, removeFixture } = betSlice.actions;

export default betSlice.reducer;