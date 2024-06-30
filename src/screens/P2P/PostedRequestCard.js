import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './PostedRequestCardStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const PostedRequestCard = ({request}) => {
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
      <View style={styles.tableCell}>
        <TouchableOpacity style={styles.moreButton}>
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
    </View>
  );
};

export default PostedRequestCard;
