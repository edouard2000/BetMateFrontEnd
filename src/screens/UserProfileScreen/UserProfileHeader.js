import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserAvatar from './UserAvatar';
import UserStats from './UserStats';

const UserProfileHeader = ({user}) => {
  return (
    <View style={styles.headerContainer}>
      <UserStats
        Scores={user.Scores}
        following={user.following}
        followers={user.followers}
      />
      <UserAvatar profilePicture={user.profilePicture} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default UserProfileHeader;
