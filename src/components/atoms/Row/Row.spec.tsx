import React from 'react';
import { render } from '@testing-library/react-native';
import Row from './Row';
import { View } from 'react-native';

jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ row: { flexDirection: 'row' } })));
jest.mock('../index', () => ({
  View: ({ children, style }: any) => <div style={style}>{children}</div>,
}));

describe('Row', () => {
  it('should render children correctly', () => {
    const { root } = render(
      <Row>
        <View>Row Content</View>
      </Row>,
    );
    expect(root).toBeTruthy();
  });

  it('should render multiple children', () => {
    const { toJSON } = render(
      <Row>
        <View>First</View>
        <View>Second</View>
      </Row>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render without children', () => {
    const { root } = render(<Row />);
    expect(root).toBeTruthy();
  });
});
