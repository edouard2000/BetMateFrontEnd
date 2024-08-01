import React from 'react';
import {Text} from 'react-native';
import Toast from 'react-native-toast-message';

const CustomToast = {
  show: ({message, textColor = '#3498db', onHiddenCallback}) => {
    Toast.show({
      type: 'custom',
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      onHide: () => {
        if (onHiddenCallback) {
          onHiddenCallback();
        }
      },
      position: 'top',
      offset: 200,
      props: {textColor},
    });
  },
};

const toastConfig = {
  custom: ({text1, props}) => (
    <Text
      style={{
        color: props.textColor || '#3498db',
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
        backgroundColor: 'transparent',
      }}>
      {text1}
    </Text>
  ),
};

export {CustomToast, toastConfig};
