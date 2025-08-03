import React from 'react';
import { render } from '@testing-library/react-native';
import View from './View';

describe('View', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(
      <View testID="parent-view">
        <View>Child Content</View>
      </View>,
    );
    expect(getByTestId('parent-view')).toBeTruthy();
  });

  it('should render without children', () => {
    const { getByTestId } = render(<View testID="empty-view" />);
    expect(getByTestId('empty-view')).toBeTruthy();
  });

  it('should handle testID prop', () => {
    const { getByTestId } = render(<View testID="test-view" />);
    expect(getByTestId('test-view')).toBeTruthy();
  });
});
