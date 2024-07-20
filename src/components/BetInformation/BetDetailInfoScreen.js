import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import styles from './styles';

const BetDetailInfoScreen = ({route, navigation}) => {
  const {bet} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{uri: generateAvatarUrl(bet.name)}}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Viewers</Text>
            <Text style={styles.statValue}>{bet.viewers || 'N/A'}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Allocated</Text>
            <Text style={styles.statValue}>{bet.allocated || 'N/A'}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Available</Text>
            <Text style={styles.statValue}>{bet.available || 'N/A'}</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Bet Information</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fixtures:</Text>
              <Text style={styles.infoValue}>{bet.fixtures || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Betted People:</Text>
              <Text style={styles.infoValue}>{bet.peopleBetted || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Cash Out:</Text>
              <Text style={styles.infoValue}>{bet.cashOut ? 'Yes' : 'No'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Important Dates</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Posted At:</Text>
              <Text style={styles.infoValue}>{bet.postedAt || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>First Fixture:</Text>
              <Text style={styles.infoValue}>{bet.firstFixture || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Last Fixture:</Text>
              <Text style={styles.infoValue}>{bet.lastFixture || 'N/A'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Bet Statistics</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Highest Bet:</Text>
              <Text style={styles.infoValue}>{bet.highestBet || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Lowest Bet:</Text>
              <Text style={styles.infoValue}>{bet.lowestBet || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Average Bet:</Text>
              <Text style={styles.infoValue}>{bet.averageBet || 'N/A'}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Cloned Count:</Text>
              <Text style={styles.infoValue}>{bet.clonedCount || 'N/A'}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.footerButtonLeft]}
          onPress={() => navigation.navigate('Main')}>
          <Icon name="arrow-undo-outline" size={20} color="#3498db" />
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.footerButtonRight]}
          onPress={() => navigation.navigate('BetListScreen')}>
          <Icon name="chevron-forward-outline" size={20} color="#e74c3c" />
          <Text style={styles.footerButtonText}>Bet Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BetDetailInfoScreen;
