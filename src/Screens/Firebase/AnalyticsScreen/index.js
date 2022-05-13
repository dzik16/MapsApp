import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import analytics from '@react-native-firebase/analytics';

export default function AnalyticsScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={
          async () => {
            Alert.alert('Success', 'Invalid Form!');
            async () =>
              await analytics().logEvent('basket', {
                id: 3745092,
                item: 'mens grey t-shirt',
                description: ['round neck', 'long sleeved'],
                size: 'L',
              })
          }
        }
      ></TouchableOpacity>
    </View >
  );
}
