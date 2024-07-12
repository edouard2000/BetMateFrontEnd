import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import GeneralInfoSection from './GeneralInfoSection';
import BalanceOverviewSection from './BalanceOverviewSection';
import StatisticsSection from './StatisticsSection';
import styles from './styles';

const BetDetailInfoScreen = ({route}) => {
  const {bet} = route.params;
  const remainingBalance = isNaN(bet.remainingBalance)
    ? 0
    : bet.remainingBalance;
  const totalBalance = isNaN(bet.totalBalance) ? 1 : bet.totalBalance;
  const progress = remainingBalance / totalBalance;

  const formatTime = datetime => {
    const time = new Date(datetime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    return time;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <GeneralInfoSection bet={bet} formatTime={formatTime} />
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>
        <BalanceOverviewSection progress={progress} />
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>
        <StatisticsSection bet={bet} formatTime={formatTime} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BetDetailInfoScreen;
