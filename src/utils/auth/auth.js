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
        await logout();
      }
    } catch (error) {
      console.error('Error fetching data from AsyncStorage:', error);
      await logout();
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const login = async data => {
    console.log('login called with data:', data);
    try {
      // Set token expiration time to 1 hour from now
      const time = moment().add(1, 'hours').format('YYYY-MM-DD HH:mm:ss');

      // Store the token from the RTK Query response
      const token = data.token;

      // Save token and its expiration time
      await EncryptedStorage.setItem('Token', token);
      await EncryptedStorage.setItem('TokenExpTime', time);

      // Store user data if needed
      if (data.user) {
        await AsyncStorage.setItem('UserData', JSON.stringify(data.user));
      }

      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error('Error during login:', error);
      return false;
    }
  };
  const logout = async () => {
    try {
      // Clear all storage
      await EncryptedStorage.clear();
      await AsyncStorage.clear();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  const getToken = async () => {
    try {
      const token = await EncryptedStorage.getItem('Token');
      const expTime = await EncryptedStorage.getItem('TokenExpTime');

      if (token && expTime && moment(expTime).isAfter(moment())) {
        return token;
      } else {
        await logout();
        return null;
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      await logout();
      return null;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        getToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
