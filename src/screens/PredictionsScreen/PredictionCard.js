import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PredictionItem from './PredictionItem';
import styles from './PredictionsScreenStyles';

const PredictionCard = ({ userPrediction, prediction }) => {
  return (
    <View style={styles.predictionCardContainer}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: userPrediction.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userPrediction.user}</Text>
        </View>
        <View style={styles.subscriberInfo}>
          <Icon name="people-outline" size={20} color="#1E88E5" />
          <Text style={styles.subscriberCount}>{userPrediction.subscribers}</Text>
        </View>
      </View>
      <View style={styles.blackHorizontalLine} />
      <View style={styles.cardBody}>
        <PredictionItem prediction={prediction} />
      </View>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="heart-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="chatbubble-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="person-add-outline" size={20} color="#1E88E5" />
          <Text style={styles.footerButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PredictionCard;
