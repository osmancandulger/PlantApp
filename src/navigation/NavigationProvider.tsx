import React, { useRef } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from '../hooks/useRoutings';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
  },
};

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef} onReady={() => {}}>
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
