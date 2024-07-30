import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GameItem from './GameItem';
import SearchBar from './SearchBar';
import axios from 'axios';

const LeagueDetailScreen = ({route, navigation}) => {
  const {leagueId, leagueName, mode, betId} = route.params;

  const [searchQuery, setSearchQuery] = useState('');
  const [fixtures, setFixtures] = useState([]);
  const [addedFixtures, setAddedFixtures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchFixtures();
  }, [page]);

  useEffect(() => {
    if (fixtures.length > 0) {
      fetchFixtureStatuses();
    }
  }, [fixtures]);

  const fetchFixtures = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5001/api/fixtures/league/${leagueId}?page=${page}&limit=10`,
      );
      const newFixtures = response.data.fixtures || [];
      const uniqueFixtures = newFixtures.filter(
        newFixture => !fixtures.some(fixture => fixture.id === newFixture.id),
      );

      setFixtures(prevFixtures => [...prevFixtures, ...uniqueFixtures]);
      setHasMore(newFixtures.length > 0);
    } catch (error) {
      console.error('Error fetching fixtures:', error);
    }
    setLoading(false);
  };

  const fetchFixtureStatuses = async () => {
    const statuses = await Promise.all(
      fixtures.map(async fixture => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/bet/${betId}/fixture/${fixture._id}`,
          );
          return {fixtureId: fixture._id, isAdded: response.data.isAdded};
        } catch (error) {
          console.error('Error checking fixture status:', error);
          return {fixtureId: fixture._id, isAdded: false};
        }
      }),
    );
    setAddedFixtures(statuses);
  };

  const handleAddFixture = async fixtureId => {
    try {
      await axios.post('http://localhost:5001/api/bet/add-fixture', {
        betId,
        fixtureId,
      });
      setAddedFixtures(prev =>
        prev.map(f => (f.fixtureId === fixtureId ? {...f, isAdded: true} : f)),
      );
    } catch (error) {
      console.error('Error adding fixture to bet:', error);
    }
  };

  const handleRemoveFixture = async fixtureId => {
    try {
      await axios.post('http://localhost:5001/api/bet/remove-fixture', {
        betId,
        fixtureId,
      });
      setAddedFixtures(prev =>
        prev.map(f => (f.fixtureId === fixtureId ? {...f, isAdded: false} : f)),
      );
    } catch (error) {
      console.error('Error removing fixture from bet:', error);
    }
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{margin: 20}} />;
  };

  const filteredGames = fixtures.filter(
    game =>
      game.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const backButtonColor = mode === 'predict' ? '#E74C3C' : '#3498db';
  const headerRightBgColor = mode === 'predict' ? '#E74C3C' : '#3498db';

  const renderItem = useCallback(
    ({item}) => (
      <GameItem
        game={item}
        addTeamToBet={handleAddFixture}
        removeTeamFromBet={handleRemoveFixture}
        betId={betId}
        addedFixtures={addedFixtures}
        mode={mode}
      />
    ),
    [mode, addedFixtures],
  );

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
          <Text style={styles.headerGameCount}>{fixtures.length}</Text>
        </View>
      </View>
      <SearchBar placeholder="Search games..." onChangeText={setSearchQuery} />
      <FlatList
        data={filteredGames}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
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
