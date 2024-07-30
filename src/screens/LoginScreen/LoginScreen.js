import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';
import {validateEmail, validatePassword} from '../../utils/validators';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {checkAuth} = useAuth();

  const handleSignIn = async () => {
    setError('');
    setLoading(true);

    // Validate inputs
    if (!validateEmail(email)) {
      setError('Invalid email format');
      setLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long, contain at least one number, one uppercase letter, and one lowercase letter',
      );
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        email,
        password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await checkAuth();
      console.log('Authenticated');
      const {targetRoute, targetParams} = route.params || {};
      navigation.navigate(targetRoute || 'Main', targetParams);
    } catch (error) {
      setLoading(false);
      if (
        error.response?.data?.error ===
        'Please verify your email before logging in.'
      ) {
        navigation.navigate('EmailVerification', {email});
      } else {
        setError(error.response?.data?.error || 'Invalid email or password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleBet}>Bet</Text>
        <Text style={styles.titleMate}>Mate</Text>
      </Text>
      <Text style={styles.subtitle}>Log in</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        placeholder="Enter email"
        placeholderTextColor="#AAAAAA"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#3498db"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Sign in</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() =>
          navigation.navigate('SignUp', {
            targetRoute: route.params?.targetRoute,
            targetParams: route.params?.targetParams,
          })
        }>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
        </Text>
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
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
    color: '#FFFFFF',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    color: '#FFFFFF',
  },
  iconContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  signupButton: {
    marginTop: 10,
  },
  signupText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  signUpText: {
    fontSize: 16,
    color: '#3498db',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
