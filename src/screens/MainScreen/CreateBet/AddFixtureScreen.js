import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import BetInfoCard from './BetInfoCard';
import SearchBar from './SearchBar';
import LeagueList from './LeagueList';
import { fetchLeagues } from '../../../redux/slices/fixtureSlice';

const AddFixtureScreen = ({ route, navigation }) => {
  const { betId, betName, balance, mode } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const leagues = useSelector(state => state.fixtures.leagues);
  const loading = useSelector(state => state.fixtures.status === 'loading');
  const error = useSelector(state => state.fixtures.error);
  const userName = useSelector(state => state.auth.user?.name);

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  const filteredLeagues = leagues.filter(league =>
    league.leagueName?.toLowerCase().includes(searchQuery.toLowerCase())
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
    <SafeAreaView style={styles.container}>
      <BetInfoCard
        betName={betName}
        balance={balance}
        mode={mode}
        userName={userName}
        onSavePress={() => alert('Save pressed')}
        onNextPress={() => alert('Next pressed')}
      />
      <SearchBar placeholder="Search leagues..." onChangeText={setSearchQuery} />
      <LeagueList leagues={filteredLeagues} navigation={navigation} betId={betId} mode={mode} />
      <View style={styles.footer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon name="arrow-undo-outline" size={30} color="#3498db" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#000000',
    padding: 10,
  },
  backButtonContainer: {
    alignItems: 'center',
  },
});

export default AddFixtureScreen;
