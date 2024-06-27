import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './BetListScreenStyles';

const generateAvatarUrl = name => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random&size=128`;
};

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

const BetDetailsPopup = ({visible, onClose, details}) => (
  <Modal visible={visible} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Bet Details</Text>
        {details.map((detail, index) => (
          <Text key={index} style={styles.detailText}>
            {detail}
          </Text>
        ))}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const ListHeaderComponent = ({
  name,
  owner,
  avatar,
  onAvatarPress,
  balance,
  isFull,
}) => (
  <View style={styles.headerCard}>
    <View style={styles.headerLeft}>
      <TouchableOpacity onPress={onAvatarPress}>
        <Image source={{uri: avatar}} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.headerTextContainer}>
        <Text style={styles.betName}>{name}</Text>
        <Text style={styles.ownerName}>{owner}</Text>
      </View>
    </View>
    <View style={styles.headerRight}>
      <View style={styles.statusBalanceContainer}>
        <Text
          style={[
            styles.statusText,
            isFull ? styles.fullStatus : styles.openStatus,
          ]}>
          Status: {isFull ? 'Full' : 'Open'}
        </Text>
        <Text style={styles.balanceText}>Balance: {balance}</Text>
      </View>
    </View>
  </View>
);

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
        renderItem={({item}) => {
          const {teamA, teamB} = getTeams(item.teams);
          const isAdded = addedBets.includes(item.id);
          return (
            <View style={styles.betCard}>
              <View style={styles.headerRow}>
                <View style={styles.leagueContainer}>
                  <Image
                    source={{uri: item.leagueIcon}}
                    style={styles.leagueIcon}
                  />
                  <Text style={styles.leagueText}>{item.league}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleMorePress(item)}
                  style={styles.moreButton}>
                  <Icon
                    name="information-circle-outline"
                    size={24}
                    color="#3498db"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.teamContainer}>
                <View style={styles.team}>
                  <Image
                    source={{uri: item.teamAIcon}}
                    style={styles.teamIcon}
                  />
                  <Text style={styles.teamName}>{teamA}</Text>
                </View>
                <Text style={styles.vsText}>vs</Text>
                <View style={styles.team}>
                  <Image
                    source={{uri: item.teamBIcon}}
                    style={styles.teamIcon}
                  />
                  <Text style={styles.teamName}>{teamB}</Text>
                </View>
              </View>
              <View style={styles.multipliersContainer}>
                <View style={styles.multiplierBox}>
                  <Text style={styles.multiplier}>
                    {item.multipliers.teamA}
                  </Text>
                  <Text style={styles.multiplierLabel}>{teamA}</Text>
                </View>
                <View style={styles.multiplierBox}>
                  <Text style={styles.multiplier}>{item.multipliers.draw}</Text>
                  <Text style={styles.multiplierLabel}>Draw</Text>
                </View>
                <View style={styles.multiplierBox}>
                  <Text style={styles.multiplier}>
                    {item.multipliers.teamB}
                  </Text>
                  <Text style={styles.multiplierLabel}>{teamB}</Text>
                </View>
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  onPress={() => handleAddPress(item.id)}
                  style={[styles.addButton, isAdded && styles.removeButton]}>
                  <Text style={styles.addButtonText}>
                    {isAdded ? 'Remove' : 'Add'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.betTime}>{item.time}</Text>
              </View>
            </View>
          );
        }}
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
