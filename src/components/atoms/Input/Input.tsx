import React from 'react';
import { TextInput, View } from 'react-native';
import { css } from '@emotion/native';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Input.styles.ts';
import { InputProps } from './';
import { useTheme } from '@emotion/react';
import SvgIcon from '../SvgIcon/SvgIcon.tsx';
import { InputType } from ':enums/common.ts';
import { BlurView } from '@react-native-community/blur';

const Input: React.FC<InputProps> = ({
  leftItem,
  rightItem,
  containerStyle,
  inputStyle,
  style,
  placeholderTextColor,
  type = InputType.DEFAULT,
  enableBlur = false,
  ...props
}) => {
  const theme = useTheme();
  const styles = useStyleSheet(initialStyle());
  const leftItemIcon = () => {
    if (type === InputType.SEARCH) {
      return <SvgIcon name="search" />;
    }
  };

  const containerBaseStyle = enableBlur ? styles.blurContainer : styles.container;

  return (
    <View
      style={css([
        containerBaseStyle,
        enableBlur && { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
        containerStyle,
      ])}
    >
      {!leftItem ? leftItemIcon() : <View style={styles.leftItemContainer}>{leftItem}</View>}
      <TextInput
        style={css([styles.input, inputStyle, style])}
        {...props}
        placeholderTextColor={placeholderTextColor || theme.color.labelMuted}
      />
      {rightItem && <View style={styles.rightItemContainer}>{rightItem}</View>}
    </View>
  );
};

export default Input;
