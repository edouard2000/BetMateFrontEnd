import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {formatTime, formatDate} from '../../../utils/formatTimeAndDate';

const GameItem = ({game, addTeamToBet, predictTeam, mode}) => {
  const homeLogo = game.homeTeam.logo;
  const awayLogo = game.awayTeam.logo;

  return (
    <View style={styles.gameContainer}>
      <View>
        <Text style={styles.gameTime}>{formatTime(game.date)}</Text>
        <Text style={styles.gameDate}>{formatDate(game.date)}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.team}>
          <Image source={{uri: homeLogo}} style={styles.teamLogo} />
          <Text style={styles.teamName}>{game.homeTeam.name}</Text>
        </View>
        <View style={styles.team}>
          <Image source={{uri: awayLogo}} style={styles.teamLogo} />
          <Text style={styles.teamName}>{game.awayTeam.name}</Text>
        </View>
      </View>
      {mode === 'bet' && (
        <TouchableOpacity style={styles.addButton} onPress={addTeamToBet}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      )}
      {mode === 'predict' && (
        <TouchableOpacity style={styles.predictButton} onPress={predictTeam}>
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
  addButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  addButtonText: {
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
