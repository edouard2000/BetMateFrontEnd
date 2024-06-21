import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';

const generateAvatarUrl = name => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random&size=128`;
};

const dummyUser = {
  name: 'John Doe',
  username: 'johndoe123',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  profilePicture: generateAvatarUrl('John Doe'),
  paymentPhoneNumber: '+1234567890',
  paymentCard: '**** **** **** 1234',
  primaryPaymentMethod: 'Card',
  about:
    'This is a dummy user profile for John Doe. He is an avid sports enthusiast and loves to place bets on various games.',
  dateJoined: 'Joined: January 1, 2020',
  currentBalance: '$500.00',
};

const ProfileScreen = ({navigation}) => {
  const user = dummyUser;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: user.profilePicture}}
          style={styles.profileImage}
        />
        <View style={styles.headerDetails}>
          <Text style={styles.headerTitle}>{user.name}</Text>
          <Text style={styles.headerSubtitle}>{user.dateJoined}</Text>
          <Text style={styles.headerSubtitle}>
            Balance: {user.currentBalance}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.navigate('UserDashboard')}>
          <Icon name="chevron-forward-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.section, styles.personalInfoSection]}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoRow}>
            <Icon name="person-outline" size={20} color="#1E88E5" />
            <Text style={styles.infoLabel}>Username:</Text>
            <Text style={styles.infoValue}>{user.username}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditUsername')}>
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

        <View style={styles.divider}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>

        <View style={[styles.section, styles.paymentMethodsSection]}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <View style={styles.infoRow}>
            <Icon name="call-outline" size={20} color="#1E88E5" />
            <Text style={styles.infoLabel}>Phone Number:</Text>
            <Text style={styles.infoValue}>{user.paymentPhoneNumber}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditPaymentPhone')}>
              <Icon name="create-outline" size={20} color="#1E88E5" />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <Icon name="card-outline" size={20} color="#1E88E5" />
            <Text style={styles.infoLabel}>Card:</Text>
            <Text style={styles.infoValue}>{user.paymentCard}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditPaymentCard')}>
              <Icon name="create-outline" size={20} color="#1E88E5" />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <Icon name="checkmark-circle-outline" size={20} color="#1E88E5" />
            <Text style={styles.infoLabel}>Primary Method:</Text>
            <Text style={styles.infoValue}>{user.primaryPaymentMethod}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditPrimaryPayment')}>
              <Icon name="create-outline" size={20} color="#1E88E5" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>

        <View style={[styles.section, styles.settingsSection]}>
          <Text style={styles.sectionTitle}>Settings</Text>
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
            <Text style={styles.settingsText}>Privacy Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => navigation.navigate('NotificationSettings')}>
            <Icon name="notifications-outline" size={20} color="#1E88E5" />
            <Text style={styles.settingsText}>Notification Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => navigation.navigate('LogOut')}>
            <Icon name="log-out-outline" size={20} color="#1E88E5" />
            <Text style={[styles.logout]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
