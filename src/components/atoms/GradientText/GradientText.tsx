import React from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from '../LinearGradient/LinearGradient';
import { css } from '@emotion/native';

interface GradientTextProps {
  children: React.ReactNode;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: any;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
}) => {
  return (
    <MaskedView
      maskElement={<Text style={css(style, { backgroundColor: 'transparent' })}>{children}</Text>}
    >
      <LinearGradient colors={colors} start={start} end={end} style={style}>
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
