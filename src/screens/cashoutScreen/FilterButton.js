import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Styles';

const FilterButton = ({status, activeFilter, setActiveFilter}) => (
  <TouchableOpacity
    key={status}
    style={[
      styles.filterButton,
      activeFilter === status && styles.activeFilterButton,
    ]}
    onPress={() => setActiveFilter(status)}>
    <Text
      style={[
        styles.filterText,
        activeFilter === status && styles.activeFilterText,
      ]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Text>
  </TouchableOpacity>
);

export default FilterButton;
