import React from 'react';
import { ScreenNames } from ':enums/screens';
import { HomeScreen, DiagnoseScreen, MyGardenScreen, ScannerScreen, ProfileScreen } from ':pages/';
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
    tabBarIcon: 'diagnose',
    tabBarLabel: 'Diagnose',
    component: DiagnoseScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Scanner',
    title: 'Scanner',
    setAsIndex: false,
    tabBarIcon: 'scanTabIcon',
    tabBarLabel: '',
    component: ScannerScreen,
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
    tabBarIcon: 'profile',
    tabBarLabel: 'Profile',
    component: ProfileScreen,
    options: {
      headerShown: false,
    },
  },
];
