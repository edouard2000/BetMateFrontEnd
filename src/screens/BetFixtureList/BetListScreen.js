import React, {useState} from 'react';
import {View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetDetailsPopup from './BetDetailsPopup';
import ListHeaderComponent from './ListHeaderComponent';
import BetItem from './BetItem';
import styles from './Styles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const bets = [
  {
    id: '1',
    name: 'Champions',
    owner: 'John Doe',
    avatar: generateAvatarUrl('Champions'),
    league: 'Premier League',
    leagueIcon: generateAvatarUrl('Premier League'),
    teams: 'Liverpool vs. Man United',
    time: '19:00',
    multipliers: {teamA: '1.5', draw: '2', teamB: '2.8'},
    balance: 500,
    totalBalance: 1000,
    isFull: false,
    details: [
      '1: Liverpool win *1.5',
      '2: Draw *2',
      '3: Man United win *2.8',
      '4: Over 2.5 Goals *1.8',
      '5: Under 2.5 Goals *1.8',
    ],
    teamAIcon: generateAvatarUrl('Liverpool'),
    teamBIcon: generateAvatarUrl('Man United'),
  },
];

const BetListScreen = ({navigation}) => {
  const [selectedBet, setSelectedBet] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedBets, setAddedBets] = useState([]);

  const handleMorePress = bet => {
    setSelectedBet(bet);
    setModalVisible(true);
  };

  const handleAddPress = betId => {
    if (addedBets.includes(betId)) {
      setAddedBets(addedBets.filter(id => id !== betId));
    } else {
      setAddedBets([...addedBets, betId]);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBet(null);
  };

  const getTeams = teams => {
    const [teamA, teamB] = teams.split(' vs. ');
    return {teamA, teamB};
  };

  const handleAvatarPress = bet => {
    navigation.navigate('BetDetailScreen', {bet});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bets}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          bets.length ? (
            <ListHeaderComponent
              name={bets[0].name}
              owner={bets[0].owner}
              avatar={bets[0].avatar}
              balance={bets[0].balance}
              isFull={bets[0].isFull}
              onAvatarPress={() => handleAvatarPress(bets[0])}
            />
          ) : null
        }
        renderItem={({item}) => (
          <BetItem
            item={item}
            getTeams={getTeams}
            handleMorePress={handleMorePress}
            handleAddPress={handleAddPress}
            addedBets={addedBets}
          />
        )}
      />
      {selectedBet && (
        <BetDetailsPopup
          visible={modalVisible}
          onClose={closeModal}
          details={selectedBet.details}
        />
      )}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="home-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateBet')}>
          <Icon name="add-circle-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BetListScreen;
