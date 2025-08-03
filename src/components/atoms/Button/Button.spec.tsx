import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ button: {}, text: {} })));

jest.mock('../index', () => ({
  TouchableOpacity: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));
describe('Button Component', () => {
  it('renders with given title', () => {
    const { getByText } = render(<Button title="Click Me" onPress={jest.fn()} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Tap" onPress={onPressMock} />);
    fireEvent.press(getByText('Tap'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Disabled" onPress={onPressMock} disabled />);
    fireEvent.press(getByText('Disabled'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('applies custom style props', () => {
    const { getByText } = render(
      <Button
        title="Styled"
        onPress={jest.fn()}
        style={{ backgroundColor: 'red' }}
        textStyle={{ color: 'yellow' }}
      />,
    );
    const text = getByText('Styled');
    expect(text.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: 'yellow' })]),
    );
  });
});
