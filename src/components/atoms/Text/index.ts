import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import { TextProps as RNTextProps } from 'react-native';
import Text from './Text';

export type TextVariant = 'h1' | 'heading' | 'subtitle' | 'body' | 'caption' | 'button';

export type TextColor = 'primary' | 'secondary' | 'white' | 'gray' | 'success';
export type TextAlign = 'left' | 'center' | 'right';

export type TextProps = Omit<RNTextProps, 'style'> & {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  align?: TextAlign;
  style?: StyleSheet.NamedStyles;
};

export default Text;
