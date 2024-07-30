import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import generateAvatarUrl from "../../utils/generateAvatarUrl"

const UserAvatar = ({ user }) => {
  const avatarUrl = generateAvatarUrl(user.name); 

  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.profileImage} />
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
    borderRadius: 25,
  },
});

export default UserAvatar;
