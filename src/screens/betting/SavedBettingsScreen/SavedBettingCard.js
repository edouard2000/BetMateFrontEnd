import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './savedBettingCardStyles';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';

const SavedBettingCard = ({bet, isLast}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('BettingFixtureScreen', {bet});
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
            <View style={styles.headerTextContainer}>
              <Text style={styles.betName}>{bet.name}</Text>
              <Text style={styles.date}>{bet.date}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={[styles.status, styles.statusSaved]}>Saved</Text>
            <Text style={styles.amount}>{bet.amount}</Text>
          </View>
        </View>
        <View style={styles.bodySection}>
          <View style={styles.bodyTextContainer}>
            <Text style={styles.bodyLabel}>
              Payout: <Text style={styles.bodyValue}>{bet.outcome}</Text>
            </Text>
            <Text style={styles.bodyLabel}>
              Teams: <Text style={styles.bodyValue}>{bet.teams}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="checkmark-circle-outline" size={18} color="#2ECC71" />
            <Text style={styles.betButtonText}>Bet</Text>
          </TouchableOpacity>
          <View style={styles.footerButtonsRight}>
            <TouchableOpacity style={styles.footerButton}>
              <Icon name="create-outline" size={18} color="#FFA500" />
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.footerButton, styles.marginLeft]}>
              <Icon name="close-circle-outline" size={18} color="#FF0000" />
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
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

export default SavedBettingCard;
