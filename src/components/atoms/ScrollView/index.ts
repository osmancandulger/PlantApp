import { ReactNode } from 'react';
import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import ScrollView from './ScrollView';

export interface ScrollViewProps extends Omit<RNScrollViewProps, 'style'> {
  children: ReactNode;
  style?: any;
  contentContainerStyle?: any;
  horizontal?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
}

export default ScrollView;
