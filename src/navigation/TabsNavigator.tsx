/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { TabNavigatorParamList } from './types';
import { TabScreenRegistry } from './secure/TabScreenRegistry';
import { scaleFontSize } from ':utils';
import { t } from 'i18next';
import { SvgIcon } from ':atoms/';
import { useTheme } from '@emotion/react';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const centerTabStyle = {
  width: 56,
  height: 56,
  borderRadius: 28,
  backgroundColor: '#28AF6E',
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  marginBottom: 20,
  shadowColor: '#28AF6E',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 8,
};

const TabNavigator: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#ADB5BD',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F1F3F4',
          height: 100,
          paddingBottom: 20,
          paddingTop: 15,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      {TabScreenRegistry.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={!tab.setAsIndex ? (tab.name as keyof TabNavigatorParamList) : 'index'}
            options={{
              ...tab.options,
              title: t(tab.title),
              tabBarActiveTintColor: '#28AF6E',
              tabBarInactiveTintColor: '#ADB5BD',
              tabBarIcon: ({ focused, color }) => {
                // Special styling for scanner tab (center tab)
                if (tab.name === 'Scanner') {
                  return (
                    <View style={centerTabStyle}>
                      <SvgIcon
                        name={tab.tabBarIcon}
                        width={scaleFontSize(24)}
                        height={scaleFontSize(24)}
                        color="#FFFFFF"
                      />
                    </View>
                  );
                }

                if (focused) {
                  return (
                    <SvgIcon
                      name={tab.tabBarIcon}
                      width={scaleFontSize(24)}
                      height={scaleFontSize(24)}
                      color={theme.color.tabBarActiveTintColor}
                    />
                  );
                }

                return (
                  <SvgIcon
                    name={tab.tabBarIcon}
                    width={scaleFontSize(24)}
                    height={scaleFontSize(24)}
                    color={color}
                  />
                );
              },
              tabBarLabel: t(tab.tabBarLabel),
              headerShadowVisible: false,
            }}
            component={tab.component}
          />
        );
      })}
      {/* <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // TODO: Add icon
        }}
      />
      <Tab.Screen 
        name="Diagnose" 
        component={DiagnoseScreen}
        options={{
          tabBarLabel: 'Diagnose',
          // TODO: Add icon
        }}
      />
      <Tab.Screen 
        name="MyGarden" 
        component={MyGardenScreen}
        options={{
          tabBarLabel: 'My Garden',
          // TODO: Add icon
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          // TODO: Add icon
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
