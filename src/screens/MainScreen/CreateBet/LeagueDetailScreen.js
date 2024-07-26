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
import Icon from 'react-native-vector-icons/Ionicons';
import GameItem from './GameItem';
import SearchBar from './SearchBar';
import axios from 'axios';

const LeagueDetailScreen = ({route, navigation}) => {
  const {league, mode} = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [fixtures, setFixtures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchFixtures();
  }, [page]);

  const fetchFixtures = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5001/api/fixtures?league=${league._id}&page=${page}&limit=10`,
      );
      const newFixtures = response.data.fixtures;

      setFixtures(prevFixtures => [...prevFixtures, ...newFixtures]);
      setHasMore(newFixtures.length > 0);
    } catch (error) {
      console.error('Error fetching fixtures:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    if (hasMore) {
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
          <Text style={styles.headerGameCount}>{fixtures.length}</Text>
        </View>
      </View>
      <SearchBar placeholder="Search games..." onChangeText={setSearchQuery} />
      <FlatList
        data={filteredGames}
        renderItem={({item}) => (
          <GameItem
            game={item}
            addTeamToBet={() => {}}
            predictTeam={() => {}}
            mode={mode}
          />
        )}
        keyExtractor={item => item.id.toString()}
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
