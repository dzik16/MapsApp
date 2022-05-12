/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Stack';

const index = () => (
  <NavigationContainer>
    <Router />
  </NavigationContainer>
);

export default index;
