import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import SentCard from './sentCard/sentCard'; // Adjust the import path as needed
import ReceivedCard from './ReceivedCard/ReceivedCard'; // Adjust the import path as needed
import styles from './styles';

const P2PScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Saved');

  const categories = ['All', 'Sent', 'Received'];
  const subCategories = ['Saved', 'Completed'];

  // Mock data for sent bets
  const sentBets = [
    {
      game: 'Game 1',
      amount: 100,
      remainingTime: '2h 30m',
      date: '21 May',
      time: '7 PM',
      joined: 5,
      max: 10,
    },
    // Add more mock data as needed
  ];

  // Mock data for received bets
  const receivedBets = [
    {
      game: 'Game 2',
      amount: 150,
      remainingTime: '1h 15m',
      date: '22 May',
      time: '8 PM',
      joined: 3,
      max: 10,
    },
    // Add more mock data as needed
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.createP2PButton}>
          <Icon name="add-circle" size={20} color="#fff" />
          <Text style={styles.createP2PButtonText}>Create P2P</Text>
        </TouchableOpacity>
      </View>

      {/* First Category Header */}
      <View style={styles.categoryHeader}>
        <ScrollView horizontal style={styles.categoryList}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(category)}
              style={styles.categoryTitle}>
              <Text
                style={
                  selectedCategory === category
                    ? styles.categoryTextActive
                    : styles.categoryText
                }>
                {category}
              </Text>
              {selectedCategory === category && (
                <View style={styles.activeCategoryIndicator} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Second Category Header */}
      <View style={styles.categoryHeader}>
        <ScrollView horizontal style={styles.categoryList}>
          {subCategories.map((subCategory, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedSubCategory(subCategory)}
              style={styles.categoryTitle}>
              <Text
                style={
                  selectedSubCategory === subCategory
                    ? styles.categoryTextActive
                    : styles.categoryText
                }>
                {subCategory}
              </Text>
              {selectedSubCategory === subCategory && (
                <View style={styles.activeCategoryIndicator} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Sent Bets Cards */}
      {selectedCategory === 'Sent' && (
        <ScrollView horizontal>
          {sentBets.map((bet, index) => (
            <SentCard key={index} bet={bet} />
          ))}
        </ScrollView>
      )}

      {/* Received Bets Cards */}
      {selectedCategory === 'Received' && (
        <ScrollView horizontal>
          {receivedBets.map((bet, index) => (
            <ReceivedCard key={index} bet={bet} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default P2PScreen;
