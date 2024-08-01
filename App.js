import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import StatusBarManager from './src/utils/StatusBarManager';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBarManager>
        <AppNavigator />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </StatusBarManager>
    </Provider>
  );
};

export default App;
