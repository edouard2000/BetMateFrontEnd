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
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#0D0D0D',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default UserProfileHeader;
