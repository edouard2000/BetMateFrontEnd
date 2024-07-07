// components/BetInfoCard.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BetInfoCard = ({
  betName,
  balance,
  teamCount,
  mode,
  onSavePress,
  onNextPress,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Teams:</Text>
        <Text style={styles.value}>{teamCount}</Text>
      </View>
      {mode === 'bet' && (
        <>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Bet Name:</Text>
            <Text style={styles.value}>{betName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Balance:</Text>
            <Text style={styles.value}>${balance}</Text>
          </View>
        </>
      )}
      <View style={styles.buttonContainer}>
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
  card: {
    padding: 10,
    backgroundColor: '#151515',
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  saveButton: {
    backgroundColor: '#3498db',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#d35400',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default BetInfoCard;
