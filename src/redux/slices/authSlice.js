import {createSlice} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {resetApiState} from '../store';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    message: null,
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    setCredentials: (state, {payload}) => {
      state.token = payload.token;
      state.message = payload.message;
      state.isAuthenticated = true;
      state.user = payload.user; // Save user details
    },
    clearCredentials: state => {
      state.token = null;
      state.message = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {setCredentials, clearCredentials} = authSlice.actions;
export const logout = () => async dispatch => {
  try {
    // Clear encrypted storage
    await EncryptedStorage.removeItem('userToken');
    await EncryptedStorage.removeItem('Token'); // Also clear the 'Token' key
    await EncryptedStorage.removeItem('user');

    // Clear Redux state
    dispatch(clearCredentials());

    // Reset all API caches
    resetApiState();
    console.log('Logout completed successfully');
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export default authSlice.reducer;
