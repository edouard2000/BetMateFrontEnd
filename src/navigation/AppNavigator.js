// src/navigation/AppNavigator.js
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserProfile} from '../store/userSlice';

import MainScreen from '../screens/MainScreen';
import UserDashboard from '../screens/DashboardScreen';
import ProfileScreen from '../screens/UserProfileScreen';
import SocialScreen from '../screens/SocialScreen';
import BetListScreen from '../screens/BetListScreen';
import Chat from '../screens/Chat';
import GeneralChatScreen from '../screens/GeneralChatScreen';
import P2PBettingScreen from '../screens/P2P/P2PBettingScreen';
import MarketScreen from '../screens/MarketScreen/MarketScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import AddFixtureScreen from '../screens/MainScreen/CreateBet/AddFixtureScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, profile} = useSelector(state => state.user);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!isAuthenticated) {
        try {
          const token = await AsyncStorage.getItem('access_token');
          const storedProfile = await AsyncStorage.getItem('user_profile');
          if (token && storedProfile) {
            const parsedProfile = JSON.parse(storedProfile);
            dispatch(setUserProfile(parsedProfile));
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
        }
      }
    };

    checkAuthentication();
  }, [dispatch, isAuthenticated]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="UserDashboard" component={UserDashboard} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SocialScreen" component={SocialScreen} />
            <Stack.Screen name="BetList" component={BetListScreen} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen
              name="AddFixtureScreen"
              component={AddFixtureScreen}
            />
            <Stack.Screen
              name="GeneralChatScreen"
              component={GeneralChatScreen}
            />
            <Stack.Screen
              name="P2PBettingScreen"
              component={P2PBettingScreen}
            />
            <Stack.Screen name="MarketScreen" component={MarketScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="EmailVerification"
              component={EmailVerificationScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
