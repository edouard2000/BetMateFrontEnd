import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import PlayerShareList from './PlayerShareList';
import TeamShareList from './TeamShareList';
import StockList from './StockList';
import ActivitiesList from './ActivitiesList';

const MarketScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Assets');

  const tabs = ['Assets', 'Players', 'Teams', 'Activities'];

  const renderContent = () => {
    switch (selectedTab) {
      case 'Players':
        return <PlayerShareList navigation={navigation} />;
      case 'Teams':
        return <TeamShareList navigation={navigation} />;
      case 'Assets':
        return <StockList navigation={navigation} />;
      case 'Activities':
        return <ActivitiesList navigation={navigation} />;
      default:
        return <Text>{`Content for ${selectedTab}`}</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu-outline" size={28} color="#1E88E5" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications-outline" size={28} color="#1E88E5" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatButton}>
            <Icon
              name="chatbubble-ellipses-outline"
              size={28}
              color="#1E88E5"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topSection}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>$90,780.87</Text>
        </View>

        <View style={styles.actionButtonContainer}>
          <View style={styles.enclosedActionButton}>
            <Text style={styles.actionButtonNumber}>$50,000</Text>
            <Text style={styles.actionButtonText}>Invested</Text>
          </View>
          <View style={styles.enclosedActionButton}>
            <Text style={styles.actionButtonNumber}>$30,000</Text>
            <Text style={styles.actionButtonText}>Earned</Text>
          </View>
          <View style={styles.enclosedActionButton}>
            <Text style={styles.actionButtonNumber}>200</Text>
            <Text style={styles.actionButtonText}>Shares</Text>
          </View>
          <View style={styles.enclosedActionButton}>
            <Text style={styles.actionButtonNumber}>50</Text>
            <Text style={styles.actionButtonText}>Sold</Text>
          </View>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={styles.tab}>
            <View style={[styles.tabWrapper, selectedTab === tab]}>
              <Text
                style={
                  selectedTab === tab ? styles.tabTextActive : styles.tabText
                }>
                {tab}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.listContainer}>
        {renderContent()}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.backButton]}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.withdrawButton]}
          onPress={() => alert('Withdraw MateCash')}>
          <Icon name="chevron-down-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.depositButton]}
          onPress={() => alert('Deposit MateCash')}>
          <Icon name="chevron-up-outline" size={20} color="#FFFFFF" />
          <Text style={styles.footerButtonText}>Deposit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MarketScreen;
