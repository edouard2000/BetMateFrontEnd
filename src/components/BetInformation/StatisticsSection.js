import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const StatisticsSection = ({bet, formatTime}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Statistics</Text>
      <View style={styles.sectionContent}>
        <View style={styles.statsRow}>
          <View style={styles.statsBox}>
            <Text style={styles.statsValue}>{bet.teamCount || 'N/A'}</Text>
            <Text style={styles.statsLabel}>Games</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={styles.statsValue}>{bet.peopleBetted || 'N/A'}</Text>
            <Text style={styles.statsLabel}>People Betted</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={styles.statsValue}>
              {bet.isFull ? 'Full' : 'Open'}
            </Text>
            <Text style={styles.statsLabel}>Status</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statsBox}>
            <Text style={styles.statsValue}>{bet.scores || 'N/A'}</Text>
            <Text style={styles.statsLabel}>Scores</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={styles.statsValue}>{bet.subscribers || 'N/A'}</Text>
            <Text style={styles.statsLabel}>Subscribers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={styles.statsValue}>
              {bet.closingTime ? formatTime(bet.closingTime) : 'N/A'}
            </Text>
            <Text style={styles.statsLabel}>Last Betting</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatisticsSection;
