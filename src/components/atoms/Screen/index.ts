import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import { ViewProps } from 'react-native';
import Screen from './Screen';

export type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

export type ScreenProps = Omit<ViewProps, 'style'> & {
  children: ReactNode;
  backgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  safeArea?: boolean;
  style?: StyleSheet.NamedStyles;
};

export default Screen;
