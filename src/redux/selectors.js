// src/redux/selectors.js

import {createSelector} from 'reselect';

// Selector to get the added fixtures from the state
const getAddedFixtures = state => state.fixtures.addedFixtures;

// Selector to get the betId from the arguments
const getBetId = (_, betId) => betId;

// Memoized selector for added fixtures by betId
export const makeGetAddedFixturesByBetId = () =>
  createSelector([getAddedFixtures, getBetId], (addedFixtures, betId) => {
    // Ensure that we are checking against the correct structure
    const fixturesForBet = addedFixtures[betId] || {};
    return fixturesForBet;
  });
