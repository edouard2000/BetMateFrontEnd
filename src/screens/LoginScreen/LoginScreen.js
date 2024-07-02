import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../../store/userSlice';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleNext = async () => {
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
            try {
                const response = await axios.post(
                    'https://betmatebackend.onrender.com/api/users/login',
                    { email, password }
                );

                if (response.status === 200) {
                    await AsyncStorage.setItem('access_token', response.data.data.access_token);
                    await fetchUserProfile(response.data.data.access_token);
                    navigation.navigate('Main');
                } else {
                    setError(response.data.message || 'An error occurred during login');
                }
            } catch (error) {
                if (error.response) {
                    setError(error.response.data.message || 'Invalid email or password');
                } else {
                    setError('An error occurred. Please try again.');
                }
            }
        }
    };

    const fetchUserProfile = async (token) => {
        try {
            const response = await axios.get(
                'https://betmatebackend.onrender.com/api/users/profile',
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            if (response.status === 200) {
                dispatch(setUserProfile(response.data.data));
                console.log('User profile:', response.data.data);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Text style={styles.titleBet}>Bet</Text>
                <Text style={styles.titleMate}>Mate</Text>
            </Text>
            <Text style={styles.subtitle}>Log in or sign up</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>{step === 1 ? 'Next' : 'Sign in'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Sign up</Text>
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
        paddingLeft: 10,
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
        alignSelf: 'flex-start',
        marginLeft: '35%',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#3498db',
        fontSize: 14,
    },
    button: {
        width: '80%',
        backgroundColor: '#3498db',
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    signupButton: {
        marginTop: 10,
    },
    signupText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3498db',
    },
    arrowContainer: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    arrow: {
        fontSize: 30,
        color: '#3498db',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
});

export default LoginScreen;