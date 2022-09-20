import * as React from 'react';

import HomeScreen from '../screens/Home';
import MenuScreen from '../screens/Menu';
import SearchScreen from '../screens/Search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();
export default function BottomBarStack() {
  const tabs = [
    {
      id: 0,
      activeIcon: '',
      inactiveIcon: '',
      name: 'Home',
      component: HomeScreen,
    },
    {
      id: 1,
      activeIcon: '',
      inactiveIcon: '',
      name: 'Search',
      component: SearchScreen,
    },
    {
      id: 2,
      activeIcon: '',
      inactiveIcon: '',
      name: 'Menu',
      component: MenuScreen,
    },
  ];

  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} name="TabFlow">
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          initialParams={{
            activeIcon: item.activeIcon,
            inactiveIcon: item.inactiveIcon,
          }}
          name={item.name}
          component={item.component}
          options={{headerShown: false}}
        />
      ))}
    </Tab.Navigator>
  );
}
