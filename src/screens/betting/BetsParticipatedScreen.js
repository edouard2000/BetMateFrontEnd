import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import FilterButton from './FilterButton';
import BetParticipatedCard from './BetParticipatedCard';
import styles from './Styles';
import dummyBets from './dummyBets';

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
            onCardPress={() =>
              navigation.navigate('BettingFixtureScreen', {bet})
            }
            onCashoutPress={() => {}}
            isLast={index === arr.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DashboardScreen')}
          style={styles.footerButton}>
          <Text style={[styles.footerButtonText, {color: '#1E88E5'}]}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SavedBettingsScreen')}
          style={styles.footerButton}>
          <Text style={[styles.footerButtonText, {color: '#1E88E5'}]}>
            Saved
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BetsParticipatedScreen;
