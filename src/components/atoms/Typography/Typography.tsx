import React from 'react';
import { Text } from 'react-native';
import { css } from '@emotion/native';
import { TypographyProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Typography.styles';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  color = 'primary',
  align = 'left',
  style,
  ...props
}) => {
  const styles = useStyleSheet(initialStyle(variant, color, align));

  return (
    <Text style={css([styles.text, style])} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
