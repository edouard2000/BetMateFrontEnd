// components/Search.js
import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Search = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search-outline" size={20} color="#1E88E5" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#AAAAAA"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default Search;
