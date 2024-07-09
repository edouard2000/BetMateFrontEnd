import React from 'react';
import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';
import {useDispatch} from 'react-redux';
import {clearUserProfile} from '../../store/userSlice';
import {logout} from '../../store/authSlice';
import UserProfileHeader from './UserProfileHeader';
import PersonalInfoSection from './PersonalInfoSection';
import PaymentMethodsSection from './PaymentMethodsSection';
import SettingsSection from './SettingsSection';
import MateCashCoinsSection from './MateCashCoinsSection';

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
  following: 350,
  followers: 500,
  mateCash: '$168.68',
  mateCoins: '1500',
};

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = dummyUser;

  const handleLogout = async () => {
    dispatch(logout());
    dispatch(clearUserProfile());
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserProfileHeader user={user} />
      <MateCashCoinsSection
        mateCash={user.mateCash}
        mateCoins={user.mateCoins}
      />
      <ScrollView style={styles.scrollView}>
        <PersonalInfoSection user={user} navigation={navigation} />
        <View style={styles.divider}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>
        <PaymentMethodsSection user={user} navigation={navigation} />
        <View style={styles.divider}>
          <View style={styles.dot} />
          <View style={styles.horizontalLine} />
          <View style={styles.dot} />
        </View>
        <SettingsSection navigation={navigation} handleLogout={handleLogout} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="arrow-undo-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
