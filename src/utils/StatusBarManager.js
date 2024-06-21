// src/components/StatusBarManager.js
import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

const StatusBarManager = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default StatusBarManager;
