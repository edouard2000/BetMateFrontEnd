// components/TrendingSwitch.js
import React from 'react';
import {View, Switch, Text} from 'react-native';
import styles from './styles';

const TrendingSwitch = ({isTrendingOn, setIsTrendingOn}) => {
  return (
    <View style={styles.trendingSwitchContainer}>
      <View style={styles.switchContainer}>
        <Switch
          value={isTrendingOn}
          onValueChange={setIsTrendingOn}
          trackColor={{false: '#767577', true: '#1E88E5'}}
          thumbColor={isTrendingOn ? '#ffffff' : '#f4f3f4'}
          style={styles.switch}
        />
        <Text style={styles.switchLabel}>Trending</Text>
      </View>
    </View>
  );
};

export default TrendingSwitch;
