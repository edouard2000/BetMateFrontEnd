// components/DropdownAdd.js
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownAddStyles from './DropdownAddStyles';

const DropdownAdd = ({navigation, visible, setVisible, toggleModal}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={DropdownAddStyles.dropdownMenu}>
      <TouchableOpacity
        style={DropdownAddStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          toggleModal(); // Show CreateBetModal for "Create Bet"
        }}>
        <Icon name="create-outline" size={20} color="#FFFFFF" />
        <Text style={DropdownAddStyles.dropdownMenuItemText}>Create Bet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DropdownAddStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          navigation.navigate('AddFixtureScreen', {mode: 'predict'});
        }}>
        <Icon name="bulb-outline" size={20} color="#FFFFFF" />
        <Text style={DropdownAddStyles.dropdownMenuItemText}>Predict</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DropdownAddStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          navigation.navigate('AddBalance');
        }}>
        <Icon name="wallet-outline" size={20} color="#FFFFFF" />
        <Text style={DropdownAddStyles.dropdownMenuItemText}>Add Balance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownAdd;
