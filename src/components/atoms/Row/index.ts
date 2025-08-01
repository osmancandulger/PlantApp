import { ReactNode } from 'react';
import { StyleSheet } from '@emotion/primitives';
import Row from './Row';

export type RowProps = {
  children?: ReactNode;
  style?: StyleSheet.NamedStyles;
};

export default Row;
