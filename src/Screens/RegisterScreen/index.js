/* eslint-disable no-alert */
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const sendData = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

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

      <Button title="Register" onPress={sendData} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
