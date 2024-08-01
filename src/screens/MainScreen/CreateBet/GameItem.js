// GameItem.js

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addFixtureToBet,
  removeFixtureFromBet,
  fetchAddedFixtures,
} from '../../../redux/slices/fixtureSlice';
import {formatTime, formatDate} from '../../../utils/formatTimeAndDate';
import {makeGetAddedFixturesByBetId} from '../../../redux/selectors';

const GameItem = ({game, mode, betId}) => {
  const dispatch = useDispatch();
  const getAddedFixturesByBetId = React.useMemo(
    () => makeGetAddedFixturesByBetId(),
    [],
  );
  const addedFixtures = useSelector(state =>
    getAddedFixturesByBetId(state, betId),
  );

  const handleAddRemoveFixture = () => {
    if (addedFixtures[game._id]) {
      dispatch(removeFixtureFromBet({betId, fixtureId: game._id})).then(() => {
        dispatch(fetchAddedFixtures(betId));
      });
    } else {
      dispatch(addFixtureToBet({betId, fixtureId: game._id})).then(() => {
        dispatch(fetchAddedFixtures(betId));
      });
    }
  };

  return (
    <View style={styles.gameContainer}>
      <View>
        <Text style={styles.gameTime}>{formatTime(game.date)}</Text>
        <Text style={styles.gameDate}>{formatDate(game.date)}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.team}>
          <Image source={{uri: game.homeTeam.logo}} style={styles.teamLogo} />
          <Text style={styles.teamName}>{game.homeTeam.name}</Text>
        </View>
        <View style={styles.team}>
          <Image source={{uri: game.awayTeam.logo}} style={styles.teamLogo} />
          <Text style={styles.teamName}>{game.awayTeam.name}</Text>
        </View>
      </View>
      {mode === 'bet' && (
        <TouchableOpacity
          style={[
            styles.button,
            addedFixtures[game._id] ? styles.removeButton : styles.addButton,
          ]}
          onPress={handleAddRemoveFixture}>
          <Text style={styles.buttonText}>
            {addedFixtures[game._id] ? 'Remove' : 'Add'}
          </Text>
        </TouchableOpacity>
      )}
      {mode === 'predict' && (
        <TouchableOpacity style={styles.predictButton}>
          <Text style={styles.predictButtonText}>Predict</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GameItem;
