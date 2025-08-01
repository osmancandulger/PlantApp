import React from 'react';
import { ScreenNames } from ':enums/screens';
import { HomeScreen, DiagnoseScreen, MyGardenScreen, ProfileScreen } from ':pages/';
import { Text } from 'react-native';
type TabScreenDefinitionType = {
  name: string;
  title: string;
  setAsIndex: boolean;
  tabBarIcon: string;
  tabBarLabel: string;
  component: React.ComponentType<any>;
  options: any;
};
export const TabScreenRegistry: TabScreenDefinitionType[] = [
  {
    name: ScreenNames.HOME,
    title: 'Home',
    setAsIndex: true,
    tabBarIcon: 'home',
    tabBarLabel: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: ScreenNames.DIAGNOSE,
    title: 'Diagnose',
    setAsIndex: false,
    tabBarIcon: 'search',
    tabBarLabel: 'Diagnose',
    component: DiagnoseScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: ScreenNames.MY_GARDEN,
    title: 'My Garden',
    setAsIndex: false,
    tabBarIcon: 'garden',
    tabBarLabel: 'My Garden',
    component: MyGardenScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: ScreenNames.PROFILE,
    title: 'Profile',
    setAsIndex: false,
    tabBarIcon: 'user',
    tabBarLabel: 'Profile',
    component: ProfileScreen,
    options: {
      headerShown: false,
    },
  },
];
