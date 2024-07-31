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
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {signup} from '../../redux/slices/authSlice'; // Adjust path if necessary
import {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
} from '../../utils/validators';

const SignUpScreen = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {loading, error: signupError} = useSelector(state => state.auth);

  const handleSignUp = async () => {
    setError('');
    try {
      const resultAction = await dispatch(
        signup({name, email, phoneNumber, password}),
      );
      if (signup.fulfilled.match(resultAction)) {
        navigation.navigate('EmailVerification', {email});
      } else {
        setError(resultAction.error.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleNext = () => {
    setError('');
    if (step === 1) {
      if (name) {
        setStep(2);
      } else {
        setError('Please enter your name.');
      }
    } else if (step === 2) {
      if (validateEmail(email)) {
        setStep(3);
      } else {
        setError('Invalid email format.');
      }
    } else if (step === 3) {
      if (validatePhoneNumber(phoneNumber)) {
        setStep(4);
      } else {
        setError('Invalid phone number format.');
      }
    } else if (step === 4) {
      if (validatePassword(password)) {
        handleSignUp();
      } else {
        setError(
          'Password must be at least 8 characters long, contain at least one number, one uppercase letter, one lowercase letter, and one special character.',
        );
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.titleBet}>Bet</Text>
        <Text style={styles.titleMate}>Mate</Text>
      </Text>
      <Text style={styles.subtitle}>Sign up</Text>
      {error || signupError ? (
        <Text style={styles.errorText}>{error || signupError}</Text>
      ) : null}
      {step === 1 && (
        <TextInput
          placeholder="Name"
          placeholderTextColor="#AAAAAA"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      )}
      {step === 2 && (
        <TextInput
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      )}
      {step === 3 && (
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#AAAAAA"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      )}
      {step === 4 && (
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
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        disabled={loading}>
        <Text style={styles.buttonText}>{step === 4 ? 'Sign up' : 'Next'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() =>
          navigation.navigate('Login', {
            targetRoute: route.params?.targetRoute,
            targetParams: route.params?.targetParams,
          })
        }>
        <Text style={styles.signupText}>
          Already have an account? <Text style={styles.logInText}>Log in</Text>
        </Text>
      </TouchableOpacity>
      {step > 1 && (
        <TouchableOpacity style={styles.arrowContainer} onPress={handleBack}>
          <Icon name="arrow-back-outline" size={30} color="#3498db" />
        </TouchableOpacity>
      )}
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
    marginTop: 10,
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
  logInText: {
    fontSize: 16,
    color: '#3498db',
  },
  arrowContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SignUpScreen;
