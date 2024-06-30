import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './PostedRequestCardStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import PostedRequestModal from './PostedRequestModal';

const PostedRequestCard = ({request}) => {
  const [cardModalVisibility, setCardModalVisibility] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamModalVisible, setTeamModalVisible] = useState(false);

  const showTeamName = team => {
    console.log('Team logo clicked:', team); // Debugging: Log the clicked team
    setTeamName(team);
    setTeamModalVisible(true);
  };

  const gameDate = new Date(request.gameTime);
  const timeString = gameDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateString = gameDate.toLocaleDateString();

  return (
    <View style={styles.tableRow}>
      <View style={styles.tableCell}>
        <Text style={styles.time}>{timeString}</Text>
        <Text style={styles.date}>{dateString}</Text>
      </View>
      <View style={styles.tableCell}>
        <TouchableOpacity onPress={() => showTeamName(request.teamA)}>
          <Image
            source={{uri: generateAvatarUrl(request.teamA)}}
            style={styles.teamLogo}
          />
        </TouchableOpacity>
        <Text style={styles.gameText}>vs</Text>
        <TouchableOpacity onPress={() => showTeamName(request.teamB)}>
          <Image
            source={{uri: generateAvatarUrl(request.teamB)}}
            style={styles.teamLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tableCell}>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => setCardModalVisibility(true)}>
          <Text style={styles.moreButtonText}>More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tableCell}>
        <Text style={styles.amount}>${request.amount}</Text>
      </View>
      <View style={styles.tableCell}>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <PostedRequestModal
        visible={cardModalVisibility}
        onClose={() => setCardModalVisibility(false)}
        request={request}
      />
      <Modal
        transparent={true}
        visible={teamModalVisible}
        onRequestClose={() => setTeamModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setTeamModalVisible(false)}>
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

export default PostedRequestCard;
