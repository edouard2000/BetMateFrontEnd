import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './TeamDetailStyles';

const TeamDetail = ({team, onClose}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Image source={{uri: team.imageUrl}} style={styles.image} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>{team.name}</Text>
            <Text
              style={[
                styles.recentChange,
                {color: team.isIncrease ? 'green' : 'red'},
              ]}>
              {team.recentChange}
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.label}>League:</Text>
            <Text style={styles.value}>{team.league}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Season:</Text>
            <Text style={styles.value}>{team.season}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Goals:</Text>
            <Text style={styles.value}>{team.goals}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Wins:</Text>
            <Text style={styles.value}>{team.wins}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Losses:</Text>
            <Text style={styles.value}>{team.losses}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeamDetail;
