import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Circle, G, Svg, Text as SvgText} from 'react-native-svg';

const ScoreSection = ({score}) => {
  return (
    <View style={styles.container}>
      <Svg height="150" width="150" viewBox="0 0 100 100">
        <G rotation="-90" origin="50, 50">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e0e0e0"
            strokeWidth="5"
            fill="none"
          />
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="#1E88E5"
            strokeWidth="5"
            strokeDasharray={`${(score / 100) * 282.6}, 282.6`}
            fill="none"
          />
          <SvgText
            x="50"
            y="50"
            textAnchor="middle"
            dy="0.1em"
            fontSize="20"
            fill="#1E88E5"
            transform="rotate(90, 50, 50)">
            {score}
          </SvgText>
          <SvgText
            x="50"
            y="60"
            textAnchor="middle"
            dy="0.3em"
            fontSize="10"
            fill="#1E88E5"
            transform="rotate(90, 50, 50)">
            Score
          </SvgText>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default ScoreSection;
