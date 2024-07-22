import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import styles from './bettingFixtureStyles';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';

const BettingFixtureScreen = ({route, navigation}) => {
  const {bet} = route.params || {};

  const handleAddFixture = () => {
    console.log('Add fixture pressed');
  };

  const handleRemoveFixture = () => {
    console.log('Remove fixture pressed');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Main');
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={{uri: generateAvatarUrl(bet.name)}}
            style={styles.avatar}
          />
          <Text style={styles.betName}>{bet.name}</Text>
          <TouchableOpacity onPress={handleAddFixture} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Fixture</Text>
          </TouchableOpacity>
        </View>
        {bet.fixtures.map((fixture, index) => (
          <View key={fixture.id} style={styles.fixtureCard}>
            <View style={styles.fixtureHeader}>
              <Text
                style={[styles.status, styles[fixture.status.toLowerCase()]]}>
                {fixture.status}
              </Text>
            </View>
            <View style={styles.fixtureContent}>
              <View style={styles.teamContainer}>
                <Image
                  source={{uri: fixture.teamAIcon}}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamName}>{fixture.teamA}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.time}>{fixture.time}</Text>
                <Text style={styles.date}>{fixture.date}</Text>
              </View>
              <View style={styles.teamContainer}>
                <Image
                  source={{uri: fixture.teamBIcon}}
                  style={styles.teamIcon}
                />
                <Text style={styles.teamName}>{fixture.teamB}</Text>
              </View>
            </View>
            <View style={styles.fixtureFooter}>
              <Text style={styles.oddsLabel}>{fixture.oddsLabel}</Text>
              <TouchableOpacity
                onPress={handleRemoveFixture}
                style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleBack} style={styles.navButton}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHome} style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BettingFixtureScreen;
