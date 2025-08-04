import React from 'react';
import { Text as RNText } from 'react-native';
import { css } from '@emotion/native';
import { TextProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Text.styles';

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'primary',
  align = 'left',
  style,
  ...props
}) => {
  const styles = useStyleSheet(initialStyle(variant, color, align));

  return (
    <RNText style={css([styles.text, style])} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
