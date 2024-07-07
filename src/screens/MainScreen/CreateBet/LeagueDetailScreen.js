// screens/LeagueDetailScreen.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GameItem from './GameItem';

const LeagueDetailScreen = ({route, navigation}) => {
  const {league, addTeamToBet} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={20} color="#3498db" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{league.name}</Text>
      </View>
      <ScrollView>
        {league.games.map((game, index) => (
          <GameItem key={index} game={game} addTeamToBet={addTeamToBet} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#151515',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default LeagueDetailScreen;
