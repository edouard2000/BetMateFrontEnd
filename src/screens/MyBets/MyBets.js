import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import BetCard from './BetCard';
import FilterButton from './FilterButton';

const dummyBets = [
  {
    id: '1',
    name: 'Weekend Football',
    status: 'Active',
    people: 5,
    numberOfTeams: 2,
    dateCreated: '2024-06-10',
    allocatedAmount: '$100',
    remainingAmount: '$50',
    outcome: '+$150',
  },
  {
    id: '2',
    name: 'Champions League',
    status: 'Pending',
    people: 10,
    numberOfTeams: 4,
    dateCreated: '2024-06-08',
    allocatedAmount: '$200',
    remainingAmount: '$0',
    outcome: '+$200',
  },
  {
    id: '3',
    name: 'World Cup Finals',
    status: 'Completed',
    people: 15,
    numberOfTeams: 2,
    dateCreated: '2024-06-01',
    allocatedAmount: '$500',
    outcome: '+$300',
  },
];

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
            onCardPress={() => navigation.navigate('BestGamesList')}
            isLast={index === filteredBets.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={25} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyBets;
