import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './detailModalStyles';
import generateAvatarUrl from '../../utils/generateAvatarUrl';

const DetailModal = ({visible, onClose, item}) => {
  if (!item) return null;

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              {/* Header */}
              <View style={styles.header}>
                <Image
                  source={{uri: generateAvatarUrl(item.name) || item.imageUrl}}
                  style={styles.avatar}
                />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerText}>{item.name}</Text>
                  <Text style={styles.headerSubText}>{item.shares} Shares</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Icon name="close" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              {/* Body */}
              <View style={styles.body}>
                <View style={styles.row}>
                  <Text style={styles.label}>Current Price</Text>
                  <Text style={styles.value}>${item.shareValue}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Original Price</Text>
                  <Text style={styles.value}>${item.originalPrice}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DetailModal;
