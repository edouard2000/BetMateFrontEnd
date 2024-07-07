// screens/AddFixtureScreen.js
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetInfoCard from './BetInfoCard';
import LeagueList from './LeagueList';

const AddFixtureScreen = ({route, navigation}) => {
  const {betName, balance} = route.params;
  const [teamCount, setTeamCount] = useState(0);

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
    {
      name: 'Europa League',
      country: 'Portugal',
      countryLogo: 'https://link-to-country-logo.png',
      games: [
        {
          time: '21:00',
          homeTeam: 'Portugal',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Spain',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '23:45',
          homeTeam: 'France',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Germany',
          awayLogo: 'https://link-to-team-logo.png',
        },
      ],
    },
    {
      name: 'Premier League',
      country: 'England',
      countryLogo: 'https://link-to-country-logo.png',
      games: [
        {
          time: '21:00',
          homeTeam: 'England',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Spain',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '23:45',
          homeTeam: 'France',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Germany',
          awayLogo: 'https://link-to-team-logo.png',
        },
      ],
    },
    {
      name: 'La Liga',
      country: 'Spain',
      countryLogo: 'https://link-to-country-logo.png',
      games: [
        {
          time: '21:00',
          homeTeam: 'Spain',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Germany',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '23:45',
          homeTeam: 'France',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'England',
          awayLogo: 'https://link-to-team-logo.png',
        },
      ],
    },
  ];

  const addTeamToBet = () => {
    setTeamCount(teamCount + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BetInfoCard
        betName={betName}
        balance={balance}
        teamCount={teamCount}
        onSavePress={() => alert('Save pressed')}
        onNextPress={() => alert('Next pressed')}
      />
      <LeagueList
        leagues={leagues}
        navigation={navigation}
        addTeamToBet={addTeamToBet}
      />
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
