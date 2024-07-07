// components/GameItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';

const GameItem = ({game, addTeamToBet}) => {
  const homeLogo = generateAvatarUrl(game.homeTeam) || game.homeLogo;
  const awayLogo = generateAvatarUrl(game.awayTeam) || game.awayLogo;

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.gameTime}>{game.time}</Text>
      <View style={styles.teamsContainer}>
        <View style={styles.team}>
          <Image source={{uri: homeLogo}} style={styles.teamLogo} />
          <Text style={styles.teamName}>{game.homeTeam}</Text>
        </View>
        <View style={styles.team}>
          <Image source={{uri: awayLogo}} style={styles.teamLogo} />
          <Text style={styles.teamName}>{game.awayTeam}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addTeamToBet}>
        <Icon name="add-circle-outline" size={20} color="#3498db" />
      </TouchableOpacity>
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
    marginLeft: 10,
  },
});

export default GameItem;
