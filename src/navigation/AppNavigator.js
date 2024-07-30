import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
import ManagePredictionsScreen from '../screens/managePredictions/ManagePredictionsScreen';
import StockDetailScreen from '../screens/MarketScreen/component/StockDetailScreen';
import ShareDetailScreen from '../screens/MarketScreen/component/ShareDetailScreen';
import ActivityDetailScreen from '../screens/MarketScreen/component/ActivityDetailScreen';
import FixtureDetailScreen from '../screens/MyBets/fixtureDetailScreen/FixtureDetailScreen';
import SavedBetsScreen from '../screens/MyBets/SavedBetsScreen/SavedBetsScreen';
import CustomizeOddsScreen from '../screens/MyBets/CustomizeOddsScreen/CustomizeOddsScreen';
import BettingFixtureScreen from '../screens/betting/BettingFixtureScreen/BettingFixtureScreen';
import SavedBettingsScreen from '../screens/betting/SavedBettingsScreen/SavedBettingsScreen';
import ProtectedRoute from '../components/ProtectedRoute';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main" // Set Main as the initial route
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
        <Stack.Screen name="DashboardScreen">
          {props => (
            <ProtectedRoute>
              <DashboardScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {props => (
            <ProtectedRoute>
              <ProfileScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="SocialScreen">
          {props => (
            <ProtectedRoute>
              <SocialScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="BetList">
          {props => (
            <ProtectedRoute>
              <BetListScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="Chat">
          {props => (
            <ProtectedRoute>
              <Chat {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="BetDetail">
          {props => (
            <ProtectedRoute>
              <BetDetailInfoScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="LeagueDetailScreen">
          {props => (
            <ProtectedRoute>
              <LeagueDetailScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="AddFixtureScreen">
          {props => (
            <ProtectedRoute>
              <AddFixtureScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="GeneralChatScreen">
          {props => (
            <ProtectedRoute>
              <GeneralChatScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="MyBets">
          {props => (
            <ProtectedRoute>
              <MyBets {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="CashoutScreen">
          {props => (
            <ProtectedRoute>
              <CashoutScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="P2PBettingScreen">
          {props => (
            <ProtectedRoute>
              <P2PBettingScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="MarketScreen">
          {props => (
            <ProtectedRoute>
              <MarketScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="BetsParticipatedScreen">
          {props => (
            <ProtectedRoute>
              <BetsParticipatedScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="BettingFixtureScreen">
          {props => (
            <ProtectedRoute>
              <BettingFixtureScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="SavedBetsScreen">
          {props => (
            <ProtectedRoute>
              <SavedBetsScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="FixtureDetailScreen">
          {props => (
            <ProtectedRoute>
              <FixtureDetailScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="CustomizeOddsScreen">
          {props => (
            <ProtectedRoute>
              <CustomizeOddsScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="ManagePredictionsScreen">
          {props => (
            <ProtectedRoute>
              <ManagePredictionsScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="StockDetailScreen">
          {props => (
            <ProtectedRoute>
              <StockDetailScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="ShareDetailScreen">
          {props => (
            <ProtectedRoute>
              <ShareDetailScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="ActivityDetailScreen">
          {props => (
            <ProtectedRoute>
              <ActivityDetailScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
        <Stack.Screen name="SavedBettingsScreen">
          {props => (
            <ProtectedRoute>
              <SavedBettingsScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
