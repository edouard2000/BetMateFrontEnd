import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './PredictionsScreenStyles';
import dummyData from './dummyData';
import PredictionCard from './PredictionCard';

const PredictionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {dummyData.map((userPrediction, userIndex) =>
        userPrediction.predictions.map((prediction, predIndex) => (
          <View key={`${userIndex}-${predIndex}`}>
            <PredictionCard userPrediction={userPrediction} prediction={prediction} />
            <View style={styles.lineContainer}>
              <View style={styles.dot} />
              <View style={styles.horizontalLine} />
              <View style={styles.dot} />
            </View>
          </View>
        )),
      )}
    </ScrollView>
  );
};

export default PredictionsScreen;
