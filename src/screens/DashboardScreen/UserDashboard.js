import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MoneySection from '../DashboardScreen/components/MoneySection';
import StatisticsSection from '../DashboardScreen/components/StatisticsSection';
import dummyUser from './dummyUser';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './UserDashboardStyles';

const UserDashboard = ({navigation}) => {
  const user = dummyUser;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={30} color="#3498db" />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.moneySection}>
        <MoneySection user={user} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Recharge</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <StatisticsSection stats={user} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserDashboard;
