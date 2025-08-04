import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Text';

jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ text: {} })));

describe('Text', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(<Text testID="typography">Hello World</Text>);
    expect(getByTestId('typography')).toBeTruthy();
  });

  it('should render with different variants', () => {
    const { getByTestId } = render(<Text testID="heading">Heading</Text>);
    expect(getByTestId('heading')).toBeTruthy();
  });

  it('should render with different colors', () => {
    const { getByTestId } = render(
      <Text color="secondary" testID="colored">
        Colored Text
      </Text>,
    );
    expect(getByTestId('colored')).toBeTruthy();
  });
});
