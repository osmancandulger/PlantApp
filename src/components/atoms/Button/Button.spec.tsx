import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

// Mock dependencies
jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ button: {}, text: {} })));

jest.mock('../index', () => ({
  TouchableOpacity: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));

describe('Button', () => {
  it('should render text correctly', () => {
    const { getByText } = render(<Button title="Test Button" onPress={() => {}} />);
    expect(getByText('Test Button')).toBeTruthy();
  });
});
