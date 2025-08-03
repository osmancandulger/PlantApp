import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TouchableOpacity from './TouchableOpacity';
import View from '../View';

describe('TouchableOpacity', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(
      <TouchableOpacity testID="touchable">
        <View>Press me</View>
      </TouchableOpacity>,
    );
    expect(getByTestId('touchable')).toBeTruthy();
  });

  it('should handle onPress', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <TouchableOpacity onPress={mockOnPress} testID="pressable">
        <View>Press me</View>
      </TouchableOpacity>,
    );

    fireEvent.press(getByTestId('pressable'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should render with custom activeOpacity', () => {
    const { getByTestId } = render(
      <TouchableOpacity activeOpacity={0.5} testID="opacity-touchable">
        <View>Custom Opacity</View>
      </TouchableOpacity>,
    );
    expect(getByTestId('opacity-touchable')).toBeTruthy();
  });
});
