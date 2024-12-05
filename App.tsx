import React from 'react';

import Toast from 'react-native-toast-message';
import Main from './src/routes';
import AuthProvider from './src/utils/auth/auth';

export default function App() {
  return (
    <AuthProvider>
      <Main />
      <Toast />
    </AuthProvider>
  );
}
