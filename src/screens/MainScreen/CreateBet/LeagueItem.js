import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GameItem from './GameItem';

const LeagueItem = ({league, navigation, addTeamToBet, predictTeam, mode}) => {
  const leagueLogo = league.logo;

  return (
    <View style={styles.leagueContainer}>
      <View style={styles.leagueHeader}>
        <Image source={{uri: leagueLogo}} style={styles.leagueLogo} />
        <View style={styles.leagueTitle}>
          <Text style={styles.leagueName}>{league.name}</Text>
          <Text style={styles.countryName}>{league.country.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LeagueDetailScreen', {league, mode})
          }>
          <Icon name="chevron-forward-outline" size={20} color="#3498db" />
        </TouchableOpacity>
      </View>
      {league.fixtures.slice(0, 5).map((fixture, index) => (
        <GameItem
          key={index}
          game={fixture}
          addTeamToBet={addTeamToBet}
          predictTeam={predictTeam}
          mode={mode}
        />
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
});

export default LeagueItem;
