// components/BottomNavigation.js
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const BottomNavigation = ({
  navigation,
  toggleAddDropdown,
  toggleMenuDropdown,
}) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Icon name="home-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SocialScreen')}>
        <Icon name="sync-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAddDropdown}>
        <Icon name="add-circle" size={35} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('P2PBettingScreen')}>
        <Icon name="people-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleMenuDropdown}>
        <Icon name="menu-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
