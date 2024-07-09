import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserStats = ({balance, following, followers}) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.stat}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>{balance}</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  stat: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  value: {
    color: '#1E88E5',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserStats;
