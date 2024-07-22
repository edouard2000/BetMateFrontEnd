import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import BetCard from './BetCard';
import styles from './styles';

const dummySavedBets = [
  {
    id: '1',
    name: 'Saved Bet 1',
    status: 'Saved',
    people: 0,
    numberOfTeams: 2,
    dateCreated: '2024-07-01',
    allocatedAmount: '$100',
    outcome: '0',
    fixtures: [
      {
        id: '1',
        league: 'Premier League',
        leagueIcon: 'https://example.com/league-icon.png',
        teamA: 'Liverpool',
        teamAIcon: 'https://example.com/teamA-icon.png',
        teamB: 'Manchester United',
        teamBIcon: 'https://example.com/teamB-icon.png',
        time: '20:00',
        multipliers: {teamA: '2.5', draw: '3.0', teamB: '2.8'},
      },
    ],
  },
  {
    id: '2',
    name: 'Saved Bet 2',
    status: 'Saved',
    people: 0,
    numberOfTeams: 4,
    dateCreated: '2024-07-02',
    allocatedAmount: '$200',
    outcome: '0',
    fixtures: [
      {
        id: '1',
        league: 'Champions League',
        leagueIcon: 'https://example.com/league-icon.png',
        teamA: 'Barcelona',
        teamAIcon: 'https://example.com/teamA-icon.png',
        teamB: 'Real Madrid',
        teamBIcon: 'https://example.com/teamB-icon.png',
        time: '22:00',
        multipliers: {teamA: '2.0', draw: '3.5', teamB: '3.0'},
      },
    ],
  },
];

const SavedBetsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {dummySavedBets.map((bet, index) => (
          <BetCard
            key={bet.id}
            bet={bet}
            onCardPress={() =>
              navigation.navigate('FixtureDetailScreen', {bet})
            }
            isLast={index === dummySavedBets.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navButton}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.navButton}>
          <Text style={styles.navButtonText}>Create Bet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SavedBetsScreen;
