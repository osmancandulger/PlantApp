import React, { useCallback, useEffect, useState } from 'react';
import { ThemeType } from ':enums/common';
import { Appearance, useColorScheme } from 'react-native';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';
import { getFromLocalStorage } from ':utils';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { ThemeProviderProps, ThemeProfile } from './ThemeProvider.types';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(Appearance.getColorScheme() === 'dark');
  const deviceCurrentTheme = useColorScheme();
  const themeProfile: ThemeProfile = {
    selectedTheme: ThemeType.LIGHT,
  };
  const getTheme = useCallback(async () => {
    const themeOptions = await getFromLocalStorage('theme');

    themeOptions === ThemeType.SYSTEM
      ? setDarkMode(Appearance.getColorScheme() === 'dark')
      : themeOptions === ThemeType.DARK
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []);

  const deviceThemeListener = useCallback(async () => {
    const themeOptions = await getFromLocalStorage('theme');
    if (themeOptions === ThemeType.SYSTEM) {
      deviceCurrentTheme === ThemeType.DARK ? setDarkMode(true) : setDarkMode(false);
    }
  }, [deviceCurrentTheme]);

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    deviceThemeListener();
  }, [deviceCurrentTheme]);

  function getDarkModeFromTheme(selectedTheme: ThemeType): boolean {
    if (selectedTheme === ThemeType.SYSTEM) {
      return Appearance.getColorScheme() === 'dark';
    }
    return selectedTheme === ThemeType.DARK;
  }

  useEffect(() => {
    setDarkMode(getDarkModeFromTheme(themeProfile.selectedTheme));
  }, [themeProfile.selectedTheme]);

  return (
    <EmotionThemeProvider theme={!isDarkMode ? lightTheme : darkTheme}>
      {children}
    </EmotionThemeProvider>
  );
};
