import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './RebetStyles';

const dummyBets = [
  {
    user: 'John Doe',
    avatar:
      'https://ui-avatars.com/api/?name=John+Doe&background=random&size=128',
    status: 'Won',
    betAmount: 50,
    time: '2024-06-01T12:00:00Z',
    rebetCount: 10,
    games: [
      {
        game: 'Team A vs Team B',
        betTerm: '1',
        odds: {team1: 2.5, draw: 3.2, team2: 2.8},
        gameTime: '2024-06-01T15:00:00Z',
        currentStatus: 'Completed',
      },
      {
        game: 'Team C vs Team D',
        betTerm: 'X',
        odds: {team1: 1.5, draw: 2.5, team2: 3.0},
        gameTime: '2024-06-01T17:00:00Z',
        currentStatus: 'Won',
      },
    ],
  },
  {
    user: 'Jane Smith',
    avatar:
      'https://ui-avatars.com/api/?name=Jane+Smith&background=random&size=128',
    status: 'Lost',
    betAmount: 30,
    time: '2024-06-01T14:00:00Z',
    rebetCount: 5,
    games: [
      {
        game: 'Team E vs Team F',
        betTerm: 'Over',
        odds: {team1: 1.8, draw: 3.5, team2: 2.2},
        gameTime: '2024-06-01T18:00:00Z',
        currentStatus: 'Pending',
      },
    ],
  },
];

const generateAvatarUrl = name => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random&size=128`;
};

const Rebet = ({navigation}) => {
  const [bets, setBets] = useState(dummyBets);

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
    <ScrollView style={styles.container}>
      {bets.map((bet, index) => (
        <View key={index}>
          <View style={styles.betCard}>
            <View style={styles.statusContainer}>
              <Text style={[styles.status, getStatusStyle(bet.status)]}>
                {bet.status}
              </Text>
            </View>
            <View style={styles.betHeader}>
              <Image source={{uri: bet.avatar}} style={styles.avatar} />
              <View style={styles.headerInfo}>
                <Text style={styles.userName}>{bet.user}</Text>
                <Text style={styles.time}>
                  {new Date(bet.time).toLocaleString()}
                </Text>
              </View>
              <Text style={styles.betAmount}>${bet.betAmount}</Text>
            </View>
            <View style={styles.teamsContainer}>
              {bet.games.map((game, gameIndex) => (
                <View key={gameIndex} style={styles.teamItem}>
                  <View style={styles.statusContainer}>
                    <Text
                      style={[
                        styles.status,
                        getStatusStyle(game.currentStatus),
                      ]}>
                      {game.currentStatus}
                    </Text>
                  </View>
                  <View style={styles.gameHeader}>
                    <Image
                      source={{
                        uri: generateAvatarUrl(game.game.split(' vs ')[0]),
                      }}
                      style={styles.teamAvatar}
                    />
                    <Text style={styles.gameText}>{game.game}</Text>
                    <Image
                      source={{
                        uri: generateAvatarUrl(game.game.split(' vs ')[1]),
                      }}
                      style={styles.teamAvatar}
                    />
                    <Text style={styles.betTerm}>{game.betTerm}</Text>
                  </View>
                  <View style={styles.gameTimeContainer}>
                    <Text style={styles.gameTime}>
                      {new Date(game.gameTime).toLocaleString()}
                    </Text>
                  </View>
                  <View style={styles.oddsContainer}>
                    <Text style={styles.oddText}>x{game.odds.team1}</Text>
                    <Text style={styles.oddText}>x{game.odds.draw}</Text>
                    <Text style={styles.oddText}>x{game.odds.team2}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.footerButton}>
                <Icon name="heart-outline" size={20} color="#1E88E5" />
                <Text style={styles.footerButtonText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Icon name="chatbubble-outline" size={20} color="#1E88E5" />
                <Text style={styles.footerButtonText}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerButton}>
                <Icon name="repeat-outline" size={20} color="#1E88E5" />
                <Text style={styles.footerButtonText}>{bet.rebetCount}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {index < bets.length - 1 && (
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

export default Rebet;
