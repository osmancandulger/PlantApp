import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import { TextProps } from 'react-native';
import Typography from './Typography';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button';

export type TypographyColor = 'primary' | 'secondary' | 'white' | 'gray' | 'success';
export type TypographyAlign = 'left' | 'center' | 'right';

export type TypographyProps = Omit<TextProps, 'style'> & {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  style?: StyleSheet.NamedStyles;
};

export default Typography;
