// LeagueItem.js

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {
  addFixtureToBet,
  removeFixtureFromBet,
  fetchAddedFixtures, // Import fetchAddedFixtures thunk
} from '../../../redux/slices/fixtureSlice';
import {formatTime, formatDate} from '../../../utils/formatTimeAndDate';
import {makeGetAddedFixturesByBetId} from '../../../redux/selectors';

const LeagueItem = ({league, navigation, betId, mode}) => {
  const dispatch = useDispatch();
  const getAddedFixturesByBetId = React.useMemo(
    () => makeGetAddedFixturesByBetId(),
    [],
  );
  const addedFixtures = useSelector(state =>
    getAddedFixturesByBetId(state, betId),
  );

  useEffect(() => {
    // Fetch the added fixtures when the component mounts
    dispatch(fetchAddedFixtures(betId));
  }, [dispatch, betId]);

  const handleAddRemoveFixture = fixtureId => {
    if (addedFixtures[fixtureId]) {
      dispatch(removeFixtureFromBet({betId, fixtureId})).then(() => {
        // Re-fetch added fixtures to update the UI after removal
        dispatch(fetchAddedFixtures(betId));
      });
    } else {
      dispatch(addFixtureToBet({betId, fixtureId})).then(() => {
        // Re-fetch added fixtures to update the UI after addition
        dispatch(fetchAddedFixtures(betId));
      });
    }
  };

  return (
    <View style={styles.leagueContainer}>
      <View style={styles.leagueHeader}>
        <Image source={{uri: league.leagueLogo}} style={styles.leagueLogo} />
        <View style={styles.leagueTitle}>
          <Text style={styles.leagueName}>{league.leagueName}</Text>
          <Text style={styles.countryName}>{league.countryName}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LeagueDetailScreen', {
              leagueId: league._id,
              leagueName: league.leagueName,
              mode,
              betId,
            });
          }}>
          <Icon
            name="chevron-forward-outline"
            size={20}
            color={mode === 'predict' ? '#E74C3C' : '#3498db'}
          />
        </TouchableOpacity>
      </View>
      {league.fixtures && league.fixtures.length > 0 ? (
        league.fixtures.slice(0, 5).map((fixture, index) => (
          <View key={index} style={styles.gameContainer}>
            <View>
              <Text style={styles.gameTime}>{formatTime(fixture.date)}</Text>
              <Text style={styles.gameDate}>{formatDate(fixture.date)}</Text>
            </View>
            <View style={styles.teamsContainer}>
              <View style={styles.team}>
                <Image
                  source={{uri: fixture.homeTeam.logo}}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamName}>{fixture.homeTeam.name}</Text>
              </View>
              <View style={styles.team}>
                <Image
                  source={{uri: fixture.awayTeam.logo}}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamName}>{fixture.awayTeam.name}</Text>
              </View>
            </View>
            {mode === 'bet' && (
              <TouchableOpacity
                style={[
                  styles.button,
                  addedFixtures[fixture._id]
                    ? styles.removeButton
                    : styles.addButton,
                ]}
                onPress={() => handleAddRemoveFixture(fixture._id)}>
                <Text style={styles.buttonText}>
                  {addedFixtures[fixture._id] ? 'Remove' : 'Add'}
                </Text>
              </TouchableOpacity>
            )}
            {mode === 'predict' && (
              <TouchableOpacity style={styles.predictButton}>
                <Text style={styles.predictButtonText}>Predict</Text>
              </TouchableOpacity>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.noFixturesText}>No fixtures available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leagueContainer: {
    backgroundColor: '#151515',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  leagueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leagueLogo: {
    width: 25,
    height: 25,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  leagueTitle: {
    flex: 1,
    marginLeft: 10,
  },
  leagueName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryName: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  noFixturesText: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 10,
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#121212',
    borderRadius: 10,
  },
  gameTime: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  gameDate: {
    color: 'gray',
    fontSize: 12,
  },
  teamsContainer: {
    flex: 1,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10,
    marginVertical: 3,
  },
  teamName: {
    color: '#FFFFFF',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: '#3498db',
  },
  removeButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  predictButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  predictButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LeagueItem;
