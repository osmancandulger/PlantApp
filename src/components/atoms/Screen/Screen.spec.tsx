import React from 'react';
import { render } from '@testing-library/react-native';
import Screen from './Screen';
import View from '../View';

jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ container: {} })));

describe('Screen', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(
      <Screen testID="screen">
        <View>Screen Content</View>
      </Screen>,
    );
    expect(getByTestId('screen')).toBeTruthy();
  });

  it('should render with custom background color', () => {
    const { getByTestId } = render(
      <Screen backgroundColor="#FF0000" testID="colored-screen">
        <View>Colored Screen</View>
      </Screen>,
    );
    expect(getByTestId('colored-screen')).toBeTruthy();
  });

  it('should handle safeArea prop', () => {
    const { getByTestId } = render(
      <Screen safeArea={false} testID="no-safe-area">
        <View>No Safe Area</View>
      </Screen>,
    );
    expect(getByTestId('no-safe-area')).toBeTruthy();
  });
});
