import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const MarketScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('My Stocks');

  const tabs = ['My Stocks', 'Players', 'Teams', 'Activities'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications-outline" size={28} color="#1E88E5" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>$90,780.87</Text>
        </View>

        <View style={styles.actionButtonContainer}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonNumber}>$50,000</Text>
            <Text style={styles.actionButtonText}>Invested</Text>
          </View>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonNumber}>$30,000</Text>
            <Text style={styles.actionButtonText}>Earned</Text>
          </View>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonNumber}>200</Text>
            <Text style={styles.actionButtonText}>Shares</Text>
          </View>
          <View style={styles.actionButton}>
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
            style={selectedTab === tab ? styles.tabActive : styles.tab}>
            <Text
              style={
                selectedTab === tab ? styles.tabTextActive : styles.tabText
              }>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>{`Content for ${selectedTab}`}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={25} color="#1E88E5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MarketScreen;
