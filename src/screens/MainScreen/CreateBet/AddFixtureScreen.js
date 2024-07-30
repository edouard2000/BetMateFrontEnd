import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetInfoCard from './BetInfoCard';
import LeagueList from './LeagueList';
import SearchBar from './SearchBar';
import axios from 'axios';

const AddFixtureScreen = ({route, navigation}) => {
  const {betId, betName, balance, mode, userName} = route.params;
  const [teamCount, setTeamCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeagues();
  }, []);

  const fetchLeagues = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/leagues');
      setLeagues(response.data);
    } catch (error) {
      setError('Error fetching leagues');
      console.error('Error fetching leagues:', error);
    }
    setLoading(false);
  };

  const addTeamToBet = () => {
    setTeamCount(teamCount + 1);
  };

  const filteredLeagues = leagues.filter(league =>
    league.leagueName?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <BetInfoCard
        betName={betName}
        balance={balance}
        teamCount={teamCount}
        mode={mode}
        userName={userName}
        onSavePress={() => alert('Save pressed')}
        onNextPress={() => alert('Next pressed')}
      />
      <SearchBar
        placeholder="Search leagues..."
        onChangeText={setSearchQuery}
      />
      <LeagueList
        leagues={filteredLeagues}
        navigation={navigation}
        betId={betId}
        mode={mode}
      />
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
