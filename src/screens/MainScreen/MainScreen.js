import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetCard from '../../components/BetCard';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const MainScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const gameCategories = ['Soccer', 'Basketball'];
  const bets = [
    {
      name: 'Chelsea',
      slogan: 'Exciting match',
      category: 'Soccer',
      teamCount: 5,
      peopleBetted: 100,
      isFull: false,
      subscribers: 150,
      scores: '225',
      closingTime: '2024-05-30 18:00',
      remainingBalance: 500,
      totalBalance: 1000,
      logo: null,
      isAdmin: true,
    },
    {
      name: 'Bet 2',
      slogan: 'Thrilling game',
      category: 'Soccer',
      teamCount: 4,
      peopleBetted: 80,
      isFull: false,
      subscribers: 120,
      scores: '89-92',
      closingTime: '2024-05-30 20:00',
      remainingBalance: 300,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    
  ];

  const filteredBets = bets.filter(bet =>
    bet.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const mostViewedBets = bets.filter(bet => bet.subscribers > 100);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BetMate</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.createBetButton}
            onPress={() => navigation.navigate('CreateBet')}>
            <Text style={styles.createBetButtonText}>Create Bet</Text>
          </TouchableOpacity>
          <View style={styles.iconWithBadge}>
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications-outline" size={28} color="#3498db" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </View>
          <View style={styles.iconWithBadge}>
            <TouchableOpacity style={styles.chatButton}>
              <Icon
                name="chatbubble-ellipses-outline"
                size={28}
                color="#3498db"
              />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#1E88E5" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#AAAAAA"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView style={styles.categoryList}>
        <View style={styles.mostViewedSection}>
          <View style={styles.mostViewedHeaderContainer}>
            <Text style={styles.mostViewedTitle}>Most Viewed</Text>
          </View>
          <ScrollView horizontal style={styles.betsList}>
            {mostViewedBets.map((bet, index) => (
              <BetCard
                key={index}
                bet={bet}
                onPress={() => navigation.navigate('BetDetail', {bet})}
              />
            ))}
          </ScrollView>
        </View>
        {gameCategories.map((category, index) => {
          const categoryBets = filteredBets.filter(
            bet => bet.category === category,
          );
          if (categoryBets.length === 0) return null;
          return (
            <View key={index} style={styles.categoryContainer}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category}</Text>
                <View style={styles.categoryIcons}>
                  <Icon
                    name="information-circle-outline"
                    size={22}
                    color="#3498db"
                    style={styles.categoryIcon}
                  />
                  <View style={styles.betCountContainer}>
                    <Text style={styles.betCountText}>
                      {categoryBets.length}
                    </Text>
                  </View>
                </View>
              </View>
              <ScrollView horizontal style={styles.betsList}>
                {categoryBets.map((bet, betIndex) => (
                  <BetCard
                    key={betIndex}
                    bet={bet}
                    onPress={() => navigation.navigate('BetDetail', {bet})}
                  />
                ))}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="home-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SocialScreen')}>
          <Icon name="refresh-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Icon name="add-circle-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Icon name="trending-up-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate('CreateBet');
            }}>
            <Text style={styles.dropdownItemText}>Create Bet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate('CreatePrediction');
            }}>
            <Text style={styles.dropdownItemText}>Predict</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate('AddPeerRequest');
            }}>
            <Text style={styles.dropdownItemText}>Add P2P Request</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
