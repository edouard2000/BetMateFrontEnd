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
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import styles from './ActivityDetailScreenStyles';

const screenWidth = Dimensions.get('window').width;

const ActivityDetailScreen = ({route, navigation}) => {
  const {item} = route.params;

  const data = {
    datasets: [
      {
        data: item.priceHistory,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.avatar} />
          <Text style={styles.name}>{item.name}</Text>
          <Text
            style={[
              styles.recentChange,
              {color: item.isIncrease ? 'green' : 'red'},
            ]}>
            {item.recentChange}
          </Text>
        </View>
        <View style={styles.spacer} />

        <LineChart
          data={data}
          width={screenWidth - 40}
          height={200}
          chartConfig={{
            backgroundColor: '#0D0D0D',
            backgroundGradientFrom: '#0D0D0D',
            backgroundGradientTo: '#0D0D0D',
            color: (opacity = 1) => `rgba(30, 136, 229, ${opacity})`,
            strokeWidth: 2,
            propsForDots: {
              r: '0',
            },
          }}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          bezier
          style={styles.chart}
        />

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Data</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Price:</Text>
              <Text style={styles.infoValue}>${item.price}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Selling Price:</Text>
              <Text style={styles.infoValue}>${item.sellingPrice}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Demand:</Text>
              <Text style={styles.infoValue}>{item.demand}</Text>
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
          <Icon name="chevron-forward-outline" size={20} color="#1E88E5" />
          <Text style={[styles.footerButtonText, styles.buyButtonText]}>
            Buy
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ActivityDetailScreen;
