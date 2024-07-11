import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

const CoinSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.coinContainer}>
        <View style={styles.card}>
          <Text style={styles.coinValue}>$500.00</Text>
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
              <Text style={styles.buttonText}>Recharge</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.coinValue}>1200</Text>
          <Text style={styles.coinText}>MateCoins</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.smallButton, styles.buyButton]}
              onPress={() => alert('Buy MateCoins')}>
              <Text style={styles.buttonText}>Buy</Text>
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
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#000000',
    paddingVertical: 5,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#1E88E5',
    shadowOpacity: 0.4,
    shadowRadius: 30,
    elevation: 70,
    borderColor: '#3498DB',
  },
  coinText: {
    color: '#CCCCCC',
    fontSize: 12,
    marginBottom: 15,
  },
  coinValue: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  rechargeButton: {
    backgroundColor: '#1E88E5',
  },
  withdrawButton: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  buyButton: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  convertButton: {
    backgroundColor: '#1E88E5',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
});

export default CoinSection;
