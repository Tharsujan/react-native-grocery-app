import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import moment from 'moment';
import {refreshToken as refreshTokenAPI} from '../../actions/login';

const Token = 'Token';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = async () => {
    console.log('checkLogin called');
    try {
      const token = await EncryptedStorage.getItem('Token');
      const expTime = await EncryptedStorage.getItem('TokenExpTime');

      if (token && expTime && moment(expTime).isAfter(moment())) {
        setIsLoggedIn(true);
      } else if (token) {
        await refreshStorage(token); // Call refreshStorage if token exists but expired
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
      logout();
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const login = async data => {
    console.log('login');
    try {
      const time = moment().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
      const token = data.Token;
      await EncryptedStorage.setItem('Token', token);
      await EncryptedStorage.setItem('TokenExpTime', time);
      await EncryptedStorage.setItem('RefreshToken', data.RefreshToken);
      await EncryptedStorage.setItem('RFTokenExpDate', data.RFTokenExpDate);
      await AsyncStorage.setItem('Name', data.username);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during login:', error);
      return false; // Login failed
    }
  };

  const logout = async () => {
    try {
      await EncryptedStorage.removeItem('Token');
      await EncryptedStorage.removeItem('TokenExpTime');
      await EncryptedStorage.removeItem('RefreshToken');
      await EncryptedStorage.removeItem('RFTokenExpDate');
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during signout:', error);
    }
  };

  const refreshStorage = async token => {
    console.log('refresh called');
    try {
      const refreshToken = await EncryptedStorage.getItem('RefreshToken');
      const RFTokenExpDate = await EncryptedStorage.getItem('RFTokenExpDate');

      if (
        refreshToken &&
        RFTokenExpDate &&
        moment(RFTokenExpDate).isAfter(moment())
      ) {
        const newTokens = await refreshTokenAPI(refreshToken); // Use refreshToken function from API
        console.log('New tokens received:', newTokens);

        // Update storage with new tokens
        await EncryptedStorage.setItem('Token', newTokens.accessToken);
        const newExpTime = moment()
          .add(7, 'hours')
          .format('YYYY-MM-DD HH:mm:ss');
        await EncryptedStorage.setItem('TokenExpTime', newExpTime);
        await EncryptedStorage.setItem('RefreshToken', newTokens.refreshToken);

        setIsLoggedIn(true);
        return newTokens.accessToken;
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error during token refresh:', error);
      logout();
    }
  };

  const getToken = async () => {
    try {
      const token = await EncryptedStorage.getItem('Token');
      const expTime = await EncryptedStorage.getItem('TokenExpTime');

      if (token && expTime && moment(expTime).isAfter(moment())) {
        return token;
      } else if (token) {
        return await refreshStorage(token);
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      logout();
    }
  };

  const getUserName = async () => {
    const Name = await AsyncStorage.getItem('Name');
    return Name;
  };

  return (
    <AuthContext.Provider
      value={{isLoggedIn, login, logout, getToken, getUserName}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
