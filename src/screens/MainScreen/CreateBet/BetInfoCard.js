import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';
import {makeGetAddedFixturesByBetId} from '../../../redux/selectors';

const BetInfoCard = ({
  betName,
  balance,
  mode,
  userName,
  onSavePress,
  onPublishPress,
  betId,
}) => {
  const getAddedFixturesByBetId = React.useMemo(
    () => makeGetAddedFixturesByBetId(),
    [],
  );

  const addedFixtures = useSelector(state =>
    getAddedFixturesByBetId(state, betId),
  );
  const addedFixturesCount = Object.keys(addedFixtures).length;

  const avatarUrl = generateAvatarUrl(mode === 'predict' ? userName : betName);
  const teamCountBgColor = mode === 'predict' ? '#E74C3C' : '#3498db';

  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        <View style={styles.userInfo}>
          <Image source={{uri: avatarUrl}} style={styles.avatar} />
          <Text style={styles.userName}>
            {mode === 'predict' ? userName : betName}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          {mode === 'bet' && <Text style={styles.value}>{`$${balance}`}</Text>}
          <View
            style={[
              styles.teamCountContainer,
              {backgroundColor: teamCountBgColor},
            ]}>
            <Text style={styles.teamCount}>{addedFixturesCount}</Text>
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={onPublishPress}>
            <Text style={styles.buttonText}>Publish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    backgroundColor: '#121212',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: 10,
    paddingVertical: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 16,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 14,
    marginHorizontal: 10,
  },
  teamCountContainer: {
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  teamCount: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: '#d35400',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  nextButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});

export default BetInfoCard;
