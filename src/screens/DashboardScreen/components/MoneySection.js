import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MoneySectionStyles';

const MoneySection = ({ user }) => (
  <View style={styles.container}>
    <View style={styles.moneyBox}>
      <Text style={styles.moneyTitle}>mateCash</Text>
      <Text style={styles.moneyAmount}>${user.realMoney}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Recharge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.moneyBox}>
      <Text style={styles.moneyTitle}>mateCoins</Text>
      <Text style={styles.moneyAmount}>{user.virtualMoney}</Text>
    </View>
  </View>
);

export default MoneySection;
