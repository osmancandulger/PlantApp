import React from 'react';
import { render } from '@testing-library/react-native';
import Typography from './Typography';

jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ text: {} })));

describe('Typography', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(<Typography testID="typography">Hello World</Typography>);
    expect(getByTestId('typography')).toBeTruthy();
  });

  it('should render with different variants', () => {
    const { getByTestId } = render(
      <Typography variant="h1" testID="heading">
        Heading
      </Typography>,
    );
    expect(getByTestId('heading')).toBeTruthy();
  });

  it('should render with different colors', () => {
    const { getByTestId } = render(
      <Typography color="secondary" testID="colored">
        Colored Text
      </Typography>,
    );
    expect(getByTestId('colored')).toBeTruthy();
  });
});
