// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';

const App = () => {
  return (
    <StatusBarManager>
      <AppNavigator />
    </StatusBarManager>
  );
};

export default App;
