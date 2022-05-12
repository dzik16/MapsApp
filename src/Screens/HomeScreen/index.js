// /* eslint-disable no-unused-vars */
// import {StyleSheet, View} from 'react-native';
// import React, {useEffect} from 'react';
// import messaging from '@react-native-firebase/messaging';

// import CrashlyticsScreen from './Screens/CrashlyticsScreen/index.js';
// import AnalyticsScreen from './Screens/AnalyticsScreen';
// import MapsScreen from './Screens/MapsScreen';
// import QrCodeScreen from './Screens/QrCodeScreen/index.js';
// import BiometricScreen from './Screens/BiometricScreen/index.js';
// import LoginScreen from './Screens/LoginScreen';
// import RegisterScreen from './Screens/RegisterScreen';

// const HomeScreen = () => {
//   async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//     }
//   }

//   const getToken = async () => {
//     const token = await messaging().getToken();
//     console.log(JSON.stringify(token));
//   };

//   useEffect(() => {
//     requestUserPermission();
//     getToken();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* <CrashlyticsScreen />
//       <AnalyticsScreen /> */}
//       {/* <MapsScreen /> */}
//       {/* <QrCodeScreen /> */}
//       {/* <BiometricScreen /> */}
//       {/* <LoginScreen /> */}
//       {/* <RegisterScreen /> */}
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   // container: {
//   //   // ...StyleSheet.absoluteFillObject,
//   //   flex: 1, //the container will fill the whole screen.
//   //   // justifyContent: 'flex-end',
//   //   // alignItems: 'center',
//   // },
// });

import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import BiometricScreen from '../BiometricScreen/index.js';


const HomeScreen = () => {
  const navigation = useNavigation();

  async function onGoogleSignOut() {
    return await auth().signOut();
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => {
          alert('Your are signed out!')
        });
      // setUser(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Text>index</Text>
      <BiometricScreen />
      <Button
        title="Sign-Out"
        onPress={() =>
          onGoogleSignOut().then(() => {
            signOut();
            console.log('Signed Out');
            navigation.navigate('LoginScreen');
          })
        }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})