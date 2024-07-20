import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './sharelistStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const ShareList = ({data, renderItemDetail, type}) => {
  const handleItemPress = item => {
    renderItemDetail(item);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}>
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ShareList;
