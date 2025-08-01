import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import { TouchableOpacityProps } from 'react-native';
import Button from './Button';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  style?: StyleSheet.NamedStyles;
  textStyle?: StyleSheet.NamedStyles;
  children?: ReactNode;
};

export default Button;
