import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import styles from './activitiesListStyles';
import dummyDataActivities from './dummyDataActivities';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import StockDetail from './StockDetail';

const ActivitiesList = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDetailPress = item => {
    setSelectedItem(item);
    setModalVisible(true);
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
        <Text style={styles.detailButtonText}>Detail</Text>
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
      {selectedItem && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <StockDetail
            item={selectedItem}
            onClose={() => setModalVisible(false)}
          />
        </Modal>
      )}
    </View>
  );
};

export default ActivitiesList;
