import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Styles';

const FooterNav = ({navigation, requestType, setRequestType}) => (
  <View style={styles.footerNav}>
    <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
      <Text style={styles.switchText}>Back</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setRequestType('sent')}
      style={requestType === 'sent'}>
      <Text
        style={[
          styles.switchText,
          requestType === 'sent' && styles.activeSwitchText,
        ]}>
        Sent
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setRequestType('received')}
      style={requestType === 'received'}>
      <Text
        style={[
          styles.switchText,
          requestType === 'received' && styles.activeSwitchText,
        ]}>
        Received
      </Text>
    </TouchableOpacity>
  </View>
);

export default FooterNav;
