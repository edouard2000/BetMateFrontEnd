// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';
import { store } from './src/store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
        <StatusBarManager>
          <AppNavigator />
        </StatusBarManager>
    </Provider>
  );
};

export default App;
