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

const LoginScreen = ({navigation}) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNext = () => {
    setError('');
    if (step === 1) {
      if (!email) {
        setError('Please enter your email');
        return;
      }
      setStep(2);
    } else {
      if (!password) {
        setError('Please enter your password');
        return;
      }
      setIsLoading(true);
      // Here the server connection would be implemented
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('Main');
      }, 2000);
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
      <Text style={styles.subtitle}>Log in</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {step === 1 && (
        <TextInput
          placeholder="Enter email"
          placeholderTextColor="#AAAAAA"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      )}
      {step === 2 && (
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
      {step === 2 && (
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
        disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            {step === 1 ? 'Next' : 'Sign in'}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
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
  forgotPasswordContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#3498db',
    fontSize: 14,
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

export default LoginScreen;
