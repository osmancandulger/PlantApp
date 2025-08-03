import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, PixelRatio, Platform } from 'react-native';

export const getFromLocalStorage = async (key: string): Promise<any> => {
  return await AsyncStorage.getItem(key);
};
export const removeFromLocalStorage = async (key: string): Promise<any> => {
  return await AsyncStorage.removeItem(key);
};

export const setToLocalStorage = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, value);
};

export const clearLocalStorage = async () => {
  return await AsyncStorage.clear();
};
export const capitalizeText = (text: string) =>
  (text && text[0].toUpperCase() + text.slice(1)) || '';

export const convertToTitleCase = (input: string): string => {
  return input
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
export const getResponsiveWidth = (designPx: number) =>
  (Dimensions.get('window').width * designPx) / 375;

export const getResponsiveHeight = (designPx: number) =>
  (Dimensions.get('window').height * designPx) / 812;

export function scaleFontSize(size: number) {
  const { width, height } = Dimensions.get('window');

  const scaleWidth = width / 375;
  const scaleHeight = height / 812;
  const scale = Math.min(scaleWidth, scaleHeight);
  const platforSize = Platform.OS === 'android' ? size + 2 : size;
  const newSize = platforSize * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
