/* eslint-disable no-alert */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import TouchID from 'react-native-touch-id';
// import {useNavigation} from '@react-navigation/native';

const BiometricScreen = () => {
  // const navigation = useNavigation();

  function onFingerPrintPress() {
    const optionalConfigObject = {
      title: 'MapsApp Locked', // Android
      imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    TouchID.authenticate('Touch The Fingerprint Sensor', optionalConfigObject)
      .then(success => {
        // navigation.replace('MainApp');
        console.log('Authentication Sukses');
      })
      .catch(error => {
        alert('Authentication Failed');
      });
  }

  useEffect(() => {
    onFingerPrintPress();
  });

  return <View>{}</View>;
};

export default BiometricScreen;
