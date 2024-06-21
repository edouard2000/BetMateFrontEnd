import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import dummyUser from './dummyUser';
import styles from './UserDashboardStyles';

const UserDashboard = ({navigation}) => {
  const user = dummyUser;
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    Animated.timing(fadeAnim, {
      toValue: isMenuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Icon name="menu-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
      {isMenuVisible && (
        <Animated.View style={[styles.menu, {opacity: fadeAnim}]}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('MyBetsScreen');
            }}>
            <Text style={styles.menuItemText}>Bets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('BetsParticipatedScreen');
            }}>
            <Text style={styles.menuItemText}>Bettings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('MyPredictions');
            }}>
            <Text style={styles.menuItemText}>Predictions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('CashoutRequests');
            }}>
            <Text style={styles.menuItemText}>Cashouts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate('Admin');
            }}>
            <Text style={styles.menuItemText}>Admin</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
      <ScrollView style={styles.scrollView}>
        <View style={[styles.section, styles.coinsSection]}>
          <View style={styles.coinsContainer}>
            <View style={styles.coinBox}>
              <Icon name="cash-outline" size={25} color="#3498db" />
              <Text style={styles.coinTitle}>MateCash</Text>
              <Text style={styles.coinAmount}>${user.realMoney}</Text>
              <View style={styles.coinActions}>
                <TouchableOpacity style={styles.claimButton}>
                  <Text style={styles.coinButtonText}>Claim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rechargeButton}>
                  <Text style={styles.coinButtonText}>Recharge</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.coinBoxRight}>
              <Icon name="wallet-outline" size={25} color="#3498db" />
              <Text style={styles.coinTitle}>MateCoins</Text>
              <Text style={styles.coinAmount}>${user.virtualMoney}</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Statistics</Text>
          <View style={styles.statsRow}>
            <View style={styles.statsBox}>
              <Icon name="bar-chart-outline" size={25} color="#3498db" />
              <Text style={styles.statsValue}>{user.totalBets}</Text>
              <Text style={styles.statsLabel}>Total Bets</Text>
            </View>
            <View style={styles.statsBox}>
              <Icon name="trophy-outline" size={25} color="#3498db" />
              <Text style={styles.statsValue}>{user.totalWins}</Text>
              <Text style={styles.statsLabel}>Wins</Text>
            </View>
            <View style={styles.statsBox}>
              <Icon name="close-circle-outline" size={25} color="#3498db" />
              <Text style={styles.statsValue}>{user.totalLosses}</Text>
              <Text style={styles.statsLabel}>Losses</Text>
            </View>
            <View style={styles.statsBox}>
              <Icon name="cash-outline" size={25} color="#3498db" />
              <Text style={styles.statsValue}>${user.totalEarnings}</Text>
              <Text style={styles.statsLabel}>Earnings</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Peer-to-Peer Betting</Text>
          <TouchableOpacity
            style={styles.activityBox}
            onPress={() => navigation.navigate('InitiateRequest')}>
            <Icon name="send-outline" size={20} color="#3498db" />
            <View>
              <Text style={styles.activityTitle}>Initiate Request</Text>
              <Text style={styles.activitySubtitle}>Start a new request</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.activityBox}
            onPress={() => navigation.navigate('PeerPending')}>
            <Icon name="time-outline" size={20} color="#3498db" />
            <View>
              <Text style={styles.activityTitle}>Pending</Text>
              <Text style={styles.activitySubtitle}>
                Manage pending requests
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.activityBox}
            onPress={() => navigation.navigate('PeerApproved')}>
            <Icon name="checkmark-circle-outline" size={20} color="#3498db" />
            <View>
              <Text style={styles.activityTitle}>Active</Text>
              <Text style={styles.activitySubtitle}>
                Check status of requests
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.activityBox}
            onPress={() => navigation.navigate('PeerCompleted')}>
            <Icon name="checkmark-done-outline" size={20} color="#3498db" />
            <View>
              <Text style={styles.activityTitle}>Completed</Text>
              <Text style={styles.activitySubtitle}>
                View completed requests
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="home-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Icon name="add-circle-outline" size={30} color="#3498db" />
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

export default UserDashboard;
