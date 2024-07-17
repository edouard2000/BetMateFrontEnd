import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Styles';

const BetItem = ({
  item,
  getTeams,
  handleMorePress,
  handleAddPress,
  addedBets,
}) => {
  const {teamA, teamB} = getTeams(item.teams);
  const isAdded = addedBets.includes(item.id);

  return (
    <View style={styles.betCard}>
      <View style={styles.headerRow}>
        <View style={styles.leagueContainer}>
          <Image source={{uri: item.leagueIcon}} style={styles.leagueIcon} />
          <Text style={styles.leagueText}>{item.league}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleMorePress(item)}
          style={styles.moreButton}>
          <Icon name="information-circle-outline" size={24} color="#3498db" />
        </TouchableOpacity>
      </View>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Image source={{uri: item.teamAIcon}} style={styles.teamIcon} />
          <Text style={styles.teamName}>{teamA}</Text>
        </View>
        <Text style={styles.vsText}>vs</Text>
        <View style={styles.team}>
          <Image source={{uri: item.teamBIcon}} style={styles.teamIcon} />
          <Text style={styles.teamName}>{teamB}</Text>
        </View>
      </View>
      <View style={styles.multipliersContainer}>
        <View style={styles.multiplierBox}>
          <Text style={styles.multiplier}>{item.multipliers.teamA}</Text>
          <Text style={styles.multiplierLabel}>{teamA}</Text>
        </View>
        <View style={styles.multiplierBox}>
          <Text style={styles.multiplier}>{item.multipliers.draw}</Text>
          <Text style={styles.multiplierLabel}>Draw</Text>
        </View>
        <View style={styles.multiplierBox}>
          <Text style={styles.multiplier}>{item.multipliers.teamB}</Text>
          <Text style={styles.multiplierLabel}>{teamB}</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => handleAddPress(item.id)}
          style={[styles.addButton, isAdded && styles.removeButton]}>
          <Text style={styles.addButtonText}>{isAdded ? 'Remove' : 'Add'}</Text>
        </TouchableOpacity>
        <Text style={styles.betTime}>{item.time}</Text>
      </View>
    </View>
  );
};

export default BetItem;
