import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './DashboardScreenStyles';
import StatisticsSection from './StatisticsSection';
import ScoreSection from './ScoreSection';
import CoinSection from './CoinsSection';
import Header from './Header';

const DashboardScreen = ({ navigation }) => {
  const [isScoreSectionVisible, setIsScoreSectionVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        isScoreSectionVisible={isScoreSectionVisible}
        setIsScoreSectionVisible={setIsScoreSectionVisible}
      />
      <CoinSection />
      {isScoreSectionVisible && <ScoreSection score={75} />}
      <ScrollView style={styles.scrollView}>
        <StatisticsSection />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="arrow-undo-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
