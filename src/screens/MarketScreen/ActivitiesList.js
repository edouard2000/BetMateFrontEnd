import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './activitiesListStyles';
import dummyDataActivities from './dummyDataActivities';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const ActivitiesList = ({navigation}) => {
  const handleDetailPress = item => {
    navigation.navigate('ActivityDetailScreen', {item});
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: generateAvatarUrl(item.name) || item.imageUrl}}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => handleDetailPress(item)}>
        <Text style={styles.detailButtonText}>More</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyDataActivities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ActivitiesList;
