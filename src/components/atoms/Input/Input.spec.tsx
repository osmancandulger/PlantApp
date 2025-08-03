import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from './Input';
import View from '../View';

// Mock dependencies
jest.mock('../../../hooks/useStyleSheet', () =>
  jest.fn(() => ({
    container: {},
    input: {},
    leftItemContainer: {},
    rightItemContainer: {},
  })),
);

jest.mock('@emotion/react', () => ({
  useTheme: () => ({ color: { labelMuted: '#999' } }),
}));

jest.mock('@react-native-community/blur', () => ({
  BlurView: ({ children }: any) => <View>{children}</View>,
}));

describe('Input', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Input testID="test-input" />);
    expect(getByTestId('test-input')).toBeTruthy();
  });

  it('should handle text changes', () => {
    const mockOnChangeText = jest.fn();
    const { getByTestId } = render(<Input testID="test-input" onChangeText={mockOnChangeText} />);

    const input = getByTestId('test-input');
    fireEvent.changeText(input, 'test text');
    expect(mockOnChangeText).toHaveBeenCalledWith('test text');
  });

  it('should render with placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });
});
