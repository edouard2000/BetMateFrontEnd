// components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search-outline" size={20} color="#AAAAAA" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search leagues or games"
        placeholderTextColor="#AAAAAA"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  searchInput: {
    color: '#FFFFFF',
    marginLeft: 10,
    flex: 1,
  },
});

export default SearchBar;
