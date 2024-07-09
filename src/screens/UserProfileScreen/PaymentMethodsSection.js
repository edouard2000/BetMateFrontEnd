import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';

const PaymentMethodsSection = ({user, navigation}) => {
  return (
    <View style={[styles.section, styles.paymentMethodsSection]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Payment Methods</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPaymentMethods')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContent}>
        <View style={styles.infoRow}>
          <Icon name="call-outline" size={20} color="#1E88E5" />
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoValue}>{user.paymentPhoneNumber}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="card-outline" size={20} color="#1E88E5" />
          <Text style={styles.infoLabel}>Card:</Text>
          <Text style={styles.infoValue}>{user.paymentCard}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="checkmark-circle-outline" size={20} color="#1E88E5" />
          <Text style={styles.infoLabel}>Primary Method:</Text>
          <Text style={styles.infoValue}>{user.primaryPaymentMethod}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentMethodsSection;
