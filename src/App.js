import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import CrashlyticsScreen from './Screens/CrashlyticsScreen';
import AnalyticsScreen from './Screens/AnalyticsScreen';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    alert(JSON.stringify(token));
    console.log(JSON.stringify(token));
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  return (
    <View>
      <CrashlyticsScreen />
      <AnalyticsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
