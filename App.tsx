import React from 'react';

import Toast from 'react-native-toast-message';
import Main from './src/routes';
import AuthProvider from './src/utils/auth/auth';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Main />
        <Toast />
      </AuthProvider>
    </Provider>
  );
}
