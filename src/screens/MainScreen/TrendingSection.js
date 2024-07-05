// components/TrendingSection.js
import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BetCard from '../../components/BetCard/BetCard';
import styles from './styles';

const TrendingSection = ({
  isTrendingOn,
  selectedTrending,
  setSelectedTrending,
  filteredBets,
  navigation,
}) => {
  if (!isTrendingOn) return null;

  return (
    <View style={styles.trendingSection}>
      <View style={styles.trendingHeader}>
        {['Bets', 'P2P'].map(title => (
          <TouchableOpacity
            key={title}
            onPress={() => setSelectedTrending(title)}
            style={
              selectedTrending === title
                ? styles.trendingTitleActive
                : styles.trendingTitle
            }>
            <Text style={styles.trendingText}>{title}</Text>
            {selectedTrending === title && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>
        ))}
        <View style={styles.trendingNavIcons}>
          <TouchableOpacity>
            <Icon name="chevron-back-outline" size={24} color="#1E88E5" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chevron-forward-outline" size={24} color="#1E88E5" />
          </TouchableOpacity>
        </View>
      </View>
      {selectedTrending === 'Bets' && (
        <ScrollView horizontal style={styles.betsList}>
          {filteredBets.map((bet, index) => (
            <BetCard
              key={index}
              bet={bet}
              onPress={() => navigation.navigate('BetDetail', {bet})}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TrendingSection;
