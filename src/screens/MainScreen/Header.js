// components/Header.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Header = ({onCreateBetPress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        <Text style={styles.titleBet}>Bet</Text>
        <Text style={styles.titleMate}>Mate</Text>
      </Text>
      <View style={styles.headerRight}>
        <TouchableOpacity
          style={styles.createBetButton}
          onPress={onCreateBetPress}>
          <Icon
            name="add-circle-outline"
            size={20}
            color="#ffffff"
            style={styles.plusIcon}
          />
          <Text style={styles.createBetButtonText}>Create Bet</Text>
        </TouchableOpacity>
        <View style={styles.iconWithBadge}>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications-outline" size={28} color="#1E88E5" />
          </TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </View>
        <View style={styles.iconWithBadge}>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => navigation.navigate('GeneralChatScreen')}>
            <Icon
              name="chatbubble-ellipses-outline"
              size={28}
              color="#1E88E5"
            />
          </TouchableOpacity>
          {0 > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{0}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
