import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import BetCard from './BetCard';
import FilterButton from './FilterButton';
import dummyBets from './dummyBets';

const MyBets = ({navigation}) => {
  const [filteredStatus, setFilteredStatus] = useState('All');

  const handleFilterChange = status => {
    setFilteredStatus(status);
  };

  const filteredBets = dummyBets.filter(
    bet => filteredStatus === 'All' || bet.status === filteredStatus,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        {['All', 'Active', 'Pending', 'Completed'].map(status => (
          <FilterButton
            key={status}
            label={status}
            isActive={filteredStatus === status}
            onPress={() => handleFilterChange(status)}
          />
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredBets.map((bet, index) => (
          <BetCard
            key={bet.id}
            bet={bet}
            onCardPress={() =>
              navigation.navigate('FixtureDetailScreen', {
                fixtures: bet.fixtures,
              })
            }
            isLast={index === filteredBets.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.footerButton}>
          <Text style={[styles.footerButtonText, {color: '#1E88E5'}]}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SavedBetsScreen')}
          style={styles.footerButton}>
          <Text style={[styles.footerButtonText, {color: '#1E88E5'}]}>
            Saved
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyBets;
