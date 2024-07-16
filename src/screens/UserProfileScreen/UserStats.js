import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserStats = ({ Scores, following, followers }) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.stat}>
        <Text style={styles.label}>Scores</Text>
        <Text style={styles.value}>{Scores}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>Following</Text>
        <Text style={styles.value}>{following}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.label}>Followers</Text>
        <Text style={styles.value}>{followers}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  stat: {
    alignItems: 'flex-start',
    marginRight: 20,
  },
  label: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  value: {
    color: '#1E88E5',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserStats;
