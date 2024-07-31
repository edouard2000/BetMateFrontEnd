import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = ({toggleAddDropdown, toggleMenuDropdown}) => {
  const user = useSelector(state => state.auth.user);
  const navigation = useNavigation();

  const handleNavigate = screen => {
    if (user) {
      navigation.navigate(screen);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => handleNavigate('Main')}>
        <Icon name="home-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('SocialScreen')}>
        <Icon name="sync-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAddDropdown}>
        <Icon name="add-circle" size={35} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigate('P2PBettingScreen')}>
        <Icon name="people-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleMenuDropdown}>
        <Icon name="menu-outline" size={30} color="#1E88E5" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
