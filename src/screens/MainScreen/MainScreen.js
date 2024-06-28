import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Switch,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetCard from '../../components/BetCard';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const { width } = Dimensions.get('window');

const MainScreen = () => {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedTrending, setSelectedTrending] = useState('Bets');
  const [selectedCategory, setSelectedCategory] = useState('All Bets');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTrendingOn, setIsTrendingOn] = useState(true);
  const [activePage, setActivePage] = useState({});

  const gameCategories = [
    'All Bets',
    'Soccer',
    'Basketball',
    'Tennis',
    'Volleyball',
  ];

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
    {
      name: 'Bet 3',
      slogan: 'Stunning match',
      category: 'Soccer',
      teamCount: 6,
      peopleBetted: 120,
      isFull: false,
      subscribers: 180,
      scores: '100-95',
      closingTime: '2024-05-31 16:00',
      remainingBalance: 200,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    {
      name: 'Bet 4',
      slogan: 'Unforgettable match',
      category: 'Soccer',
      teamCount: 5,
      peopleBetted: 140,
      isFull: false,
      subscribers: 160,
      scores: '92-88',
      closingTime: '2024-05-31 14:00',
      remainingBalance: 100,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    {
      name: 'Bet 5',
      slogan: 'Amazing match',
      category: 'Soccer',
      teamCount: 6,
      peopleBetted: 160,
      isFull: false,
      subscribers: 180,
      scores: '98-90',
      closingTime: '2024-05-31 12:00',
      remainingBalance: 50,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    {
      name: 'Bet 6',
      slogan: 'Excellent match',
      category: 'Soccer',
      teamCount: 4,
      peopleBetted: 100,
      isFull: false,
      subscribers: 150,
      scores: '85-87',
      closingTime: '2024-05-31 10:00',
      remainingBalance: 200,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    {
      name: 'Bet 7',
      slogan: 'Fantastic match',
      category: 'Soccer',
      teamCount: 5,
      peopleBetted: 120,
      isFull: false,
      subscribers: 180,
      scores: '102-98',
      closingTime: '2024-05-31 08:00',
      remainingBalance: 50,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    {
      name: 'Bet 8',
      slogan: 'Superb match',
      category: 'Soccer',
      teamCount: 6,
      peopleBetted: 140,
      isFull: false,
      subscribers: 160,
      scores: '96-94',
      closingTime: '2024-05-31 06:00',
      remainingBalance: 100,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    },
    {
      name: 'Bet 9',
      slogan: 'Brilliant match',
      category: 'Soccer',
      teamCount: 4,
      peopleBetted: 100,
      isFull: false,
      subscribers: 150,
      scores: '85-87',
      closingTime: '2024-05-31 04:00',
      remainingBalance: 200,
      totalBalance: 1000,
      logo: null,
      isAdmin: false,
    }
  ];

  const filteredBets =
    selectedCategory === 'All Bets'
      ? bets
      : bets.filter(bet => bet.category === selectedCategory);

  const handleScroll = (event, rowIndex) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width);
    setActivePage(prevState => ({
      ...prevState,
      [rowIndex]: page,
    }));
  };

  const renderBetRow = (bets, rowIndex) => (
    <View key={rowIndex} style={styles.betRowContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={event => handleScroll(event, rowIndex)}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {bets.map((bet, index) => (
          <View key={index} style={styles.betCardContainer}>
            <BetCard
              bet={bet}
              onPress={() => navigation.navigate('BetDetail', { bet })}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {[...Array(Math.ceil(bets.length / 4)).keys()].map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor:
                  activePage[rowIndex] === index ? '#1E88E5' : '#CCCCCC',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );

  const rows = [];
  for (let i = 0; i < filteredBets.length; i += 4) {
    rows.push(renderBetRow(filteredBets.slice(i, i + 4), i / 4));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BetMate</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.createBetButton}
            onPress={() => navigation.navigate('CreateBet')}
          >
            <Text style={styles.createBetButtonText}>Create Bet</Text>
          </TouchableOpacity>
          <View style={styles.iconWithBadge}>
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications-outline" size={28} color="#1E88E5" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </View>
          <View style={styles.iconWithBadge}>
            <TouchableOpacity style={styles.chatButton}>
              <Icon name="chatbubble-ellipses-outline" size={28} color="#1E88E5" />
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
      <View style={styles.trendingSwitchContainer}>
        <Switch
          value={isTrendingOn}
          onValueChange={setIsTrendingOn}
          trackColor={{ false: '#767577', true: '#1E88E5' }}
          thumbColor={isTrendingOn ? '#ffffff' : '#f4f3f4'}
          style={styles.switch}
        />
        <Text style={styles.switchLabel}>Trending</Text>
      </View>
      {isTrendingOn && (
        <View style={styles.trendingSection}>
          <View style={styles.trendingHeader}>
            {['Bets', 'P2P'].map(title => (
              <TouchableOpacity
                key={title}
                onPress={() => setSelectedTrending(title)}
                style={
                  selectedTrending === title
                    ? styles.trendingTitleActive
                    : styles.trendingTitle
                }
              >
                <Text style={styles.trendingText}>{title}</Text>
                {selectedTrending === title && (
                  <View style={styles.activeIndicator} />
                )}
              </TouchableOpacity>
            ))}
            <View style={styles.trendingNavIcons}>
              <TouchableOpacity onPress={() => handleNavigation('left')}>
                <Icon name="chevron-back-outline" size={24} color="#1E88E5" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('right')}>
                <Icon
                  name="chevron-forward-outline"
                  size={24}
                  color="#1E88E5"
                />
              </TouchableOpacity>
            </View>
          </View>
          {selectedTrending === 'Bets' && (
            <ScrollView horizontal style={styles.betsList}>
              {filteredBets.map((bet, index) => (
                <BetCard
                  key={index}
                  bet={bet}
                  onPress={() => navigation.navigate('BetDetail', { bet })}
                />
              ))}
            </ScrollView>
          )}
        </View>
      )}
      <View style={styles.categoryHeader}>
        <ScrollView horizontal style={styles.categoryList}>
          {gameCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(category)}
              style={styles.categoryTitle}
            >
              <Text
                style={
                  selectedCategory === category
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {category}
              </Text>
              {selectedCategory === category && (
                <View style={styles.activeCategoryIndicator} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal={false}
        nestedScrollEnabled
      >
        {rows}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="home-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SocialScreen')}>
          <Icon name="sync-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Icon name="add-circle" size={35} color="#1E88E5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PeerToPeer')}>
          <Icon name="people-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-circle-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate('CreateBet');
            }}
          >
            <Text style={styles.dropdownItemText}>Create Bet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate('CreatePrediction');
            }}
          >
            <Text style={styles.dropdownItemText}>Predict</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setDropdownVisible(false);
              navigation.navigate('#');
            }}
          >
            <Text style={styles.dropdownItemText}>Join MarketPlace</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
