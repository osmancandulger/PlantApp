import React from 'react';
import RNLinearGradient from 'react-native-linear-gradient';
import { ViewStyle } from 'react-native';

interface LinearGradientProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const LinearGradient: React.FC<LinearGradientProps> = ({
  children,
  style,
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  ...props
}) => {
  return (
    <RNLinearGradient style={style} colors={colors} start={start} end={end} {...props}>
      {children}
    </RNLinearGradient>
  );
};

export default LinearGradient;
