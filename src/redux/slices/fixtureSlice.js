import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLeagues = createAsyncThunk(
  'fixtures/fetchLeagues',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5001/api/leagues');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  fixtures: {},
  leagues: [],
  status: 'idle',
  error: null,
};

const fixtureSlice = createSlice({
  name: 'fixtures',
  initialState,
  reducers: {
    setFixtures(state, action) {
      const fixtures = action.payload;
      fixtures.forEach(fixture => {
        state.fixtures[fixture.id] = { ...fixture };
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
          league.fixtures.map(fixture => ({ ...fixture, leagueId: league._id }))
        );
        fixtureSlice.caseReducers.setFixtures(state, { payload: fixtures });
      })
      .addCase(fetchLeagues.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setFixtures } = fixtureSlice.actions;
export default fixtureSlice.reducer;
