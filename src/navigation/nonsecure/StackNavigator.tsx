import React, { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import {
  StackNavigationOptions,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { ScreenRegistry } from '../nonsecure/ScreenRegistry';
import { useTranslation } from 'react-i18next';
import { ScreenNames } from '../../enums/screens';

const Stack = createStackNavigator();

function StackNavigation() {
  const [initialRouteName, setInitialRouteName] = useState<string | undefined>(ScreenNames.WELCOME);
  const { t } = useTranslation();
  const navigatorOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerMode: 'screen',
      headerShown: true,
      safeAreaInsets: { top: 0 },
      cardStyle: {
        backgroundColor: 'white',
        overflow: 'visible',
      },
    }),
    [],
  );

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={navigatorOptions}>
      {ScreenRegistry?.length &&
        ScreenRegistry.filter((item) => item.component !== null).map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            initialParams={{ screenName: item.name }}
            component={item.component!}
            options={{ ...item.options, title: t(item?.options?.title) }}
          />
        ))}
    </Stack.Navigator>
  );
}

export default StackNavigation;
