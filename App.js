import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';

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
