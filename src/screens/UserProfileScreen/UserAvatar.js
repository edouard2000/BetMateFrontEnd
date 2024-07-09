import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const UserAvatar = ({ profilePicture }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: profilePicture }} style={styles.profileImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});

export default UserAvatar;
