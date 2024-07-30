import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';

const PersonalInfoSection = ({ user, navigation }) => {
  return (
    <View style={[styles.section, styles.personalInfoSection]}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditPersonalInfo')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContent}>
        <View style={styles.infoRow}>
          <Icon name="person-outline" size={20} color="#1E88E5" />
          <Text style={styles.infoLabel}>Name:</Text>
          <Text style={styles.infoValue}>{user.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="mail-outline" size={20} color="#1E88E5" />
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
          {user.isEmailVerified ? (
            <Text style={styles.verifyText}>Verified</Text>
          ) : (
            <TouchableOpacity>
              <Text style={styles.verifyButton}>Verify</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.infoRow}>
          <Icon name="call-outline" size={20} color="#1E88E5" />
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>{user.phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfoSection;
