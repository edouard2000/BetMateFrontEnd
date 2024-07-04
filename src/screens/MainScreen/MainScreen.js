import React, {useState, useEffect} from 'react';
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
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import DropdownAdd from '../../components/DropdownMenu/DropdownAdd';
import styles from './styles';
import bets from './bet';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUnreadCount} from '../../store/unreadMessageSlice';

const {width} = Dimensions.get('window');

const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {unreadCount} = useSelector(state => state.unreadMessage);
  const userProfile = useSelector(state => state.user.profile);
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const [addDropdownVisible, setAddDropdownVisible] = useState(false);
  const [selectedTrending, setSelectedTrending] = useState('Bets');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTrendingOn, setIsTrendingOn] = useState(false);
  const [activePage, setActivePage] = useState({});

  const filteredBets = bets;

  const handleScroll = (event, rowIndex) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width);
    setActivePage(prevState => ({
      ...prevState,
      [rowIndex]: page,
    }));
  };

  const renderBetRow = (bets, rowIndex, isLastRow) => {
    return (
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
        {!isLastRow && (
          <View style={styles.lineContainer}>
            <View style={styles.dot} />
            <View style={styles.horizontalLine} />
            <View style={styles.dot} />
          </View>
        )}
      </View>
    );
  };

  const rows = [];
  for (let i = 0; i < filteredBets.length; i += 4) {
    rows.push(
      renderBetRow(
        filteredBets.slice(i, i + 4),
        i / 4,
        i + 4 >= filteredBets.length,
      ),
    );
  }

  const toggleMenuDropdown = () => {
    setMenuDropdownVisible(!menuDropdownVisible);
    if (addDropdownVisible) setAddDropdownVisible(false);
  };

  const toggleAddDropdown = () => {
    setAddDropdownVisible(!addDropdownVisible);
    if (menuDropdownVisible) setMenuDropdownVisible(false);
  };

  useEffect(() => {
    dispatch(fetchUnreadCount(userProfile._id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.titleBet}>Bet</Text>
          <Text style={styles.titleMate}>Mate</Text>
        </Text>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.createBetButton}
            onPress={() => navigation.navigate('CreateBet')}>
            <Icon
              name="add-circle-outline"
              size={20}
              color="#ffffff"
              style={styles.plusIcon}
            />
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
            <TouchableOpacity
              style={styles.chatButton}
              onPress={() => navigation.navigate('GeneralChatScreen')}>
              <Icon
                name="chatbubble-ellipses-outline"
                size={28}
                color="#1E88E5"
              />
            </TouchableOpacity>
            {unreadCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{unreadCount}</Text>
              </View>
            )}
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
        <View style={styles.switchContainer}>
          <Switch
            value={isTrendingOn}
            onValueChange={setIsTrendingOn}
            trackColor={{false: '#767577', true: '#1E88E5'}}
            thumbColor={isTrendingOn ? '#ffffff' : '#f4f3f4'}
            style={styles.switch}
          />
          <Text style={styles.switchLabel}>Trending</Text>
        </View>
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
        <TouchableOpacity onPress={toggleAddDropdown}>
          <Icon name="add-circle" size={35} color="#1E88E5" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('P2PBettingScreen')}>
          <Icon name="people-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenuDropdown}>
          <Icon name="menu-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      <DropdownMenu
        navigation={navigation}
        visible={menuDropdownVisible}
        setVisible={setMenuDropdownVisible}
      />
      <DropdownAdd
        navigation={navigation}
        visible={addDropdownVisible}
        setVisible={setAddDropdownVisible}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
