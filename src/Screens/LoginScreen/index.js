/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import ScreenStatusBar from '../../Components/ScreenStatusBar';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { IconEmail, IconPassword } from '../../Assets';
import { Color } from '../../utils/color';

import Header from './components/header';
import Title from './components/title';
import FormInput from '../../Components/FormInput';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const focus = useIsFocused();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const sendData = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('User account signed in!');
        navigation.replace('MainApp');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const formChecker = () => {
    const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;
    const emailStatus = emailRegEx.test(email); // Boolean

    if (email.length === 0 && password.length === 0) {
      alert('Empty form, Please fill form correctly!');
    } else if (emailStatus && password.length >= 8) {
      console.log('Success');
      sendData();
    } else {
      alert('Invalid Form!');
    }
  };

  useEffect(() => {
    try {
      GoogleSignin.configure({
        webClientId:
          '343335343957-6d3ii965fs6r5knfhoccnsvj55u72r1s.apps.googleusercontent.com',
      });
    } catch (error) {
      alert(error);
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />

          <Title />

          <FormInput
            icon={IconEmail}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />

          <FormInput
            icon={IconPassword}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />

          <View style={styles.containerRegist}>
            <View>
              <Text style={{ fontSize: 15, color: Color.WHITE }}>
                Dont have an account?
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text
                  style={{ fontSize: 15, color: Color.WHITE, fontWeight: 'bold' }}>
                  Sign Up {'>'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.btnLogin, styles.shadowProp]}
            onPress={() => formChecker()}>
            <Text style={{ fontSize: 15, color: Color.WHITE, fontWeight: 'bold' }}>
              Login
            </Text>
          </TouchableOpacity>

          <GoogleSigninButton
            style={{ width: '100%', height: 55, alignSelf: 'center', marginTop: 20 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() =>
              onGoogleButtonPress().then(() => {
                navigation.replace('MainApp');
                console.log('Signed in with Google!')
              }
              )
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <View>{navigation.replace('MainApp')}</View>
  )
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY_MAIN_COLOR,
    paddingHorizontal: 25,
  },
  containerInput: {
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    marginVertical: 8,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 5,
  },
  iconInput: {
    flex: 1,
    alignSelf: 'center',
  },
  icon: {
    width: 25,
    height: 27,
    marginLeft: 10,
  },
  txtInput: {
    flex: 5,
  },
  containerRegist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BUTTON_AUTH,
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 10,
  },
});
