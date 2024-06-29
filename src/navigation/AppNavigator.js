// src/navigation/AppNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import UserDashboard from '../screens/DashboardScreen';
import ProfileScreen from '../screens/UserProfileScreen';
import SocialScreen from '../screens/SocialScreen';
import BetListScreen from '../screens/BetListScreen';
import Chat from '../screens/Chat';
import GeneralChatScreen from '../screens/GeneralChatScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SocialScreen" component={SocialScreen} />
        <Stack.Screen name="BetList" component={BetListScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="GeneralChatScreen" component={GeneralChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
