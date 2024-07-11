import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const statisticsData = [
  {activity: 'Bets', loss: 5, success: 10, total: 15},
  {activity: 'Betting', loss: 3, success: 7, total: 10},
  {activity: 'Predictions', loss: 2, success: 8, total: 10},
  {activity: 'P2P Sent', loss: 4, success: 6, total: 10},
  {activity: 'P2P Received', loss: 1, success: 9, total: 10},
];

const StatisticsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Loss</Text>
        <Text style={styles.headerText}>Success</Text>
        <Text style={styles.headerText}>Total</Text>
      </View>
      {statisticsData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.row,
            index % 2 === 0 ? styles.rowEven : styles.rowOdd,
          ]}>
          <Text style={styles.activityText}>{item.activity}</Text>
          <Text style={styles.lossText}>{item.loss}</Text>
          <Text style={styles.successText}>{item.success}</Text>
          <Text style={styles.totalText}>{item.total}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000000',
    marginVertical: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#696969',
    width: '25%',
    textAlign: 'left',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  rowEven: {
    backgroundColor: '#111111',
  },
  rowOdd: {
    backgroundColor: '#1A1A1A',
  },
  activityText: {
    fontSize: 14,
    color: '#FFFFFF',
    width: '25%',
    textAlign: 'start',
    marginHorizontal: 15,
  },
  lossText: {
    fontSize: 14,
    color: '#B22222',
    width: '25%',
    textAlign: 'start',
  },
  successText: {
    fontSize: 14,
    color: '#27AE60',
    width: '25%',
    textAlign: 'start',
  },
  totalText: {
    fontSize: 14,
    color: '#FFFFFF',
    width: '25%',
    textAlign: 'start',
  },
});

export default StatisticsSection;
