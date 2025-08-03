import React from 'react';
import { render } from '@testing-library/react-native';
import GradientText from './GradientText';
import View from '../View';

jest.mock('@react-native-masked-view/masked-view', () => ({ children, maskElement }: any) => (
  <View data-testid="masked-view">
    <View data-testid="mask-element">{maskElement}</View>
    <View data-testid="masked-content">{children}</View>
  </View>
));

jest.mock('../LinearGradient/LinearGradient', () => ({ children, colors }: any) => (
  <View data-testid="linear-gradient" data-colors={JSON.stringify(colors)}>
    {children}
  </View>
));

describe('GradientText', () => {
  const testColors = ['#FF0000', '#00FF00'];

  it('should render children with gradient', () => {
    const { root } = render(<GradientText colors={testColors}>Gradient Text</GradientText>);

    expect(root).toBeTruthy();
  });
});
