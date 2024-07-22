import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

const FixtureItem = ({item}) => {
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigation();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleRemove = () => {
    // Handle remove fixture logic
    console.log('Remove fixture pressed');
  };

  const handleCustomize = () => {
    navigation.navigate('CustomizeOddsScreen', {odds: item.multipliers});
  };

  return (
    <View style={styles.fixtureCard}>
      <View style={styles.headerRow}>
        <View style={styles.leagueContainer}>
          <Image source={{uri: item.leagueIcon}} style={styles.leagueIcon} />
          <Text style={styles.leagueText}>{item.league}</Text>
        </View>
        <TouchableOpacity
          onPress={handleCustomize}
          style={styles.customizeButton}>
          <Text style={styles.customizeButtonText}>Customize</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Image source={{uri: item.teamAIcon}} style={styles.teamIcon} />
          <Text style={styles.teamName}>TeamA</Text>
        </View>
        <Text style={styles.statusText}>{item.time}</Text>
        <View style={styles.team}>
          <Image source={{uri: item.teamBIcon}} style={styles.teamIcon} />
          <Text style={styles.teamName}>TeamB</Text>
        </View>
      </View>
      {showMore && (
        <View>
          <View style={styles.multipliersContainer}>
            <View style={styles.multiplierBox}>
              <Text style={styles.multiplier}>{item.multipliers.teamA}</Text>
              <Text style={styles.multiplierLabel}>Team A</Text>
            </View>
            <View style={styles.multiplierBox}>
              <Text style={styles.multiplier}>{item.multipliers.draw}</Text>
              <Text style={styles.multiplierLabel}>Draw</Text>
            </View>
            <View style={styles.multiplierBox}>
              <Text style={styles.multiplier}>{item.multipliers.teamB}</Text>
              <Text style={styles.multiplierLabel}>Team B</Text>
            </View>
          </View>
        </View>
      )}
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={toggleShowMore} style={styles.moreButton}>
          <Text style={styles.moreButtonText}>
            {showMore ? 'Less' : 'More'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FixtureItem;
