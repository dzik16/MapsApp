import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

import CrashlyticsScreen from './Screens/CrashlyticsScreen';
import AnalyticsScreen from './Screens/AnalyticsScreen';
import MapsScreen from './Screens/MapsScreen';

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
    <View style={styles.container}>
      <CrashlyticsScreen />
      <AnalyticsScreen />
      <MapsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
