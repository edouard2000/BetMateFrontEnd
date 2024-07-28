import React from 'react';
import {TextInput, StyleSheet, Platform} from 'react-native';

const SearchBar = ({placeholder, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#AAAAAA"
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 6,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
});

export default SearchBar;
