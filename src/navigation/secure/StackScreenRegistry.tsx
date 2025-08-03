import React from 'react';
import { ScreenNames } from ':enums/screens';
import { Text } from 'react-native';
import { SettingsScreen, QuestionDetailScreen } from ':pages/';

type NavigationScreenProps = {
  name: string;
  component: React.ComponentType<any> | null;
  options: any;
};

export const SecureScreenRegistry: NavigationScreenProps[] = [
  {
    name: ScreenNames.SETTINGS,
    component: SettingsScreen,
    options: {
      headerTitleStyle: { fontSize: 18 },
      title: '',
      headerTitleAlign: 'center',
      headerBackVisible: true,
      headerLeft: () => <Text>Header Left</Text>,
    },
  },
  {
    name: ScreenNames.QUESTION_DETAIL,
    component: QuestionDetailScreen,
    options: {
      title: '',
      headerShown: true,
      headerBackVisible: true,
    },
  },
];
