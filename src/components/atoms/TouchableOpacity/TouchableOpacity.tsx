import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { css } from '@emotion/native';
import { TouchableOpacityProps } from './';

const TouchableOpacity: React.FC<TouchableOpacityProps> = ({
  style,
  children,
  activeOpacity = 0.7,
  ...props
}) => {
  return (
    <RNTouchableOpacity style={css(style)} activeOpacity={activeOpacity} {...props}>
      {children}
    </RNTouchableOpacity>
  );
};

export default TouchableOpacity;
