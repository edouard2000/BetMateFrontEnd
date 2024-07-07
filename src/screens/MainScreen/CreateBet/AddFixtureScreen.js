// screens/AddFixtureScreen.js
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetInfoCard from './BetInfoCard';
import LeagueList from './LeagueList';

const AddFixtureScreen = ({route, navigation}) => {
  const {betName, balance, mode} = route.params;
  const [teamCount, setTeamCount] = useState(0);

  const leagues = [
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
          time: '01:30',
          homeTeam: 'Uruguay',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Chile',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '03:15',
          homeTeam: 'Bolivia',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Peru',
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
          homeTeam: 'Arsenal',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Chelsea',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '23:45',
          homeTeam: 'Liverpool',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Manchester United',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '01:30',
          homeTeam: 'Manchester City',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Tottenham Hotspur',
          awayLogo: 'https://link-to-team-logo.png',
        },
        {
          time: '03:15',
          homeTeam: 'West Ham United',
          homeLogo: 'https://link-to-team-logo.png',
          awayTeam: 'Southampton',
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
        mode={mode}
        onSavePress={() => alert('Save pressed')}
        onNextPress={() => alert('Next pressed')}
      />
      <LeagueList
        leagues={leagues}
        navigation={navigation}
        addTeamToBet={addTeamToBet}
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
  footer: {
    backgroundColor: '#000000',
    padding: 10,
  },
  backButtonContainer: {
    alignItems: 'center',
  },
});

export default AddFixtureScreen;
