import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PredictionsScreenStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';
import {
  getResultIcon,
  getBarColor,
  getStatusColor,
  truncateNotes,
} from './utils';

const PredictionItem = ({prediction}) => {
  const [expandedNotes, setExpandedNotes] = useState(false);

  const {result, color} = getResultIcon(prediction.percentages);
  const displayNotes = expandedNotes
    ? prediction.notes
    : truncateNotes(prediction.notes, 30);

  const handleReadMore = () => {
    setExpandedNotes(!expandedNotes);
  };

  return (
    <View style={styles.predictionItem}>
      <View style={styles.predictionActions}>
        <Text
          style={[
            styles.statusText,
            {color: getStatusColor(prediction.status), textAlign: 'right'},
          ]}>
          {prediction.status}
        </Text>
      </View>
      <View style={styles.gameInfo}>
        <View style={styles.teamContainer}>
          <Image
            source={{uri: generateAvatarUrl(prediction.game.split(' vs ')[0])}}
            style={styles.teamAvatar}
          />
          <Text style={styles.gameText}>
            {prediction.game.split(' vs ')[0]}
          </Text>
        </View>
        <Text style={styles.vsText}>vs</Text>
        <View style={styles.teamContainer}>
          <Image
            source={{uri: generateAvatarUrl(prediction.game.split(' vs ')[1])}}
            style={styles.teamAvatar}
          />
          <Text style={styles.gameText}>
            {prediction.game.split(' vs ')[1]}
          </Text>
        </View>
        <Text style={[styles.resultText, {backgroundColor: color}]}>
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
      <Text style={[styles.notes, {marginTop: 10}]}>
        {displayNotes}
        {prediction.notes.length > 30 && (
          <Text onPress={handleReadMore} style={styles.readMoreText}>
            {expandedNotes ? ' show less' : ' read more'}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default PredictionItem;
