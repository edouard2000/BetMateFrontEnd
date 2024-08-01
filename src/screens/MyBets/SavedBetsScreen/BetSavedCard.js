import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import generateAvatarUrl from '../../../utils/generateAvatarUrl';
import { publishBet, unpublishBet } from '../../../redux/slices/getBetSlice';

const BetSavedCard = ({ bet, isLast }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Add this to use navigation

  const handlePublish = () => {
    dispatch(publishBet(bet._id));
  };

  const handleAddFixture = () => {
    // Navigate to AddFixtureScreen with the specified parameters
    navigation.navigate('AddFixtureScreen', {
      betId: bet._id,
      betName: bet.name,
      balance: bet.amountAllocated,
      mode: 'bet',
    });
  };

  return (
    <>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: generateAvatarUrl(bet.name) }}
              style={styles.avatar}
            />
            <Text style={styles.betName}>{bet.name}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.status}>{bet.status}</Text>
            <Text style={styles.amount}>${bet.amountAllocated}</Text>
          </View>
        </View>
        <View style={styles.bodySection}>
          <Text style={styles.bodyLabel}>
            Teams: <Text style={styles.bodyValue}>{bet.fixtures.length}</Text>
          </Text>
          <Text style={styles.bodyLabel}>
            People: <Text style={styles.bodyValue}>{bet.poepleBetted}</Text>
          </Text>
          <Text style={styles.bodyLabel}>
            Outcome: <Text style={styles.bodyValue}>{bet.payout}</Text>
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.footerButton} onPress={handleAddFixture}>
            <Icon name="add-outline" size={18} color="#3498db" />
            <Text style={[styles.footerButtonText, styles.addFixtureText]}>
              Add Fixture
            </Text>
          </TouchableOpacity>
          <View style={styles.rightFooterButtons}>
            <TouchableOpacity style={styles.footerButton}>
              <Icon name="create-outline" size={18} color="#FFA500" />
              <Text style={[styles.footerButtonText, styles.editButtonText]}>
                Edit
              </Text>
            </TouchableOpacity>
            {bet.ispublished ? (
              <TouchableOpacity
                style={styles.footerButton}
                onPress={() => dispatch(unpublishBet(bet._id))}
              >
                <Icon name="eye-off-outline" size={18} color="#FF0000" />
                <Text
                  style={[styles.footerButtonText, styles.unpublishButtonText]}
                >
                  Unpublish
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.footerButton}
                onPress={handlePublish}
              >
                <Icon name="eye-outline" size={18} color="#FF0000" />
                <Text
                  style={[styles.footerButtonText, styles.publishButtonText]}
                >
                  Publish
                </Text>
              </TouchableOpacity>
            )}
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

export default BetSavedCard;
