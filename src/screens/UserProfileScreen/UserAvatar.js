import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserAvatar = ({profilePicture, name}) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{uri: profilePicture}} style={styles.profileImage} />
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'flex-start',
    marginRight: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  userName: {
    color: '#E0E0E0',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
  },
});

export default UserAvatar;
