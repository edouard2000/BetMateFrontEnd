import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './headerStyles';

const ListHeaderComponent = ({name, avatar, onAddPress}) => {
  return (
    <View style={styles.headerCard}>
      <View style={styles.headerLeft}>
        <Image source={{uri: avatar}} style={styles.headerLogoIcon} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.betName}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onAddPress} style={styles.addButton}>
        <Icon name="add-circle-outline" size={20} color="#FFF" />
        <Text style={styles.addButtonText}>Fixture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeaderComponent;
