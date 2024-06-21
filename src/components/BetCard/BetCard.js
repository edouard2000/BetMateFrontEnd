import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import formatTime from '../../utils/formatTime';
import styles from './styles';

const BetCard = ({bet}) => {
  const navigation = useNavigation();
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(3);

  const handleMorePress = () => {
    navigation.navigate('BetList');
  };

  const handleChatPress = () => {
    navigation.navigate('Chat', {messages: bet.messages});
  };

  const handleCardPress = () => {
    navigation.navigate('BetDetail', {bet});
  };

  const onCloneBet = () => {};

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.cardContainer}>
      <View style={styles.headerSection}>
        <Image
          source={{uri: generateAvatarUrl(bet.name)}}
          style={styles.avatar}
        />
        <Text style={styles.betName}>{bet.name}</Text>
        <TouchableOpacity>
          <Icon name="notifications" size={20} color="#3498db" />
          {unreadNotificationCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>{unreadNotificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.dot} />
        <View style={styles.horizontalLine} />
        <View style={styles.dot} />
      </View>
      <View style={styles.bodySection}>
        <View style={styles.bodyItem}>
          <Icon name="wallet" size={20} color="#3498db" />
          <Text style={styles.bodyText}>
            Balance:{' '}
            <Text style={styles.highlightedText}>{bet.remainingBalance}</Text>
          </Text>
        </View>
        <View style={styles.bodyItem}>
          <Icon name="people" size={20} color="#3498db" />
          <Text style={styles.bodyText}>
            Teams: <Text style={styles.highlightedText}>{bet.teamCount}</Text>
          </Text>
        </View>
        <View style={styles.bodyItem}>
          <Icon name="checkmark-circle" size={20} color="#3498db" />
          <Text style={styles.bodyText}>
            Status:{' '}
            <Text style={styles.highlightedText}>
              {bet.isFull ? 'Full' : 'Open'}
            </Text>
          </Text>
        </View>
        <View style={styles.bodyItem}>
          <Icon name="time" size={20} color="#3498db" />
          <Text style={styles.bodyText}>
            Last Bet:{' '}
            <Text style={styles.highlightedText}>
              {formatTime(bet.closingTime)}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.footerSection}>
        <TouchableOpacity style={styles.betNowButton} onPress={handleMorePress}>
          <Text style={styles.betNowButtonText}>Bet Now</Text>
        </TouchableOpacity>
        <View style={styles.footerIcons}>
          <TouchableOpacity onPress={onCloneBet}>
            <Icon name="copy-outline" size={20} color="#3498db" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChatPress}>
            <Icon name="chatbubble-outline" size={20} color="#3498db" />
            {bet.messages && bet.messages.length > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>
                  {bet.messages.length > 10 ? '10+' : bet.messages.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="share-social-outline" size={20} color="#3498db" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BetCard;
