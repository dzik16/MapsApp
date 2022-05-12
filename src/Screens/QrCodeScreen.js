import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';

export default function QrCodeScreen() {
  useEffect(() => {});

  return (
    <CameraScreen
      // Barcode props
      scanBarcode={true}
      onReadCode={event => alert('QR code found')} // optional
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
