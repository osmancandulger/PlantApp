import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import { ViewProps as PureViewProps } from 'react-native';
import View from './View';

export type ViewProps = Omit<PureViewProps, 'style'> & {
  children?: ReactNode;
  style?: StyleSheet.NamedStyles;
};

export default View;
