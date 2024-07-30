import AsyncStorage from '@react-native-async-storage/async-storage';
const {jwtDecode} = require('jwt-decode');

export const getUserIdFromToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const decodedToken = jwtDecode(token);
    return decodedToken.userId;
  } catch (error) {
    console.error('Error decoding token', error);
    return null;
  }
};
