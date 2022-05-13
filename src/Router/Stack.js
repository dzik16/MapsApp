/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  LoginScreen,
  RegisterScreen,
  AnalyticScreen,
  BiometricScreen,
  CrashlyticsScreen,
  HomeScreen,
  MapsScreen,
  QrCodeScreen,
  SuksesScreen,
  WebScreen,
  Splash
} from '../Screens/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
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
        name="SuksesScreen"
        component={SuksesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WebScreen"
        component={WebScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0D28A6',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="QrCodeScreen"
        component={QrCodeScreen}
        options={{
          tabBarLabel: 'QR Code',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="qr-code-scanner" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default Router;
