import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenuStyles from './DropdownMenuStyles';

const DropdownMenu = ({navigation, visible, setVisible}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={DropdownMenuStyles.dropdownMenu}>
      <TouchableOpacity
        style={DropdownMenuStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          navigation.navigate('Profile');
        }}>
        <Icon name="person-outline" size={20} color="#1E88E5" />
        <Text style={DropdownMenuStyles.dropdownMenuItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DropdownMenuStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          navigation.navigate('DashboardScreen');
        }}>
        <Icon name="home-outline" size={20} color="#1E88E5" />
        <Text style={DropdownMenuStyles.dropdownMenuItemText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DropdownMenuStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          navigation.navigate('MarketScreen');
        }}>
        <Icon name="trending-up-outline" size={20} color="#1E88E5" />

        <Text style={DropdownMenuStyles.dropdownMenuItemText}>Market</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownMenu;
