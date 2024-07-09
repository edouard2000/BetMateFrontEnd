import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';

const PersonalInfoSection = ({user, navigation}) => {
  return (
    <View style={[styles.section, styles.personalInfoSection]}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.infoRow}>
        <Icon name="person-outline" size={20} color="#1E88E5" />
        <Text style={styles.infoLabel}>Username:</Text>
        <Text style={styles.infoValue}>{user.username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditUsername')}>
          <Icon name="create-outline" size={20} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Icon name="mail-outline" size={20} color="#1E88E5" />
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{user.email}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditEmail')}>
          <Icon name="create-outline" size={20} color="#1E88E5" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Icon name="call-outline" size={20} color="#1E88E5" />
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>{user.phone}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditPhone')}>
          <Icon name="create-outline" size={20} color="#1E88E5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfoSection;
