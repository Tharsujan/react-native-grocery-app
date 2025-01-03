import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/loginScreen';
import SignupScreen from '../screens/SignupScreen/signupScreen';
import SplashScreen from '../screens/SplashScreen/splashScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

const AuthStack = createStackNavigator();

export default function AuthStackRoute({setIsLoggedIn}) {
  return (
    <AuthStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen
        name="LoginScreen"
        // Pass setIsLoggedIn down to LoginScreen
        children={props => (
          <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />
        )}
      />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}
