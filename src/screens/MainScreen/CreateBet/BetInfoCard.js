// components/BetInfoCard.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BetInfoCard = ({
  betName,
  balance,
  teamCount,
  onSavePress,
  onNextPress,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoValue}>{betName}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Balance:</Text>
        <Text style={styles.infoValue}>${balance}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Teams:</Text>
        <Text style={styles.infoValue}>{teamCount}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={onNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#151515',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 10,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoLabel: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  infoValue: {
    color: 'white',
    fontSize: 12,
    marginLeft: 'auto',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#3498db',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#CC5500',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default BetInfoCard;
