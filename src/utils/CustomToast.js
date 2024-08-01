// CustomToast.js
import React from 'react';
import Toast from 'react-native-toast-message';

const CustomToast = {
  show: ({type, message, onHiddenCallback}) => {
    Toast.show({
      type: type || 'success',
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      onHidden: visibility => {
        if (visibility === 'hidden' && onHiddenCallback) {
          onHiddenCallback();
        }
      },
      textStyle: {
        textAlign: 'center',
      },
      style: {
        backgroundColor: '#000000',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width: '90%',
        alignSelf: 'center',
      },
      text1Style: {
        color: '#FFFFFF',
        fontSize: 16,
      },
    });
  },
};

export default CustomToast;
