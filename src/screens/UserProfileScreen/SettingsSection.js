import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';

const SettingsSection = ({ navigation, handleLogout }) => {
  return (
    <View style={[styles.section, styles.settingsSection]}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
      </View>
      <TouchableOpacity
        style={styles.settingsItem}
        onPress={() => navigation.navigate('EditAbout')}>
        <Icon name="information-circle-outline" size={20} color="#1E88E5" />
        <Text style={styles.settingsText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsItem}
        onPress={() => navigation.navigate('ChangePassword')}>
        <Icon name="lock-closed-outline" size={20} color="#1E88E5" />
        <Text style={styles.settingsText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsItem}
        onPress={() => navigation.navigate('PrivacySettings')}>
        <Icon name="eye-outline" size={20} color="#1E88E5" />
        <Text style={styles.settingsText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsItem}
        onPress={() => navigation.navigate('NotificationSettings')}>
        <Icon name="notifications-outline" size={20} color="#1E88E5" />
        <Text style={styles.settingsText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsItem} onPress={handleLogout}>
        <Icon name="log-out-outline" size={20} color="#1E88E5" />
        <Text style={styles.logout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsSection;
