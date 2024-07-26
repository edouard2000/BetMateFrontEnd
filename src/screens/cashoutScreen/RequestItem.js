import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import formatTime from '../../utils/formatTimeAndDate';

const RequestItem = ({
  request,
  onAccept,
  onReject,
  onEdit,
  onMore,
  requestType,
}) => (
  <View style={styles.requestItem}>
    <View style={styles.requestInfo}>
      <Image
        source={{uri: generateAvatarUrl(request.name)}}
        style={styles.avatar}
      />
      <View style={styles.userDetails}>
        <Text style={styles.requestName}>{request.name}</Text>
        <Text style={styles.requestTime}>{formatTime(request.time)}</Text>
      </View>
      <Text style={styles.requestAmount}>${request.amount}</Text>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => onMore(request)}>
        <Icon name="information-circle-outline" size={20} color="#1E88E5" />
        <Text style={[styles.buttonText, styles.moreText]}>More</Text>
      </TouchableOpacity>
      {requestType === 'sent' ? (
        <>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onEdit(request)}>
            <Icon name="create-outline" size={20} color="orange" />
            <Text style={[styles.buttonText, styles.editText]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onReject(request)}>
            <Icon name="close-circle-outline" size={20} color="red" />
            <Text style={[styles.buttonText, styles.rejectText]}>Cancel</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onAccept(request)}>
            <Icon name="checkmark-circle-outline" size={20} color="green" />
            <Text style={[styles.buttonText, styles.acceptText]}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onReject(request)}>
            <Icon name="close-circle-outline" size={20} color="red" />
            <Text style={[styles.buttonText, styles.rejectText]}>Reject</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  </View>
);

export default RequestItem;
