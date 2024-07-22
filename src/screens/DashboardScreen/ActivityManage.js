import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ActivityManage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bet</Text>
          <Text style={styles.description}>Manage your bets</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('MyBets')}>
          <Icon name="chevron-forward-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Betting</Text>
          <Text style={styles.description}>Manage your bettings</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BetsParticipatedScreen')}>
          <Icon name="chevron-forward-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Cash Out</Text>
          <Text style={styles.description}>Manage your cash outs</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CashoutScreen')}>
          <Icon name="chevron-forward-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Predictions</Text>
          <Text style={styles.description}>Manage your predictions</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ManagePredictionsScreen')}>
          <Icon name="chevron-forward-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#1E88E5',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: '#CCCCCC',
    fontSize: 10,
  },
});

export default ActivityManage;
