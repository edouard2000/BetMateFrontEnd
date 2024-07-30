import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProtectedRoute = ({ children }) => {
  const { user, checkAuth } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error('Authentication error', error);
      } finally {
        setLoading(false);
      }
    };
    authenticate();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigation.navigate('Login', {
        targetRoute: route.name,
        targetParams: route.params,
      });
    }
  }, [loading, user, navigation, route]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return user ? children : null;
};

export default ProtectedRoute;
