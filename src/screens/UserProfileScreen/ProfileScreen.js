import React from 'react';
import {View, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ProfileScreenStyles';
import UserProfileHeader from './UserProfileHeader';
import PersonalInfoSection from './PersonalInfoSection';
import PaymentMethodsSection from './PaymentMethodsSection';
import SettingsSection from './SettingsSection';
import {useAuth} from '../../context/AuthContext';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useAuth();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.container}>
      {user && (
        <>
          <UserProfileHeader user={user} />
          <ScrollView style={styles.scrollView}>
            <View style={styles.sectionContainer}>
              <PersonalInfoSection user={user} navigation={navigation} />
              <PaymentMethodsSection user={user} navigation={navigation} />
              <SettingsSection
                navigation={navigation}
                handleLogout={handleLogout}
              />
            </View>
          </ScrollView>
        </>
      )}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="arrow-undo-outline" size={30} color="#1E88E5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
