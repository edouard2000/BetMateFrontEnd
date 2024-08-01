import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import GameItem from './GameItem';
import SearchBar from './SearchBar';

const LeagueDetailScreen = ({route, navigation}) => {
  const {leagueId, leagueName, mode} = route.params;
  const fixtures = useSelector(state => state.fixtures.fixtures);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFixtures, setFilteredFixtures] = useState([]);
  const [visibleFixtures, setVisibleFixtures] = useState([]);

  useEffect(() => {
    const leagueFixtures = Object.values(fixtures).filter(
      fixture => fixture.leagueId === leagueId,
    );
    setFilteredFixtures(leagueFixtures);
    setVisibleFixtures(leagueFixtures.slice(0, 10));
  }, [fixtures, leagueId]);

  useEffect(() => {
    const filteredGames = filteredFixtures.filter(
      game =>
        game.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setVisibleFixtures(filteredGames.slice(0, 10));
  }, [searchQuery, filteredFixtures]);

  const handleLoadMore = () => {
    const moreFixtures = filteredFixtures.slice(
      visibleFixtures.length,
      visibleFixtures.length + 10,
    );
    setVisibleFixtures([...visibleFixtures, ...moreFixtures]);
  };

  const filteredGames = visibleFixtures.filter(
    game =>
      game.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const backButtonColor = mode === 'predict' ? '#E74C3C' : '#3498db';
  const headerRightBgColor = mode === 'predict' ? '#E74C3C' : '#3498db';

  const renderItem = ({item}) => <GameItem game={item} mode={mode} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back-outline"
              size={20}
              color={backButtonColor}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{leagueName}</Text>
        </View>
        <View
          style={[styles.headerRight, {backgroundColor: headerRightBgColor}]}>
          <Text style={styles.headerGameCount}>{filteredFixtures.length}</Text>
        </View>
      </View>
      <SearchBar placeholder="Search games..." onChangeText={setSearchQuery} />
      <FlatList
        data={filteredGames}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()} // Ensure the key is unique using _id
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          visibleFixtures.length < filteredFixtures.length && (
            <ActivityIndicator size="large" color="#3498db" />
          )
        }
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
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  headerGameCount: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default LeagueDetailScreen;
