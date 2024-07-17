import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './Styles';

const BetDetailsPopup = ({visible, onClose, details}) => (
  <Modal visible={visible} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Bet Details</Text>
        {details.map((detail, index) => (
          <Text key={index} style={styles.detailText}>
            {detail}
          </Text>
        ))}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default BetDetailsPopup;
