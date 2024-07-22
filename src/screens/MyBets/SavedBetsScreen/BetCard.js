import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';

const BetCard = ({bet, isLast}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('FixtureDetailScreen', {bet});
  };

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={handleCardPress}>
        <View style={styles.cardHeader}>
          <View style={styles.headerLeft}>
            <Image
              source={{uri: generateAvatarUrl(bet.name)}}
              style={styles.avatar}
            />
            <Text style={styles.betName}>{bet.name}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.status}>Saved</Text>
            <Text style={styles.amount}>{bet.allocatedAmount}</Text>
          </View>
        </View>
        <View style={styles.bodySection}>
          <Text style={styles.bodyLabel}>
            Teams: <Text style={styles.bodyValue}>{bet.numberOfTeams}</Text>
          </Text>
          <Text style={styles.bodyLabel}>
            People: <Text style={styles.bodyValue}>0</Text>
          </Text>
          <Text style={styles.bodyLabel}>
            Outcome: <Text style={styles.bodyValue}>0</Text>
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="chatbubble-outline" size={18} color="#3498db" />
            <Text style={[styles.footerButtonText, styles.chatButtonText]}>
              Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="create-outline" size={18} color="#FFA500" />
            <Text style={[styles.footerButtonText, styles.editButtonText]}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="eye-outline" size={18} color="#FF0000" />
            <Text style={[styles.footerButtonText, styles.publishButtonText]}>
              Publish
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {!isLast && (
        <View style={styles.lineContainer}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>
      )}
    </>
  );
};

export default BetCard;
