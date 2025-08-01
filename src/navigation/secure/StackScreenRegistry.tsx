import React from 'react';
import { ScreenNames } from ':enums/screens';
import { Text } from 'react-native';

type NavigationScreenProps = {
  name: string;
  component: React.ComponentType<any> | null;
  options: any;
};

export const SecureScreenRegistry: NavigationScreenProps[] = [
  {
    name: '',
    component: null,
    options: {
      headerTitleStyle: { fontSize: 18 },
      title: '',
      headerTitleAlign: 'center',
      headerBackVisible: true,
      headerLeft: () => <Text>Header Left</Text>,
    },
  },
];
