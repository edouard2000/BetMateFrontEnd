import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import styles from './styles';

const BalanceOverviewSection = ({progress}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Balance Overview</Text>
      <View style={styles.chartContainer}>
        <Svg width={200} height={200}>
          <G rotation="-90" origin="100, 100">
            <Circle
              cx="100"
              cy="100"
              r="80"
              stroke="#eee"
              strokeWidth="8"
              fill="none"
            />
            <Circle
              cx="100"
              cy="100"
              r="80"
              stroke="#3498db"
              strokeWidth="8"
              fill="none"
              strokeDasharray={2 * Math.PI * 80}
              strokeDashoffset={2 * Math.PI * 80 * (1 - progress)}
            />
          </G>
        </Svg>
        <Text style={styles.chartPercentage}>
          {Math.round(progress * 100)}%
        </Text>
      </View>
    </View>
  );
};

export default BalanceOverviewSection;
