import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CoinSection = ({ matchash, matecoins }) => {
  return (
    <View style={styles.section}>
      <View style={styles.coinContainer}>
        <View style={styles.card}>
          <Text style={styles.coinValue}>${matchash.toFixed(2)}</Text>
          <Text style={styles.coinText}>MateCash</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.smallButton, styles.withdrawButton]}
              onPress={() => alert('Withdraw MateCash')}>
              <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.smallButton, styles.rechargeButton]}
              onPress={() => alert('Recharge MateCash')}>
              <Text style={styles.buttonText}>Deposit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.coinValue}>{matecoins}</Text>
          <Text style={styles.coinText}>MateCoins</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.smallButton, styles.buyButton]}
              onPress={() => alert('Buy MateCoins')}>
              <Text style={styles.buttonText}>Recharge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.smallButton, styles.convertButton]}
              onPress={() => alert('Convert MateCoins')}>
              <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#0D0D0D',
    paddingVertical: 25,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
  },
  coinText: {
    color: '#CCCCCC',
    fontSize: 13,
    marginBottom: 15,
  },
  coinValue: {
    color: '#1E88E5',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 3,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 8,
  },
  rechargeButton: {
    backgroundColor: '#1E88E5',
  },
  withdrawButton: {
    backgroundColor: '#2C2C2C',
  },
  buyButton: {
    backgroundColor: '#2C2C2C',
  },
  convertButton: {
    backgroundColor: '#1E88E5',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default CoinSection;
