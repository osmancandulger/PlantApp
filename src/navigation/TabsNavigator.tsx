import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from './types';
import { TabScreenRegistry } from './secure/TabScreenRegistry';
import { convertToTitleCase, scaleFontSize } from ':utils';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator: React.FC = () => {
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
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
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
            name={!tab.setAsIndex ? tab.name : 'index'}
            options={{
              ...tab.options,
              title: t(tab.title),
              tabBarActiveTintColor: '#28AF6E',
              tabBarInactiveTintColor: '#ADB5BD',
              tabBarIcon: ({ focused, color, size }) => {
                if (focused) {
                  return (
                    <SvgIcon
                      name={`active${convertToTitleCase(tab.tabBarIcon as string)}`}
                      size={scaleFontSize(24)}
                      color={color}
                    />
                  );
                }

                return <SvgIcon name={tab.tabBarIcon} size={scaleFontSize(24)} color={color} />;
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
