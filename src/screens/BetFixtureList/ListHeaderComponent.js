import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

const ListHeaderComponent = ({
  name,
  owner,
  avatar,
  onAvatarPress,
  balance,
  isFull,
}) => (
  <View style={styles.headerCard}>
    <View style={styles.headerLeft}>
      <TouchableOpacity onPress={onAvatarPress}>
        <Image source={{uri: avatar}} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.headerTextContainer}>
        <Text style={styles.betName}>{name}</Text>
        <Text style={styles.ownerName}>{owner}</Text>
      </View>
    </View>
    <View style={styles.headerRight}>
      <View style={styles.statusBalanceContainer}>
        <Text
          style={[
            styles.statusText,
            isFull ? styles.fullStatus : styles.openStatus,
          ]}>
          Status: {isFull ? 'Full' : 'Open'}
        </Text>
        <Text style={styles.balanceText}>Balance: {balance}</Text>
      </View>
    </View>
  </View>
);

export default ListHeaderComponent;
