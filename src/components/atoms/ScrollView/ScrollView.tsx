import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import { css } from '@emotion/native';
import { ScrollViewProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './ScrollView.styles';

const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  style,
  contentContainerStyle,
  horizontal = false,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  ...props
}) => {
  const styles = useStyleSheet(initialStyle());

  return (
    <RNScrollView
      style={css([styles.scrollView, style])}
      contentContainerStyle={css(contentContainerStyle)}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...props}
    >
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
