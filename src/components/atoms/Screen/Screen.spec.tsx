import React from 'react';
import { render } from '@testing-library/react-native';
import Screen from './Screen';

// Mock dependencies
jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ container: {} })));

describe('Screen', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(
      <Screen testID="screen">
        <div>Screen Content</div>
      </Screen>,
    );
    expect(getByTestId('screen')).toBeTruthy();
  });

  it('should render with custom background color', () => {
    const { getByTestId } = render(
      <Screen backgroundColor="#FF0000" testID="colored-screen">
        <div>Colored Screen</div>
      </Screen>,
    );
    expect(getByTestId('colored-screen')).toBeTruthy();
  });

  it('should handle safeArea prop', () => {
    const { getByTestId } = render(
      <Screen safeArea={false} testID="no-safe-area">
        <div>No Safe Area</div>
      </Screen>,
    );
    expect(getByTestId('no-safe-area')).toBeTruthy();
  });
});
