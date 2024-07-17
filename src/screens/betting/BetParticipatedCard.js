import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './BetParticipatedCardStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const BetParticipatedCard = ({bet, onCardPress, onCashoutPress, isLast}) => {
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
    <>
      <TouchableOpacity style={styles.card} onPress={onCardPress}>
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
            <Text style={[styles.status, getStatusStyle(bet.status)]}>
              {bet.status}
            </Text>
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
          <TouchableOpacity onPress={onCashoutPress}>
            <Icon name="chevron-forward-outline" size={20} color="#1E88E5" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.footerButtonLeft}>
            <Text style={styles.cashoutButtonText}>Cashout</Text>
          </TouchableOpacity>
          <View style={styles.footerButtonsRight}>
            <TouchableOpacity style={styles.footerButton}>
              <Icon name="create-outline" size={18} color="#FFA500" />
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.footerButton, styles.marginLeft]}>
              <Icon name="close-circle-outline" size={18} color="#FF0000" />
              <Text style={styles.cancelButtonText}>Cancel</Text>
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

export default BetParticipatedCard;
