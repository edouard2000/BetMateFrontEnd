import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch leagues
export const fetchLeagues = createAsyncThunk(
  'fixtures/fetchLeagues',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get('http://localhost:5001/api/leagues');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async thunk to add a fixture to a bet
export const addFixtureToBet = createAsyncThunk(
  'fixtures/addFixtureToBet',
  async ({betId, fixtureId}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/bets/${betId}/add-fixture/${fixtureId}`,
      );
      return {betId, fixture: response.data}; // Ensure correct payload
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async thunk to remove a fixture from a bet
export const removeFixtureFromBet = createAsyncThunk(
  'fixtures/removeFixtureFromBet',
  async ({betId, fixtureId}, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/bets/${betId}/remove-fixture/${fixtureId}`,
      );
      return {betId, fixtureId}; // Ensure correct payload
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Async thunk to fetch added fixtures for a specific bet
export const fetchAddedFixtures = createAsyncThunk(
  'fixtures/fetchAddedFixtures',
  async (betId, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/bets/${betId}/added-fixtures`,
      );
      return {betId, fixtures: response.data.fixtures};
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  fixtures: {},
  leagues: [],
  status: 'idle',
  error: null,
  addedFixtures: {},
};

const fixtureSlice = createSlice({
  name: 'fixtures',
  initialState,
  reducers: {
    setFixtures(state, action) {
      const fixtures = action.payload;
      fixtures.forEach(fixture => {
        state.fixtures[fixture._id] = {...fixture}; // Use _id as the key
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLeagues.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchLeagues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leagues = action.payload;
        const fixtures = action.payload.flatMap(league =>
          league.fixtures.map(fixture => ({...fixture, leagueId: league._id})),
        );
        fixtureSlice.caseReducers.setFixtures(state, {payload: fixtures});
      })
      .addCase(fetchLeagues.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addFixtureToBet.fulfilled, (state, action) => {
        const {betId, fixture} = action.payload;
        if (!state.addedFixtures[betId]) {
          state.addedFixtures[betId] = {};
        }
        state.addedFixtures[betId][fixture._id] = true;
      })
      .addCase(removeFixtureFromBet.fulfilled, (state, action) => {
        const {betId, fixtureId} = action.payload;
        if (state.addedFixtures[betId]) {
          delete state.addedFixtures[betId][fixtureId];
        }
      })
      .addCase(fetchAddedFixtures.fulfilled, (state, action) => {
        const {betId, fixtures} = action.payload;
        state.addedFixtures[betId] = {};
        fixtures.forEach(fixture => {
          state.addedFixtures[betId][fixture._id] = true;
        });
      })
      .addCase(fetchAddedFixtures.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {setFixtures} = fixtureSlice.actions;
export default fixtureSlice.reducer;
