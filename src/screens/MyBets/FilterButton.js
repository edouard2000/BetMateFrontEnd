import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const FilterButton = ({label, isActive, onPress}) => (
  <TouchableOpacity
    style={[styles.filterButton, isActive && styles.activeFilterButton]}
    onPress={onPress}>
    <Text style={[styles.filterText, isActive && styles.activeFilterText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default FilterButton;
