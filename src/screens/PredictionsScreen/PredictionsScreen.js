import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './PredictionsScreenStyles';

const dummyData = [
  {
    id: 1,
    user: 'User 1',
    avatar:
      'https://ui-avatars.com/api/?name=User+1&background=random&size=128',
    subscribers: 120,
    bio: 'Expert in soccer predictions',
    predictions: [
      {
        id: 1,
        game: 'Team A vs Team B',
        prediction: 'Team A will win',
        notes: 'Based on recent performance',
        likes: 10,
        comments: 5,
        date: '2024-06-01',
        time: '13:00',
        percentages: {
          team1: 60,
          draw: 20,
          team2: 20,
        },
      },
      {
        id: 2,
        game: 'Team C vs Team D',
        prediction: 'Team D will lose',
        notes: 'Key player injury',
        likes: 8,
        comments: 3,
        date: '2024-06-02',
        time: '16:00',
        percentages: {
          team1: 10,
          draw: 30,
          team2: 50,
        },
      },
      {
        id: 3,
        game: 'Team E vs Team F',
        prediction: 'Team E will win',
        notes: 'Strong home record',
        likes: 15,
        comments: 7,
        date: '2024-06-03',
        time: '14:00',
        percentages: {
          team1: 10,
          draw: 25,
          team2: 20,
        },
      },
    ],
  },
  {
    id: 2,
    user: 'User 2',
    avatar:
      'https://ui-avatars.com/api/?name=User+2&background=random&size=128',
    subscribers: 200,
    bio: 'Basketball prediction specialist',
    predictions: [
      {
        id: 1,
        game: 'Team E vs Team F',
        prediction: 'Team E will win',
        notes: 'Strong home record',
        likes: 15,
        comments: 7,
        date: '2024-06-03',
        time: '14:00',
        percentages: {
          team1: 55,
          draw: 25,
          team2: 20,
        },
      },
      {
        id: 2,
        game: 'Team G vs Team H',
        prediction: 'Team H will lose',
        notes: 'Recent losing streak',
        likes: 12,
        comments: 4,
        date: '2024-06-04',
        time: '18:00',
        percentages: {
          team1: 45,
          draw: 35,
          team2: 20,
        },
      },
    ],
  },
];

const generateAvatarUrl = name => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random&size=128`;
};

const PredictionsScreen = () => {
  const getResultIcon = percentages => {
    if (
      percentages.team1 > percentages.draw &&
      percentages.team1 > percentages.team2
    ) {
      return {result: '1', color: '#1E88E5'};
    } else if (
      percentages.draw > percentages.team1 &&
      percentages.draw > percentages.team2
    ) {
      return {result: 'X', color: '#F39C12'};
    } else {
      return {result: '2', color: '#E74C3C'};
    }
  };

  const getBarColor = (value, percentages) => {
    if (value > percentages.draw && value > percentages.team2) {
      return '#1E88E5';
    } else if (value > percentages.team1 && value > percentages.team2) {
      return '#F39C12';
    } else if (value > percentages.team1 && value > percentages.draw) {
      return '#E74C3C';
    } else {
      return '#E0E0E0';
    }
  };

  const handleMorePress = () => {
    console.log('More predictions');
  };

  return (
    <ScrollView style={styles.container}>
      {dummyData.map((userPrediction, index) => (
        <View key={index}>
          <View style={styles.predictionCardContainer}>
            <View style={styles.cardHeader}>
              <Image
                source={{uri: userPrediction.avatar}}
                style={styles.avatar}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{userPrediction.user}</Text>
              </View>
              <View style={styles.subscriberInfo}>
                <Icon name="people-outline" size={20} color="#1E88E5" />
                <Text style={styles.subscriberCount}>
                  {userPrediction.subscribers}
                </Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <ScrollView>
                {userPrediction.predictions.map((prediction, predIndex) => {
                  const {result, color} = getResultIcon(prediction.percentages);
                  return (
                    <View key={predIndex} style={styles.predictionItem}>
                      <View style={styles.predictionActions}>
                        <TouchableOpacity style={styles.actionButton}>
                          <Icon
                            name="heart-outline"
                            size={20}
                            color="#1E88E5"
                          />
                          <Text style={styles.actionText}>
                            {prediction.likes}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                          <Icon
                            name="chatbubble-outline"
                            size={20}
                            color="#1E88E5"
                          />
                          <Text style={styles.actionText}>
                            {prediction.comments}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Icon
                            name="information-circle-outline"
                            size={20}
                            color="#1E88E5"
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.gameInfo}>
                        <Image
                          source={{
                            uri: generateAvatarUrl(
                              prediction.game.split(' vs ')[0],
                            ),
                          }}
                          style={styles.teamAvatar}
                        />
                        <Text style={styles.gameText}>{prediction.game}</Text>
                        <Image
                          source={{
                            uri: generateAvatarUrl(
                              prediction.game.split(' vs ')[1],
                            ),
                          }}
                          style={styles.teamAvatar}
                        />
                        <Text
                          style={[styles.resultText, {backgroundColor: color}]}>
                          {result}
                        </Text>
                      </View>
                      <Text style={styles.gameTime}>
                        {prediction.date} - {prediction.time}
                      </Text>
                      <View style={styles.percentages}>
                        <Text style={styles.percentageText}>
                          Team A: {prediction.percentages.team1}%
                        </Text>
                        <Text style={styles.percentageText}>
                          Draw: {prediction.percentages.draw}%
                        </Text>
                        <Text style={styles.percentageText}>
                          Team B: {prediction.percentages.team2}%
                        </Text>
                      </View>
                      <View style={styles.progressBars}>
                        <View
                          style={[
                            styles.progressBar,
                            {
                              backgroundColor: getBarColor(
                                prediction.percentages.team1,
                                prediction.percentages,
                              ),
                            },
                          ]}
                        />
                        <View
                          style={[
                            styles.progressBar,
                            {
                              backgroundColor: getBarColor(
                                prediction.percentages.draw,
                                prediction.percentages,
                              ),
                            },
                          ]}
                        />
                        <View
                          style={[
                            styles.progressBar,
                            {
                              backgroundColor: getBarColor(
                                prediction.percentages.team2,
                                prediction.percentages,
                              ),
                            },
                          ]}
                        />
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
              {userPrediction.predictions.length > 2 && (
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={handleMorePress}>
                  <Text style={styles.moreButtonText}>More</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.footerButton}>
                <Icon name="heart-outline" size={20} color="#1E88E5" />
                <Text style={styles.footerButtonText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Icon name="chatbubble-outline" size={20} color="#1E88E5" />
                <Text style={styles.footerButtonText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Icon name="person-add-outline" size={20} color="#1E88E5" />
                <Text style={styles.footerButtonText}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
          {index < dummyData.length - 1 && (
            <View style={styles.lineContainer}>
              <View style={styles.dot} />
              <View style={styles.horizontalLine} />
              <View style={styles.dot} />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default PredictionsScreen;
