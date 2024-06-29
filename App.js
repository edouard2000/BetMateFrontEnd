// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';
import { UnreadMessageProvider } from './src/context/UnreadMessageContext';

const App = () => {
  return (
    <UnreadMessageProvider>
      <StatusBarManager>
        <AppNavigator />
      </StatusBarManager>
    </UnreadMessageProvider>
  );
};

export default App;
