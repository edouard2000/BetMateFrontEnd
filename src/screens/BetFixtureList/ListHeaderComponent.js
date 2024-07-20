import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Styles';

const ListHeaderComponent = ({name, avatar, onAvatarPress}) => {
  const route = useRoute();
  const {bet} = route.params || {};
  const navigation = useNavigation();

  return (
    <View style={styles.headerCard}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={onAvatarPress}>
          <Image source={{uri: avatar}} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.betName}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BetDetail', {bet});
        }}>
        <Icon name="chevron-forward-outline" size={25} color="#3498db" />
      </TouchableOpacity>
    </View>
  );
};

export default ListHeaderComponent;
