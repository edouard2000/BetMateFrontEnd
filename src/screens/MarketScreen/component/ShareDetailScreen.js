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
import styles from './ShareDetailScreenStyles'; // Importing the new styles

const ShareDetailScreen = ({route, navigation}) => {
  const {item, type} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.avatar} />
        <Text
          style={[
            styles.recentChange,
            {color: item.isIncrease ? 'green' : 'red'},
          ]}>
          {item.recentChange}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {type === 'team' ? (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Team Information</Text>
            </View>
            <View style={styles.sectionContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>{item.name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>League:</Text>
                <Text style={styles.infoValue}>{item.league}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Season:</Text>
                <Text style={styles.infoValue}>{item.season}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Goals:</Text>
                <Text style={styles.infoValue}>{item.goals}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Wins:</Text>
                <Text style={styles.infoValue}>{item.wins}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Losses:</Text>
                <Text style={styles.infoValue}>{item.losses}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Player Information</Text>
            </View>
            <View style={styles.sectionContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>{item.name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Nationality:</Text>
                <Text style={styles.infoValue}>{item.nationality}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Team:</Text>
                <Text style={styles.infoValue}>{item.team}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Age:</Text>
                <Text style={styles.infoValue}>{item.age}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Position:</Text>
                <Text style={styles.infoValue}>{item.position}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Goals:</Text>
                <Text style={styles.infoValue}>{item.goals}</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Statistics</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Price:</Text>
              <Text style={styles.infoValue}>${item.shareValue}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Available Shares:</Text>
              <Text style={styles.infoValue}>{item.availableShares}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Bought:</Text>
              <Text style={styles.infoValue}>{item.soldShares}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.footerButtonLeft]}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-outline" size={20} color="#3498db" />
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.footerButtonRight]}
          onPress={() => alert('Buy')}>
          <Icon name="chevron-forward-outline" size={20} color="#3498db" />
          <Text style={[styles.footerButtonText, styles.buyButtonText]}>
            Buy
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShareDetailScreen;
