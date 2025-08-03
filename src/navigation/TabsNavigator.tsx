/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from './types';
import { TabScreenRegistry } from './secure/TabScreenRegistry';
import { getResponsiveHeight, getResponsiveWidth, scaleFontSize } from ':utils';
import { t } from 'i18next';
import { SvgIcon, LinearGradient } from ':atoms/';
import { useTheme } from '@emotion/react';
import { ScreenNames } from ':enums/screens';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator: React.FC = () => {
  const theme = useTheme();

  const centerTabStyle = {
    width: getResponsiveWidth(64),
    height: getResponsiveHeight(64),
    borderRadius: 999,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    marginBottom: 43,
    shadowColor: theme.color.tabBarActiveTintColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.tabBarActiveTintColor,
        tabBarInactiveTintColor: theme.color.grayLight,
        tabBarStyle: {
          backgroundColor: theme.color.white,
          borderTopWidth: 1,
          borderTopColor: theme.color.tabNavBorder,
          height: 84,
          paddingBottom: 20,
          paddingTop: 8,
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
              tabBarActiveTintColor: theme.color.tabBarActiveTintColor,
              tabBarInactiveTintColor: theme.color.grayLight,
              tabBarIcon: ({ focused, color }) => {
                if (tab.name === ScreenNames.SCANNER) {
                  return (
                    <LinearGradient
                      colors={[theme.color.tabBarActiveTintColor, theme.color.secondaryGreen]}
                      start={{ x: 0.8, y: 0.2 }}
                      end={{ x: 0.2, y: 0.8 }}
                      style={centerTabStyle}
                    >
                      <SvgIcon
                        name={tab.tabBarIcon}
                        width={scaleFontSize(24)}
                        height={scaleFontSize(24)}
                        color="#FFFFFF"
                      />
                    </LinearGradient>
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
    </Tab.Navigator>
  );
};

export default TabNavigator;
