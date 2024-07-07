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
        {
          time: '23:15',
          homeTeam: 'Uruguay',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Chile',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '22:45',
          homeTeam: 'Bolivia',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Venezuela',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '22:15',
          homeTeam: 'Peru',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Colombia',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '21:45',
          homeTeam: 'Paraguay',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Bolivia',
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
          time: '20:00',
          homeTeam: 'Chelsea',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Arsenal',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '22:30',
          homeTeam: 'Manchester City',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Liverpool',
          awayLogo: 'https://link-to-team-logo.png',
        },
      ],
    },
    {
      name: 'Serie A',
      country: 'Italy',
      countryLogo: 'https://link-to-country-logo.png',
      games: [
        {
          time: '19:45',
          homeTeam: 'Juventus',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Roma',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '22:15',
          homeTeam: 'Inter Milan',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Lazio',
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
      <View style={styles.footer}>
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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 5,
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{translateX: -15}],
  },
});

export default AddFixtureScreen;
