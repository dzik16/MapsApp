/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  AnalyticScreen,
  BiometricScreen,
  CrashlyticsScreen,
  HomeScreen,
  MapsScreen,
  QrCodeScreen,
  SuksesScreen
} from '../Screens/index';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnalyticScreen"
        component={AnalyticScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BiometricScreen"
        component={BiometricScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CrashlyticsScreen"
        component={CrashlyticsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MapsScreen"
        component={MapsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrCodeScreen"
        component={QrCodeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuksesScreen"
        component={SuksesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Router;
