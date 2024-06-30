import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './P2PBettingScreenStyles';
import UserCard from './UserCard';
import PostedRequestCard from './PostedRequestCard';

const P2PBettingScreen = ({navigation}) => {
  const [filter, setFilter] = useState('All');

  const dummyUserBets = [
    {
      teamA: 'Team A',
      teamB: 'Team B',
      amount: 50,
      gameTime: '2024-06-29T15:00:00Z',
      joined: 3,
      max: 5,
      status: 'Pending',
    },
    {
      teamA: 'Team C',
      teamB: 'Team D',
      amount: 75,
      gameTime: '2024-06-30T18:00:00Z',
      joined: 2,
      max: 4,
      status: 'Won',
    },
  ];

  const dummyPostedRequests = [
    {
      teamA: 'Team E',
      teamB: 'Team F',
      amount: 60,
      gameTime: '2024-07-01T20:00:00Z',
      betTerms: '1',
    },
    {
      teamA: 'Team G',
      teamB: 'Team H',
      amount: 100,
      gameTime: '2024-07-02T18:00:00Z',
      betTerms: '2',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.createP2PButton}
          onPress={() => navigation.navigate('CreateP2P')}>
          <Text style={styles.createP2PButtonText}>Create P2P</Text>
          <Icon name="add-outline" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.trendingSection}>
        <View style={styles.trendingHeader}>
          <Text style={styles.trendingText}>My P2P</Text>
        </View>
        <ScrollView horizontal style={styles.betsList}>
          {dummyUserBets.map((bet, index) => (
            <UserCard key={index} bet={bet} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Time</Text>
          <Text style={styles.tableHeader}>Game</Text>
          <Text style={styles.tableHeader}>Details</Text>
          <Text style={styles.tableHeader}>Amount</Text>
          <Text style={styles.tableHeader}>Participate</Text>
        </View>
        <ScrollView style={styles.requestsList}>
          {dummyPostedRequests.map((request, index) => (
            <PostedRequestCard key={index} request={request} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default P2PBettingScreen;
