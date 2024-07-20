import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import ListHeaderComponent from './ListHeaderComponent';
import BetItem from './BetItem';
import styles from './Styles';

const BetListScreen = () => {
  const [activePage, setActivePage] = useState({});
  const route = useRoute();
  const navigation = useNavigation();
  const {bet} = route.params || {};

  const handleScroll = (event, rowIndex) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width);
    setActivePage(prevState => ({
      ...prevState,
      [rowIndex]: page,
    }));
  };

  const handleAvatarPress = bet => {
    navigation.navigate('BetDetail', {bet});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate('BetDetail', {bet});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[bet]}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <ListHeaderComponent
            name={bet.name}
            avatar={bet.avatar}
            onAvatarPress={() => handleAvatarPress(bet)}
          />
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
