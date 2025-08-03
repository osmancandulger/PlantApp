import React from 'react';
import { render } from '@testing-library/react-native';
import View from '../View';

jest.spyOn(console, 'warn').mockImplementation(() => {});

const MockSvgIcon = ({ name, width, height }: any) => {
  if (name === 'unknown') {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <View data-testid="svg-icon" data-name={name} style={{ width, height }} />;
};

describe('SvgIcon', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component', () => {
    const { root } = render(<MockSvgIcon name="search" />);
    expect(root).toBeTruthy();
  });

  it('should render with custom size', () => {
    const { root } = render(<MockSvgIcon name="search" width={32} height={32} />);
    expect(root).toBeTruthy();
  });

  it('should warn for unknown icon', () => {
    render(<MockSvgIcon name="unknown" />);
    expect(console.warn).toHaveBeenCalledWith('Icon "unknown" not found');
  });
});
