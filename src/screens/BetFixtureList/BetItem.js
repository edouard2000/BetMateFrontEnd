import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Styles';

const BetItem = ({item}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.betCard}>
      <View style={styles.headerRow}>
        <View style={styles.leagueContainer}>
          <Image source={{uri: item.leagueIcon}} style={styles.leagueIcon} />
          <Text style={styles.leagueText}>{item.league}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            /* Add to bet logic */
          }}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Image source={{uri: item.teamAIcon}} style={styles.teamIcon} />
          <Text style={styles.teamName}>Liverpool</Text>
        </View>
        <Text style={styles.statusText}>{item.time}</Text>
        <View style={styles.team}>
          <Image source={{uri: item.teamBIcon}} style={styles.teamIcon} />
          <Text style={styles.teamName}>Man United</Text>
        </View>
      </View>
      {showMore && (
        <View>
          <View style={styles.multipliersContainer}>
            <View style={styles.multiplierBox}>
              <Text style={styles.multiplier}>{item.multipliers.teamA}</Text>
              <Text style={styles.multiplierLabel}>Liverpool</Text>
            </View>
            <View style={styles.multiplierBox}>
              <Text style={styles.multiplier}>{item.multipliers.draw}</Text>
              <Text style={styles.multiplierLabel}>Draw</Text>
            </View>
            <View style={styles.multiplierBox}>
              <Text style={styles.multiplier}>{item.multipliers.teamB}</Text>
              <Text style={styles.multiplierLabel}>Man United</Text>
            </View>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={toggleShowMore} style={styles.moreButton}>
        <Text style={styles.moreButtonText}>{showMore ? 'Less' : 'More'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BetItem;
