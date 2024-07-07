import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GameItem from './GameItem';

const LeagueDetailScreen = ({route, navigation}) => {
  const {league, mode} = route.params;

  const addTeamToBet = () => {};

  const predictTeam = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={20} color="#3498db" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{league.name}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerGameCount}>{league.games.length}</Text>
        </View>
      </View>
      <FlatList
        data={league.games}
        renderItem={({item}) => (
          <GameItem
            game={item}
            addTeamToBet={addTeamToBet}
            predictTeam={predictTeam}
            mode={mode}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#151515',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },
  headerRight: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  headerGameCount: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default LeagueDetailScreen;
