import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './activitiesListStyles';
import dummyData from './dummyData';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const ActivitiesList = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: generateAvatarUrl(item.name) || item.imageUrl}}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.shareValue}</Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('DetailPage', {item})}>
        <Text style={styles.detailButtonText}>Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ActivitiesList;
