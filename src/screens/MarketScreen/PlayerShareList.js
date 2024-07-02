import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import styles from './sharelistStyles';
import dummyPlayerData from './dummyPlayerData';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import PlayerDetail from './PlayerDetail';

const PlayerShareList = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = player => {
    setSelectedPlayer(player);
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
        data={dummyPlayerData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {selectedPlayer && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <PlayerDetail
            player={selectedPlayer}
            onClose={() => setModalVisible(false)}
          />
        </Modal>
      )}
    </View>
  );
};

export default PlayerShareList;
