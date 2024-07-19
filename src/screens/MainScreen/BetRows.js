import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import BetCard from '../../components/BetCard/BetCard';
import styles from './styles';

const {width} = Dimensions.get('window');

const BetRows = ({bets, handleScroll, activePage, navigation}) => {
  const renderBetRow = (bets, rowIndex, isLastRow) => (
    <View key={rowIndex} style={styles.betRowContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={event => handleScroll(event, rowIndex)}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {bets.map((bet, index) => (
          <View key={index} style={styles.betCardContainer}>
            <BetCard
              bet={bet}
              onPress={() => navigation.navigate('BetDetail', {bet})}
            />
          </View>
        ))}
      </ScrollView>
      {!isLastRow && (
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>
      )}
    </View>
  );

  const rows = [];
  for (let i = 0; i < bets.length; i += 4) {
    rows.push(renderBetRow(bets.slice(i, i + 4), i / 4, i + 4 >= bets.length));
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {rows}
    </ScrollView>
  );
};

export default BetRows;
