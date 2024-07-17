import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterButton from './FilterButton';
import BetParticipatedCard from './BetParticipatedCard';
import styles from './Styles';

const dummyBets = [
  {
    id: '1',
    name: 'Premier League Finals',
    status: 'Pending',
    date: '2024-06-12',
    teams: 2,
    amount: '$10',
    outcome: '$50',
  },
  {
    id: '2',
    name: 'Champions League',
    status: 'Won',
    date: '2024-06-10',
    teams: 4,
    amount: '$20',
    outcome: '$200',
  },
  {
    id: '3',
    name: 'Europa League',
    status: 'Lost',
    date: '2024-06-08',
    teams: 3,
    amount: '$30',
    outcome: '$0',
  },
  {
    id: '4',
    name: 'La Liga',
    status: 'Active',
    date: '2024-06-15',
    teams: 5,
    amount: '$50',
    outcome: '$500',
  },
];

const BetsParticipatedScreen = ({navigation}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredBets = () => {
    if (activeFilter === 'all') {
      return dummyBets;
    }
    if (activeFilter === 'pending') {
      return dummyBets.filter(bet => bet.status.toLowerCase() === 'pending');
    }
    if (activeFilter === 'completed') {
      return dummyBets.filter(bet =>
        ['won', 'lost'].includes(bet.status.toLowerCase()),
      );
    }
    return dummyBets;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        {['all', 'pending', 'completed'].map(filter => (
          <FilterButton
            key={filter}
            label={filter.charAt(0).toUpperCase() + filter.slice(1)}
            isActive={activeFilter === filter}
            onPress={() => setActiveFilter(filter)}
          />
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredBets().map((bet, index, arr) => (
          <BetParticipatedCard
            key={bet.id}
            bet={bet}
            onCardPress={() => navigation.navigate('BetDetail', {bet})}
            onCashoutPress={() => {}}
            isLast={index === arr.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Icon name="arrow-undo-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BetsParticipatedScreen;
