import React from 'react';
import {View, StyleSheet, Switch, Platform} from 'react-native';

const Header = ({isScoreSectionVisible, setIsScoreSectionVisible}) => {
  return (
    <View style={styles.headerContainer}>
      <Switch
        value={isScoreSectionVisible}
        onValueChange={value => setIsScoreSectionVisible(value)}
        style={styles.switch}
        thumbColor="white"
        trackColor={{false: '#767577', true: '#1E88E5'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  switch: {
    marginRight: 3,
    transform: [
      {scaleX: Platform.OS === 'android' ? 0.9 : 0.6},
      {scaleY: Platform.OS === 'android' ? 0.9 : 0.6},
    ],
  },
});

export default Header;
