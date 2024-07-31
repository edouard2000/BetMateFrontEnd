import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  verifyEmail,
  resendVerificationCode,
} from '../../redux/slices/authSlice'; 

const EmailVerificationScreen = ({route}) => {
  const {email} = route.params;
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);

  const handleVerify = async () => {
    if (verificationCode.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit code.');
      return;
    }

    try {
      const resultAction = await dispatch(
        verifyEmail({email, code: verificationCode}),
      );
      if (verifyEmail.fulfilled.match(resultAction)) {
        Alert.alert('Success', 'Email verified successfully!');
        navigation.navigate('Main');
      } else {
        Alert.alert(
          'Error',
          resultAction.error.message || 'Invalid verification code.',
        );
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const handleResendCode = async () => {
    try {
      await dispatch(resendVerificationCode({email}));
      Alert.alert(
        'Success',
        'A new verification code has been sent to your email.',
      );
    } catch (error) {
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
