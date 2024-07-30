import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropdownAddStyles from './DropdownAddStyles';

const DropdownAdd = ({navigation, visible, setVisible, toggleModal}) => {
  if (!visible) {
    return null;
  }

  const handleCreateBet = () => {
    setVisible(false);
    toggleModal();
  };

  const handlePredict = () => {
    setVisible(false);
    navigation.navigate('AddFixtureScreen', {mode: 'predict'});
  };

  return (
    <View style={DropdownAddStyles.dropdownMenu}>
      <TouchableOpacity
        style={DropdownAddStyles.dropdownMenuItem}
        onPress={handleCreateBet}>
        <Icon name="create-outline" size={20} color="#1E88E5" />
        <Text style={DropdownAddStyles.dropdownMenuItemText}>Create Bet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DropdownAddStyles.dropdownMenuItem}
        onPress={handlePredict}>
        <Icon name="bulb-outline" size={20} color="#1E88E5" />
        <Text style={DropdownAddStyles.dropdownMenuItemText}>Predict</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={DropdownAddStyles.dropdownMenuItem}
        onPress={() => {
          setVisible(false);
          navigation.navigate('AddBalance');
        }}>
        <Icon name="wallet-outline" size={20} color="#1E88E5" />
        <Text style={DropdownAddStyles.dropdownMenuItemText}>Add Balance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownAdd;
