import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const GeneralInfoSection = ({bet, formatTime}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>General Information</Text>
      <View style={styles.sectionContent}>
        <View style={styles.infoRow}>
          <Icon name="information-circle" size={20} color="#3498db" />
          <Text style={styles.infoLabel}>Bet Name:</Text>
          <Text style={styles.infoValue}>{bet.name || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="list" size={20} color="#3498db" />
          <Text style={styles.infoLabel}>Category:</Text>
          <Text style={styles.infoValue}>{bet.category || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="time" size={20} color="#3498db" />
          <Text style={styles.infoLabel}>Closing Time:</Text>
          <Text style={styles.infoValue}>
            {bet.closingTime ? formatTime(bet.closingTime) : 'N/A'}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="wallet" size={20} color="#3498db" />
          <Text style={styles.infoLabel}>Remaining Balance:</Text>
          <Text style={styles.infoValue}>{bet.remainingBalance || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="people" size={20} color="#3498db" />
          <Text style={styles.infoLabel}>People Betted:</Text>
          <Text style={styles.infoValue}>{bet.peopleBetted || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="checkmark-circle" size={20} color="#3498db" />
          <Text style={styles.infoLabel}>Status:</Text>
          <Text style={styles.infoValue}>{bet.isFull ? 'Full' : 'Open'}</Text>
        </View>
      </View>
    </View>
  );
};

export default GeneralInfoSection;
