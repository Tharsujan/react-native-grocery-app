// App.js
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackRoute from './src/routes/authStackroute';
import MainStackRoute from './src/routes/mainStackroute';

export default function App() {
  // Temporary state for toggling between stacks
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainStackRoute />
      ) : (
        <AuthStackRoute setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}
