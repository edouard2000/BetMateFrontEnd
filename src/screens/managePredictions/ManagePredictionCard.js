import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PredictionItem from './PredictionItem';
import styles from './PredictionsScreenStyles';

const ManagePredictionCard = ({ prediction, onDeletePress }) => {
  return (
    <View style={styles.predictionCardContainer}>
      <View style={styles.cardBody}>
        <PredictionItem prediction={prediction} />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="heart-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>{prediction.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="chatbubble-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>{prediction.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={onDeletePress}>
          <Icon name="trash-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ManagePredictionCard;
