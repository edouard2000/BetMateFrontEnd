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
import styles from './PostedRequestModalStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import {getTimeRemaining} from '../../utils/timeUtils';

const PostedRequestModal = ({visible, onClose, request}) => {
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.cardHeader}>
              <View style={styles.gameInfo}>
                <Image
                  source={{uri: generateAvatarUrl(request.teamA)}}
                  style={styles.teamLogo}
                />
                <Text style={styles.gameText}>vs</Text>
                <Image
                  source={{uri: generateAvatarUrl(request.teamB)}}
                  style={styles.teamLogo}
                />
              </View>
              <Text style={[styles.status, styles.statusDefault]}>
                {request.status || 'Pending'}
              </Text>
            </View>
            <Text style={styles.gameTime}>
              {getTimeRemaining(request.gameTime)}
            </Text>
            <View style={styles.peopleJoinedContainer}>
              <Text style={styles.peopleJoined}>
                All: {request.joined || 0}
              </Text>
              <Text style={styles.peopleJoined}>Max: {request.max || 0}</Text>
              <Icon name="people-outline" size={20} color="#ffffff" />
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.amountBetted}>${request.amount}</Text>
              <Text style={styles.betTerms}>{request.betTerms}</Text>
              <TouchableOpacity style={styles.joinButton} onPress={onClose}>
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PostedRequestModal;
