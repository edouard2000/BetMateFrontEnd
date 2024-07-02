// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import { UnreadMessageProvider } from './src/context/UnreadMessageContext';

const App = () => {
  return (
    <Provider store={store}>
      <UnreadMessageProvider>
        <StatusBarManager>
          <AppNavigator />
        </StatusBarManager>
      </UnreadMessageProvider>
    </Provider>
  );
};

export default App;
