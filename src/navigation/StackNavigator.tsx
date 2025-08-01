import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import TabsNavigator from './TabsNavigator';
import { ScreenRegistry } from './nonsecure/ScreenRegistry';

const Stack = createStackNavigator();
type NavigationScreenProps = {
  name: string;
  component: React.ComponentType<any> | null;
  options: any;
};
function StackNavigation() {
  const screenOptions: NavigationScreenProps[] = [
    ...ScreenRegistry,
    {
      name: 'TabsNavigator',
      component: TabsNavigator,
      options: {},
    },
  ];

  return (
    <Stack.Navigator>
      {screenOptions?.length &&
        screenOptions.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
    </Stack.Navigator>
  );
}

export default StackNavigation;
