// components/Header.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({onSearchPress, onSavePress, onNextPress}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="search-outline" size={20} color="#3498db" />
      </TouchableOpacity>
      <View style={styles.headerButtons}>
        <TouchableOpacity onPress={onSavePress}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNextPress}>
          <Text style={styles.headerButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#151515',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButtonText: {
    color: '#3498db',
    marginHorizontal: 10,
  },
  saveButton: {
    color: 'orange',
    paddingHorizontal: 10,
  }
});

export default Header;
