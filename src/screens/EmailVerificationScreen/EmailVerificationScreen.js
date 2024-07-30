import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmailVerificationScreen = ({ route }) => {
  const { email } = route.params;
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { checkAuth } = useAuth();

  const handleVerify = async () => {
    if (verificationCode.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit code.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5001/api/verify-email',
        {
          email,
          code: verificationCode,
        },
      );
      await AsyncStorage.setItem('token', response.data.token);
      await checkAuth(); // This will update the user context and set the user as logged in
      setLoading(false);
      Alert.alert('Success', 'Email verified successfully!');
      navigation.navigate('Main');
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Error',
        error.response?.data?.error || 'Invalid verification code.',
      );
    }
  };

  const handleResendCode = async () => {
    try {
      setLoading(true);
      await axios.post('http://localhost:5001/api/resend-verification-code', {
        email,
      });
      setLoading(false);
      Alert.alert(
        'Success',
        'A new verification code has been sent to your email.',
      );
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Error',
        'Failed to resend verification code. Please try again later.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleBet}>Bet</Text>
        <Text style={styles.titleMate}>Mate</Text>
      </Text>
      <Text style={styles.subtitle}>Verify Your Email</Text>
      <Text style={styles.instruction}>Enter the 6-digit code sent to:</Text>
      <Text style={styles.email}>{email}</Text>
      <TextInput
        style={styles.input}
        value={verificationCode}
        onChangeText={setVerificationCode}
        placeholder="Enter verification code"
        placeholderTextColor="#AAAAAA"
        keyboardType="number-pad"
        maxLength={6}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleVerify}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Verifying...' : 'Verify'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resendButton}
        onPress={handleResendCode}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Resending...' : 'Resend Code'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={30} color="#3498db" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleBet: {
    color: '#FFFFFF',
  },
  titleMate: {
    color: '#3498db',
  },
  subtitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#3498db',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#FFFFFF',
  },
  button: {
    width: '80%',
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  resendButton: {
    width: '80%',
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});

export default EmailVerificationScreen;
