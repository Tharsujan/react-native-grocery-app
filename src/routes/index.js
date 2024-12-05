import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../utils/auth/auth';
import AuthStackRoute from './authStackroute';
import MainStackRoute from './mainStackroute';

const Main = () => {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStackRoute /> : <MainStackRoute />}
    </NavigationContainer>
  );
};

export default Main;
