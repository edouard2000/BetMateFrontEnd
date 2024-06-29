import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ReceivedCard = ({bet}) => {
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
          <Text style={styles.footerButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="add-circle" size={20} color="#fff" />
          <Text style={styles.footerButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceivedCard;
