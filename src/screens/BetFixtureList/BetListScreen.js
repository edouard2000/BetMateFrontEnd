import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import ListHeaderComponent from './ListHeaderComponent';
import BetItem from './BetItem';
import styles from './Styles';

import bets from './bets';


const BetListScreen = ({navigation}) => {
  const [activePage, setActivePage] = useState({});

  const handleScroll = (event, rowIndex) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width);
    setActivePage(prevState => ({
      ...prevState,
      [rowIndex]: page,
    }));
  };

  const handleAvatarPress = bet => {
    navigation.navigate('BetDetailScreen', {bet});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    // Add your next button logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bets}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          bets.length ? (
            <ListHeaderComponent
              name={bets[0].name}
              avatar={bets[0].avatar}
              onAvatarPress={() => handleAvatarPress(bets[0])}
            />
          ) : null
        }
        renderItem={({item}) => <BetItem item={item} navigation={navigation} />}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleBack} style={styles.navButton}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.navButton}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BetListScreen;
