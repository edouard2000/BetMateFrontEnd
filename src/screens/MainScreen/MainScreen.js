import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import bets from './bet';

const {width} = Dimensions.get('window');

const MainScreen = () => {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedTrending, setSelectedTrending] = useState('Bets');
  const [selectedCategory, setSelectedCategory] = useState('All Bets');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTrendingOn, setIsTrendingOn] = useState(false);
  const [activePage, setActivePage] = useState({});

  const gameCategories = [
    'All Bets',
    'Soccer',
    'Basketball',
    'Tennis',
    'Volleyball',
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

  const handleNavigation = direction => {
    const currentIndex = ['Bets', 'P2P'].indexOf(selectedTrending);
    if (direction === 'left' && currentIndex > 0) {
      setSelectedTrending('Bets');
    } else if (direction === 'right' && currentIndex < 1) {
      setSelectedTrending('P2P');
    }
  };

  const renderBetRow = (bets, rowIndex) => (
    <View key={rowIndex} style={styles.betRowContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={event => handleScroll(event, rowIndex)}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {bets.map((bet, index) => (
          <View key={index} style={styles.betCardContainer}>
            <BetCard
              bet={bet}
              onPress={() => navigation.navigate('BetDetail', {bet})}
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
            onPress={() => navigation.navigate('CreateBet')}>
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
              <Icon
                name="chatbubble-ellipses-outline"
                size={28}
                color="#1E88E5"
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
      <View style={styles.trendingSwitchContainer}>
        <Switch
          value={isTrendingOn}
          onValueChange={setIsTrendingOn}
          trackColor={{false: '#767577', true: '#1E88E5'}}
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
                }>
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
                  onPress={() => navigation.navigate('BetDetail', {bet})}
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
              style={styles.categoryTitle}>
              <Text
                style={
                  selectedCategory === category
                    ? styles.categoryTextActive
                    : styles.categoryText
                }>
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
        nestedScrollEnabled>
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
              navigation.navigate('#');
            }}>
            <Text style={styles.dropdownItemText}>Join MarketPlace</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
