import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './sharelistStyles';
import dummyPlayerData from './dummyPlayerData'; // Use different dummy data
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const PlayerShareList = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetailPage', {item})}>
      <Image
        source={{uri: generateAvatarUrl(item.name) || item.imageUrl}}
        style={styles.avatar}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.shareValue}>${item.shareValue}</Text>
      <Text
        style={[
          styles.recentChange,
          {color: item.isIncrease ? 'green' : 'red'},
        ]}>
        {item.recentChange}
      </Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dummyPlayerData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default PlayerShareList;
