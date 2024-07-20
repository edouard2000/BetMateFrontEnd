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
import styles from './StockDetailScreenStyles';

const StockDetailScreen = ({route, navigation}) => {
  const {stock} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{uri: stock.imageUrl}} style={styles.avatar} />
        <Text style={styles.balanceText}>${stock.value}</Text>
        <Text
          style={[
            styles.recentChange,
            {color: stock.isIncrease ? 'green' : 'red'},
          ]}>
          {stock.recentChange}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {stock.player && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Information</Text>
            </View>
            <View style={styles.sectionContent}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>{stock.player.name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>League:</Text>
                <Text style={styles.infoValue}>{stock.player.league}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Rating:</Text>
                <Text style={styles.infoValue}>{stock.player.rating}</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Data</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Total Shares:</Text>
              <Text style={styles.infoValue}>{stock.shares}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Available Shares:</Text>
              <Text style={styles.infoValue}>{stock.availableShares}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Current Price:</Text>
              <Text style={styles.infoValue}>${stock.shareValue}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Original Price:</Text>
              <Text style={styles.infoValue}>${stock.originalPrice}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Demand:</Text>
              <Text style={styles.infoValue}>{stock.demand}</Text>
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
          style={[styles.footerButton, styles.footerButtonCenter]}
          onPress={() => alert('Withdraw')}>
          <Icon name="chevron-down-outline" size={20} color="#3498db" />
          <Text style={styles.footerButtonText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.footerButtonRight]}
          onPress={() => alert('Trade')}>
          <Icon name="chevron-forward-outline" size={20} color="#3498db" />
          <Text style={styles.footerButtonText}>Trade</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StockDetailScreen;
