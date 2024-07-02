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
import dummyDataTeams from './dummyDataTeams'; // Use a specific dummy data file for teams
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import TeamDetail from './TeamDetail';

const TeamShareList = ({navigation}) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = team => {
    setSelectedTeam(team);
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
        data={dummyDataTeams}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {selectedTeam && (
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TeamDetail
            team={selectedTeam}
            onClose={() => setModalVisible(false)}
          />
        </Modal>
      )}
    </View>
  );
};

export default TeamShareList;
