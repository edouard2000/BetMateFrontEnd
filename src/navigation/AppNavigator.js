// src/navigation/AppNavigator.js
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserProfile} from '../store/userSlice';

import MainScreen from '../screens/MainScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import ProfileScreen from '../screens/UserProfileScreen';
import SocialScreen from '../screens/SocialScreen';
import Chat from '../screens/Chat';
import GeneralChatScreen from '../screens/GeneralChatScreen';
import P2PBettingScreen from '../screens/P2P/P2PBettingScreen';
import MarketScreen from '../screens/MarketScreen/MarketScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import AddFixtureScreen from '../screens/MainScreen/CreateBet/AddFixtureScreen';
import LeagueDetailScreen from '../screens/MainScreen/CreateBet/LeagueDetailScreen';
import BetDetailInfoScreen from '../components/BetInformation/BetDetailInfoScreen';
import CashoutScreen from '../screens/cashoutScreen/CashoutScreen';
import BetListScreen from '../screens/BetFixtureList/BetListScreen';
import BetsParticipatedScreen from '../screens/betting/BetsParticipatedScreen';
import MyBets from '../screens/MyBets/MyBets';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state => state.user);

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
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SocialScreen" component={SocialScreen} />
            <Stack.Screen name="BetList" component={BetListScreen} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="BetDetail" component={BetDetailInfoScreen} />

            <Stack.Screen
              name="LeagueDetailScreen"
              component={LeagueDetailScreen}
            />
            <Stack.Screen
              name="AddFixtureScreen"
              component={AddFixtureScreen}
            />
            <Stack.Screen
              name="GeneralChatScreen"
              component={GeneralChatScreen}
            />
            <Stack.Screen name="MyBets" component={MyBets} />
            <Stack.Screen name="CashoutScreen" component={CashoutScreen} />
            <Stack.Screen
              name="P2PBettingScreen"
              component={P2PBettingScreen}
            />
            <Stack.Screen name="BetListScreen" component={BetListScreen} />
            <Stack.Screen name="MarketScreen" component={MarketScreen} />
            <Stack.Screen name="BetsParticipatedScreen" component={BetsParticipatedScreen} />
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
