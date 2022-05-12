/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import BiometricScreen from '../BiometricScreen/index.js';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        console.error(error);
      });
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
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onGoogleSignOut() {
    return await auth().signOut();
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
      setUser(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <View>
        <Text>{email}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Masukan email"
        />
        <Text>{password}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Masukan Password"
          secureTextEntry
        />

        <Button title="Login" onPress={sendData} />

        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button
        title="Sign-Out"
        onPress={() =>
          onGoogleSignOut().then(() => {
            signOut();
            console.log('Signed Out');
          })
        }
      />
      <BiometricScreen />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
