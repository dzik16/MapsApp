import React from 'react';
import {View, Button} from 'react-native';
import analytics from '@react-native-firebase/analytics';

export default function AnalyticsScreen() {
  return (
    <View>
      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
    </View>
  );
}
