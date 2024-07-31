import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Thunks
export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    const response = await axios.get('http://localhost:5001/api/auth-check', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  } else {
    throw new Error('No token found');
  }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await axios.post('http://localhost:5001/api/login', { email, password });
  await AsyncStorage.setItem('token', response.data.token);
  const userResponse = await axios.get('http://localhost:5001/api/auth-check', {
    headers: { Authorization: `Bearer ${response.data.token}` },
  });
  return userResponse.data.user;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem('token');
});

export const signup = createAsyncThunk('auth/signup', async ({ name, email, phoneNumber, password }) => {
  const response = await axios.post('http://localhost:5001/api/signup', { name, email, phoneNumber, password });
  return response.data;
});

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async ({ email, code }) => {
  const response = await axios.post('http://localhost:5001/api/verify-email', { email, code });
  await AsyncStorage.setItem('token', response.data.token);
  const userResponse = await axios.get('http://localhost:5001/api/auth-check', {
    headers: { Authorization: `Bearer ${response.data.token}` },
  });
  return userResponse.data.user;
});

export const resendVerificationCode = createAsyncThunk('auth/resendVerificationCode', async ({ email }) => {
  await axios.post('http://localhost:5001/api/resend-verification-code', { email });
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(resendVerificationCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendVerificationCode.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resendVerificationCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
