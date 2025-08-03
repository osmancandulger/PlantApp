import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

export type TouchableOpacityProps = RNTouchableOpacityProps & {
  style?: any;
  children?: React.ReactNode;
};
export { default } from './TouchableOpacity';
