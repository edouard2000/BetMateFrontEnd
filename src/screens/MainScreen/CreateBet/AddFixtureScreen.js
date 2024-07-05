// screens/AddFixtureScreen.js
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import SearchBar from './SearchBar';
import LeagueList from './LeagueList';

const AddFixtureScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const leagues = [
    // Sample data, replace with real data
    {
      name: 'Copa America',
      country: 'Argentina',
      countryLogo: 'https://link-to-country-logo.png',
      games: [
        {
          time: '21:00',
          homeTeam: 'Argentina',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Ecuador',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '23:45',
          homeTeam: 'Brazil',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Paraguay',
          awayLogo: 'https://link-to-team-logo.png',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onSearchPress={toggleSearch}
        onSavePress={() => alert('Save pressed')}
        onNextPress={() => alert('Next pressed')}
      />
      {isSearchVisible && (
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}
      <LeagueList leagues={leagues} navigation={navigation} />
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-undo-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{translateX: -15}],
  },
});

export default AddFixtureScreen;
