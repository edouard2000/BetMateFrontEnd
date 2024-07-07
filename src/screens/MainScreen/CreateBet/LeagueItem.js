// components/LeagueItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import GameItem from './GameItem';
import Icon from 'react-native-vector-icons/Ionicons';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';

const LeagueItem = ({league, navigation, addTeamToBet}) => {
  const countryLogo = generateAvatarUrl(league.country) || league.countryLogo;

  return (
    <View style={styles.leagueContainer}>
      <View style={styles.leagueHeader}>
        <Image source={{uri: countryLogo}} style={styles.countryLogo} />
        <View style={styles.leagueTitle}>
          <Text style={styles.leagueName}>{league.name}</Text>
          <Text style={styles.countryName}>{league.country}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LeagueDetailScreen', {
              league,
              addTeamToBet,
            })
          }>
          <Icon name="chevron-forward-outline" size={20} color="#3498db" />
        </TouchableOpacity>
      </View>
      {league.games.slice(0, 5).map((game, index) => (
        <GameItem key={index} game={game} addTeamToBet={addTeamToBet} />
      ))}
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
  countryLogo: {
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
});

export default LeagueItem;
