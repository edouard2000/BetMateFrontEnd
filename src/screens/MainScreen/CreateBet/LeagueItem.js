import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {addFixture, removeFixture} from '../../../redux/slices/fixtureSlice';
import {formatTime, formatDate} from '../../../utils/formatTimeAndDate';

const LeagueItem = ({league, navigation, betId, mode}) => {
  if (!league) return null;

  const leagueId = league._id;
  const leagueLogo = league.leagueLogo || '';
  const leagueName = league.leagueName || 'Unknown League';
  const countryName = league.countryName || 'Unknown Country';
  const navigationIconColor = mode === 'predict' ? '#E74C3C' : '#3498db';

  const dispatch = useDispatch();
  const addedFixtures = useSelector(state => state.fixtures.fixtures);

  const handleAddFixture = fixtureId => {
    dispatch(addFixture(fixtureId));
  };

  const handleRemoveFixture = fixtureId => {
    dispatch(removeFixture(fixtureId));
  };

  return (
    <View style={styles.leagueContainer}>
      <View style={styles.leagueHeader}>
        <Image source={{uri: leagueLogo}} style={styles.leagueLogo} />
        <View style={styles.leagueTitle}>
          <Text style={styles.leagueName}>{leagueName}</Text>
          <Text style={styles.countryName}>{countryName}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LeagueDetailScreen', {
              leagueId: leagueId,
              leagueName: leagueName,
              mode,
              betId,
            });
          }}>
          <Icon
            name="chevron-forward-outline"
            size={20}
            color={navigationIconColor}
          />
        </TouchableOpacity>
      </View>
      {league.fixtures && league.fixtures.length > 0 ? (
        league.fixtures.slice(0, 5).map((fixture, index) => {
          const homeTeamName = fixture.homeTeam?.name || 'Unknown Home Team';
          const awayTeamName = fixture.awayTeam?.name || 'Unknown Away Team';
          const homeLogo = fixture.homeTeam?.logo || '';
          const awayLogo = fixture.awayTeam?.logo || '';

          const isFixtureAdded = addedFixtures[fixture.id]?.added;

          return (
            <View key={index} style={styles.gameContainer}>
              <View>
                <Text style={styles.gameTime}>{formatTime(fixture.date)}</Text>
                <Text style={styles.gameDate}>{formatDate(fixture.date)}</Text>
              </View>
              <View style={styles.teamsContainer}>
                <View style={styles.team}>
                  <Image source={{uri: homeLogo}} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{homeTeamName}</Text>
                </View>
                <View style={styles.team}>
                  <Image source={{uri: awayLogo}} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{awayTeamName}</Text>
                </View>
              </View>
              {mode === 'bet' && (
                <TouchableOpacity
                  style={[
                    styles.button,
                    isFixtureAdded ? styles.removeButton : styles.addButton,
                  ]}
                  onPress={() =>
                    isFixtureAdded
                      ? handleRemoveFixture(fixture.id)
                      : handleAddFixture(fixture.id)
                  }>
                  <Text style={styles.buttonText}>
                    {isFixtureAdded ? 'Remove' : 'Add'}
                  </Text>
                </TouchableOpacity>
              )}
              {mode === 'predict' && (
                <TouchableOpacity style={styles.predictButton}>
                  <Text style={styles.predictButtonText}>Predict</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })
      ) : (
        <Text style={styles.noFixturesText}>No fixtures available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leagueContainer: {
    backgroundColor: '#151515',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  leagueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leagueLogo: {
    width: 25,
    height: 25,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  leagueTitle: {
    flex: 1,
    marginLeft: 10,
  },
  leagueName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryName: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  noFixturesText: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 10,
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#121212',
    borderRadius: 10,
  },
  gameTime: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  gameDate: {
    color: 'gray',
    fontSize: 12,
  },
  teamsContainer: {
    flex: 1,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10,
    marginVertical: 3,
  },
  teamName: {
    color: '#FFFFFF',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: '#3498db',
  },
  removeButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  predictButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  predictButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LeagueItem;
