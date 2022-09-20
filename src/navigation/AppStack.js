import * as React from 'react';

import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBarStack from './BottomBarStack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabFlow"
        component={BottomBarStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
