import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './DashboardScreenStyles';
import ScoreSection from './ScoreSection';
import CoinSection from './CoinsSection';
import ActivityManage from './ActivityManage';

const DashboardScreen = ({navigation}) => {
  const [isScoreSectionVisible, setIsScoreSectionVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CoinSection />
        {isScoreSectionVisible && <ScoreSection score={75} />}
        <ActivityManage navigation={navigation} />
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
