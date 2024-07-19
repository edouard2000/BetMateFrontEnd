import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
        {filteredPredictions().map(prediction => (
          <ManagePredictionCard
            key={prediction.id}
            prediction={prediction}
            onEditPress={() => handleEditPress(prediction.id)}
            onDeletePress={() => handleDeletePress(prediction.id)}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DashboardScreen')}>
          <Icon name="arrow-undo-outline" size={25} color="#1E88E5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManagePredictionsScreen;
