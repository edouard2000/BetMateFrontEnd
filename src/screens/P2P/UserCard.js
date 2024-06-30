import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './UserCardStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import {getTimeRemaining} from '../../utils/timeUtils';

const UserCard = ({bet}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [teamName, setTeamName] = useState('');

  const showTeamName = team => {
    setTeamName(team);
    setModalVisible(true);
  };

  const getStatusStyle = status => {
    switch (status) {
      case 'Won':
        return styles.statusWon;
      case 'Lost':
        return styles.statusLost;
      case 'Pending':
        return styles.statusPending;
      default:
        return styles.statusDefault;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.gameInfo}>
          <TouchableOpacity onPress={() => showTeamName(bet.teamA)}>
            <Image
              source={{uri: generateAvatarUrl(bet.teamA)}}
              style={styles.teamLogo}
            />
          </TouchableOpacity>
          <Text style={styles.gameText}>vs</Text>
          <TouchableOpacity onPress={() => showTeamName(bet.teamB)}>
            <Image
              source={{uri: generateAvatarUrl(bet.teamB)}}
              style={styles.teamLogo}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.status, getStatusStyle(bet.status)]}>
          {bet.status}
        </Text>
      </View>
      <Text style={styles.gameTime}>{getTimeRemaining(bet.gameTime)}</Text>
      <View style={styles.peopleJoinedContainer}>
        <Text style={styles.peopleJoined}>All: {bet.joined}</Text>
        <Text style={styles.peopleJoined}>Max: {bet.max}</Text>
        <Icon name="people-outline" size={20} color="#ffffff" />
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.amountBetted}>${bet.amount}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Icon name="close-circle-outline" size={18} color="#FF0000" />
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <Icon name="create-outline" size={18} color="#FFA500" />
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{teamName}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default UserCard;
