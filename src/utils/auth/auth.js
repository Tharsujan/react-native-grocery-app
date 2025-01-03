import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import moment from 'moment';

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
      // Set token expiration time to 1 hour from now
      const time = moment().add(1, 'hours').format('YYYY-MM-DD HH:mm:ss');

      // Store the token from the RTK Query response
      const token = data.token;

      // Save token and its expiration time
      await EncryptedStorage.setItem('Token', token);
      await EncryptedStorage.setItem('TokenExpTime', time);

      // Store user data if needed
      if (data.email) {
        await AsyncStorage.setItem('Email', data.email);
      }

      setIsLoggedIn(true);
      return true; // Login successful
    } catch (error) {
      console.error('Error during login:', error);
      return false; // Login failed
    }
  };

  const logout = async () => {
    try {
      // Remove all auth-related items from storage
      await EncryptedStorage.removeItem('Token');
      await EncryptedStorage.removeItem('TokenExpTime');
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during signout:', error);
    }
  };

  const getToken = async () => {
    try {
      const token = await EncryptedStorage.getItem('Token');
      const expTime = await EncryptedStorage.getItem('TokenExpTime');

      if (token && expTime && moment(expTime).isAfter(moment())) {
        return token;
      } else {
        logout();
        return null;
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      logout();
      return null;
    }
  };

  const getUserEmail = async () => {
    const email = await AsyncStorage.getItem('Email');
    return email;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        getToken,
        getUserEmail,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
