import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserAvatar from './UserAvatar';
import UserStats from './UserStats';

const UserProfileHeader = ({user}) => {
  return (
    <View style={styles.headerContainer}>
      <UserStats
        balance={user.currentBalance}
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
    marginBottom: 20,
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 10,
  },
});

export default UserProfileHeader;
