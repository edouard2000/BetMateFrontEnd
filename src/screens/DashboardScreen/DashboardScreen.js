import React from 'react';
import {View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import styles from './DashboardScreenStyles';
import ScoreSection from './ScoreSection';
import CoinSection from './CoinsSection';
import ActivityManage from './ActivityManage';

const DashboardScreen = ({navigation}) => {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CoinSection matchash={user.matchash} matecoins={user.matecoins} />
        <ScoreSection score={user.scores} />
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
