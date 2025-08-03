import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import { ViewProps } from 'react-native';
import Screen from './Screen';

export type ScreenProps = Omit<ViewProps, 'style'> & {
  children: ReactNode;
  backgroundColor?: string;
  safeArea?: boolean;
  style?: StyleSheet.NamedStyles;
};

export default Screen;
