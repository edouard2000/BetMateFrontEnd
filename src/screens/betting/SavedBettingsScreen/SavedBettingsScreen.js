import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import SavedBettingCard from './SavedBettingCard';
import styles from './savedBettingsStyles';
import dummySavedBets from './dummySavedBets';

const SavedBettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {dummySavedBets.map((bet, index, arr) => (
          <SavedBettingCard
            key={bet.id}
            bet={bet}
            isLast={index === arr.length - 1}
          />
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.footerButton}>
          <Text style={[styles.footerButtonText, {color: '#1E88E5'}]}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.footerButton}>
          <Text style={[styles.footerButtonText, {color: '#1E88E5'}]}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SavedBettingsScreen;
