import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './stocklistStyles';
import dummyData from './dummyData';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import DetailModal from './DetailModal';

const StockList = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}>
      <Image
        source={{uri: generateAvatarUrl(item.name) || item.imageUrl}}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.shares}>{item.shares} Shares</Text>
        <Text style={styles.shareValue}>${item.shareValue}</Text>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.sellButtonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <DetailModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={selectedItem}
      />
    </View>
  );
};

export default StockList;
