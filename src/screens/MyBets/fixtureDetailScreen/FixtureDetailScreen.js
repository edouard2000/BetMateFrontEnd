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
import FixtureItem from './FixtureItem';
import styles from './fixtureDetailStyles';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';

const FixtureDetailScreen = () => {
  const [activePage, setActivePage] = useState({});
  const route = useRoute();
  const navigation = useNavigation();
  const {bet} = route.params || {};

  const handleAvatarPress = fixture => {};

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    // Handle save action
    console.log('Save button pressed');
  };

  const handleAddFixture = () => {
    // Handle add fixture action
    console.log('Add fixture pressed');
  };

  if (!bet) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Bet data not available.</Text>
        </View>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={handleBack} style={styles.navButton}>
            <Text style={styles.navButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bet.fixtures}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <ListHeaderComponent
            name={bet.name}
            avatar={generateAvatarUrl(bet.name)}
            onAvatarPress={() => handleAvatarPress(bet.fixtures[0])}
            onAddPress={handleAddFixture}
          />
        }
        renderItem={({item}) => (
          <FixtureItem item={item} navigation={navigation} />
        )}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleBack} style={styles.navButton}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.navButton}>
          <Text style={styles.navButtonText}>Create Bet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FixtureDetailScreen;
