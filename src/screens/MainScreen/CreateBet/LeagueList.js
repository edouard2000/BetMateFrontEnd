import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import LeagueItem from './LeagueItem';

const LeagueList = ({ navigation, betId, mode, leagues }) => {
  const [visibleLeagues, setVisibleLeagues] = useState([]);
  const loading = useSelector(state => state.fixtures.status === 'loading');
  const error = useSelector(state => state.fixtures.error);

  useEffect(() => {
    if (leagues.length > 0) {
      setVisibleLeagues(leagues.slice(0, 10));
    }
  }, [leagues]);

  const handleLoadMore = () => {
    if (visibleLeagues.length < leagues.length) {
      const moreLeagues = leagues.slice(visibleLeagues.length, visibleLeagues.length + 10);
      setVisibleLeagues(prevLeagues => [...prevLeagues, ...moreLeagues]);
    }
  };

  const renderItem = ({ item }) => (
    <LeagueItem league={item} navigation={navigation} betId={betId} mode={mode} />
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </SafeAreaView>
    );
  }

  if (error) {
    const errorMessage = error.error || 'Something went wrong';
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </SafeAreaView>
    );
  }

  return (
    <FlatList
      data={visibleLeagues}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        visibleLeagues.length < leagues.length && <ActivityIndicator size="large" color="#3498db" />
      }
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' },
  errorText: { color: 'red', fontSize: 18 },
});

export default LeagueList;
