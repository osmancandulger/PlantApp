import React from 'react';
import { render } from '@testing-library/react-native';
import LinearGradient from './LinearGradient';

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => ({ children, colors, style }: any) => (
  <div data-testid="linear-gradient" data-colors={JSON.stringify(colors)} style={style}>
    {children}
  </div>
));

describe('LinearGradient', () => {
  const testColors = ['#FF0000', '#00FF00'];

  it('should render with colors', () => {
    const { root } = render(<LinearGradient colors={testColors} />);
    expect(root).toBeTruthy();
  });

  it('should render children', () => {
    const { root } = render(
      <LinearGradient colors={testColors}>
        <div>Gradient Content</div>
      </LinearGradient>,
    );
    expect(root).toBeTruthy();
  });

  it('should handle custom start and end props', () => {
    const { root } = render(
      <LinearGradient colors={testColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />,
    );
    expect(root).toBeTruthy();
  });
});
