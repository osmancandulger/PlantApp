import React from 'react';
import { Text } from 'react-native';
import { css } from '@emotion/native';
import { ButtonProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Button.styles';
import { TouchableOpacity } from ':atoms/';
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  ...props
}) => {
  const styles = useStyleSheet(initialStyle(variant, size, disabled));

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={css([styles.text, textStyle])}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
