import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBarManager>
        <AppNavigator />
      </StatusBarManager>
    </AuthProvider>
  );
};

export default App;
