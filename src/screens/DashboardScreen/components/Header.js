import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './HeaderStyles';

const Header = ({ toggleMenu }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={toggleMenu}>
      <Icon name="menu-outline" size={30} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.title}>Dashboard</Text>
  </View>
);

export default Header;
