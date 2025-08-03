import React, { useMemo } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import TabsNavigator from '../TabsNavigator';
import { SecureScreenRegistry } from './StackScreenRegistry';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();
type NavigationScreenProps = {
  name: string;
  component: React.ComponentType<any> | null;
  options: any;
};
function StackNavigation() {
  const navigatorOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerMode: 'screen',
      headerShown: true,
      safeAreaInsets: { top: 0 },
      cardStyle: {
        backgroundColor: '#fff',
        overflow: 'visible',
      },
    }),
    [],
  );
  const { t } = useTranslation();
  const screenOptions: NavigationScreenProps[] = [
    {
      name: 'TabsNavigator',
      component: TabsNavigator,
      options: {
        headerShown: false,
      },
    },
    ...SecureScreenRegistry,
  ];

  return (
    <Stack.Navigator screenOptions={navigatorOptions} initialRouteName="TabsNavigator">
      {screenOptions?.length &&
        screenOptions.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              ...item.options,
              headerShadowVisible: false,
              title: item?.options?.title ? t(item.options.title) : '',
            }}
          />
        ))}
    </Stack.Navigator>
  );
}

export default StackNavigation;
