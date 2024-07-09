import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MateCashCoinsSection = ({mateCash, mateCoins}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.value}>{mateCash}</Text>
        <Text style={styles.label}>MateCash</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.value}>{mateCoins}</Text>
        <Text style={styles.label}>MateCoins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  card: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    color: '#AAAAAA',
    fontSize: 14,
    marginTop: 5,
  },
});

export default MateCashCoinsSection;
