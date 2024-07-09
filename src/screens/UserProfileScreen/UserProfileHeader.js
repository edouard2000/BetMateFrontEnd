import React from 'react';
import {View, StyleSheet} from 'react-native';
import UserAvatar from './UserAvatar';
import UserStats from './UserStats';

const UserProfileHeader = ({user}) => {
  return (
    <View style={styles.headerContainer}>
      <UserAvatar profilePicture={user.profilePicture} name={user.name} />
      <UserStats
        balance={user.currentBalance}
        following={user.following}
        followers={user.followers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default UserProfileHeader;
