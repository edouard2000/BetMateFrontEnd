import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StockDetail = ({item, onClose}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Image source={{uri: item.imageUrl}} style={styles.image} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text
              style={[
                styles.recentChange,
                {color: item.isIncrease ? 'green' : 'red'},
              ]}>
              {item.recentChange}
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.label}>Current Share Value:</Text>
            <Text style={styles.value}>${item.price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Selling Price:</Text>
            <Text style={styles.value}>${item.price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Shares:</Text>
            <Text style={styles.value}>{item.totalShares}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Available Shares:</Text>
            <Text style={styles.value}>{item.availableShares}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Selling Shares:</Text>
            <Text style={styles.value}>{item.sellingShares}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#121212',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  recentChange: {
    fontSize: 14,
    marginTop: 5,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  body: {
    padding: 20,
    backgroundColor: '#121212',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#AAAAAA',
  },
  value: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default StockDetail;
