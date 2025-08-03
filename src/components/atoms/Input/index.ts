import { InputType } from ':enums/common';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export { default } from './Input';

export type InputProps = TextInputProps & {
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderTextColor?: string;
  type?: InputType;
  inputStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  enableBlur?: boolean;
};
