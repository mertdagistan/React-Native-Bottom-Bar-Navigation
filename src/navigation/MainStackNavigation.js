import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

function MainStackNavigation() {
  return <NavigationContainer>{AppStack()}</NavigationContainer>;
}

export default MainStackNavigation;
