import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import styles from './styles';

const BetCard = ({bet}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('BetDetail', {bet});
  };

  const handleBetNow = () => {
    navigation.navigate('BetListScreen', {bet});
  };

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
            Balance: <Text style={styles.highlightedText}>{bet.balance}</Text>
          </Text>
        </View>
        <View style={styles.bodyItem}>
          <Icon name="people" size={20} color="#3498db" />
          <Text style={styles.bodyText}>
            Teams: <Text style={styles.highlightedText}>{bet.teams}</Text>
          </Text>
        </View>
        <View style={styles.bodyItem}>
          <Icon name="people-circle" size={20} color="#3498db" />
          <Text style={styles.bodyText}>
            Betted:{' '}
            <Text style={styles.highlightedText}>{bet.peopleBetted}</Text>
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
      </View>
      <View style={styles.footerSection}>
        <TouchableOpacity style={styles.betNowButton} onPress={handleBetNow}>
          <Text style={styles.betNowButtonText}>Bet Now</Text>
        </TouchableOpacity>
        <View style={styles.footerIcons}>
          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="copy-outline" size={20} color="#3498db" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="chatbubble-outline" size={20} color="#3498db" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BetCard;
