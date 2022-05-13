/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { CameraScreen, CameraType } from 'react-native-camera-kit';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function QrCodeScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused()

  const actions = (data) => {
    // alert(data.nativeEvent.codeStringValue)
    navigation.navigate('WebScreen', { url: data.nativeEvent.codeStringValue })
  }

  return (
    <CameraScreen
      // Barcode props
      cameraType={CameraType.Back}
      scanBarcode={true}
      onReadCode={event => actions(event)} // optional
      showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      laserColor="red" // (default red) optional, color of laser in scanner frame
      frameColor="white" // (default white) optional, color of border of scanner frame
    />
  );
}

//create our styling code:
const styles = StyleSheet.create({
  container: {
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'center',
    alignItems: 'center',
  },
});
