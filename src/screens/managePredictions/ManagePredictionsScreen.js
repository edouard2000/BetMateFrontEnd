import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import FilterButton from './FilterButton';
import ManagePredictionCard from './ManagePredictionCard';
import dummyPredictions from './dummyPredictions';
import styles from './PredictionsScreenStyles';

const ManagePredictionsScreen = ({navigation}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPredictions = () => {
    if (activeFilter === 'all') {
      return dummyPredictions;
    }
    if (activeFilter === 'pending') {
      return dummyPredictions.filter(
        prediction => prediction.status === 'pending',
      );
    }
    if (activeFilter === 'completed') {
      return dummyPredictions.filter(prediction =>
        ['success', 'failed'].includes(prediction.status),
      );
    }
    return dummyPredictions;
  };

  const handleDeletePress = predictionId => {
    // Handle delete prediction logic here
    console.log(`Delete prediction with id: ${predictionId}`);
  };

  const handleEditPress = predictionId => {
    // Handle edit prediction logic here
    console.log(`Edit prediction with id: ${predictionId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        {['all', 'pending', 'completed'].map(filter => (
          <FilterButton
            key={filter}
            label={filter.charAt(0).toUpperCase() + filter.slice(1)}
            isActive={activeFilter === filter}
            onPress={() => setActiveFilter(filter)}
          />
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredPredictions().map((prediction, index) => (
          <View key={prediction.id}>
            <ManagePredictionCard
              prediction={prediction}
              onEditPress={() => handleEditPress(prediction.id)}
              onDeletePress={() => handleDeletePress(prediction.id)}
            />
            {index < filteredPredictions().length - 1 && (
              <View style={styles.lineContainer}>
                <View style={styles.dot} />
                <View style={styles.horizontalLine} />
                <View style={styles.dot} />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.bottomNavButton}
          onPress={() => navigation.navigate('DashboardScreen')}>
          <Text style={styles.bottomNavButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavButton}
          onPress={() => console.log('Predict button pressed')}>
          <Text style={styles.bottomNavButtonText}>Predict</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManagePredictionsScreen;
