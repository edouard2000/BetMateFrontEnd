import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SentCard = ({bet}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerSection}>
        <Text style={styles.gameInfo}>{bet.game}</Text>
        <View style={styles.betInfo}>
          <Text style={styles.betAmount}>${bet.amount}</Text>
          <Text style={styles.remainingTime}>{bet.remainingTime}</Text>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.dateTime}>
          {bet.date} | {bet.time}
        </Text>
      </View>
      <View style={styles.participantSection}>
        <Text style={styles.participantInfo}>
          All: {bet.joined} Max: {bet.max}
        </Text>
        <Icon name="people-outline" size={20} color="#3498db" />
      </View>
      <View style={styles.footerSection}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Invite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SentCard;
