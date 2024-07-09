import React from 'react';
import {View, Text} from 'react-native';
import styles from './StatisticsSectionStyles'; // Create a styles file for this component

const StatisticsSection = ({stats}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Bets</Text>
      <View style={styles.row}>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.totalBets}</Text>
          <Text style={styles.statsLabel}>Total Bets</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.totalWins}</Text>
          <Text style={styles.statsLabel}>Wins</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.totalLosses}</Text>
          <Text style={styles.statsLabel}>Losses</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>${stats.totalEarnings}</Text>
          <Text style={styles.statsLabel}>Earnings</Text>
        </View>
      </View>
    </View>
    
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Engagement</Text>
      <View style={styles.row}>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.totalPredictions}</Text>
          <Text style={styles.statsLabel}>Predictions</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.subscriptions}</Text>
          <Text style={styles.statsLabel}>Subscriptions</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.reBets}</Text>
          <Text style={styles.statsLabel}>Rebets</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.bettings}</Text>
          <Text style={styles.statsLabel}>Bettings</Text>
        </View>
      </View>
    </View>
    
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Investments</Text>
      <View style={styles.row}>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>{stats.playerShares}</Text>
          <Text style={styles.statsLabel}>Player Shares</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>${stats.invested}</Text>
          <Text style={styles.statsLabel}>Invested</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>${stats.p2pSent}</Text>
          <Text style={styles.statsLabel}>P2P Sent</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsValue}>${stats.p2pReceived}</Text>
          <Text style={styles.statsLabel}>P2P Received</Text>
        </View>
      </View>
    </View>
  </View>
);

export default StatisticsSection;
