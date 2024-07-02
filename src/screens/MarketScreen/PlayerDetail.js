import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './PlayerDetailStyles';

const PlayerDetail = ({ player, onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Image source={{ uri: player.imageUrl }} style={styles.image} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>{player.name}</Text>
            <Text style={[styles.recentChange, { color: player.isIncrease ? 'green' : 'red' }]}>
              {player.recentChange}
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.label}>Team:</Text>
            <Text style={styles.value}>{player.team}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{player.age}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Position:</Text>
            <Text style={styles.value}>{player.position}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Goals:</Text>
            <Text style={styles.value}>{player.goals}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Available Shares:</Text>
            <Text style={styles.value}>{player.availableShares}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sold Shares:</Text>
            <Text style={styles.value}>{player.soldShares}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Share Price:</Text>
            <Text style={styles.value}>${player.sharePrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerDetail;
