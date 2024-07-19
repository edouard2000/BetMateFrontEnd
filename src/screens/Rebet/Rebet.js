import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './RebetStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import dummyBets from './dummyBets';

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
            <View style={styles.blackHorizontalLine} />
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
                    <View style={styles.teamContainer}>
                      <Image
                        source={{
                          uri: generateAvatarUrl(game.game.split(' vs ')[0]),
                        }}
                        style={styles.teamAvatar}
                      />
                      <Text style={styles.teamName}>
                        {game.game.split(' vs ')[0]}
                      </Text>
                    </View>
                    <Text style={styles.vsText}>vs</Text>
                    <View style={styles.teamContainer}>
                      <Image
                        source={{
                          uri: generateAvatarUrl(game.game.split(' vs ')[1]),
                        }}
                        style={styles.teamAvatar}
                      />
                      <Text style={styles.teamName}>
                        {game.game.split(' vs ')[1]}
                      </Text>
                    </View>
                    <Text style={styles.betTerm}>{game.betTerm}</Text>
                  </View>
                  <Text style={styles.gameTime}>
                    {new Date(game.gameTime).toLocaleString()}
                  </Text>
                  <View style={styles.oddsContainer}>
                    <View style={styles.oddBox}>
                      <Text style={styles.oddText}>1X</Text>
                      <Text style={styles.oddValue}>{game.odds.team1}</Text>
                    </View>
                    <View style={styles.oddBox}>
                      <Text style={styles.oddText}>X</Text>
                      <Text style={styles.oddValue}>{game.odds.draw}</Text>
                    </View>
                    <View style={styles.oddBox}>
                      <Text style={styles.oddText}>2X</Text>
                      <Text style={styles.oddValue}>{game.odds.team2}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.blackHorizontalLine} />
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
