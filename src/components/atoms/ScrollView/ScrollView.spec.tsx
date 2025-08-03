import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ScrollView from './ScrollView';
import View from '../View';

jest.mock('../../../hooks/useStyleSheet', () => jest.fn(() => ({ scrollView: {} })));

describe('ScrollView', () => {
  it('should render children correctly', () => {
    const { getByTestId } = render(
      <ScrollView testID="scroll-view">
        <View>Scrollable Content</View>
      </ScrollView>,
    );
    expect(getByTestId('scroll-view')).toBeTruthy();
  });

  it('should handle horizontal prop', () => {
    const { getByTestId } = render(
      <ScrollView horizontal testID="horizontal-scroll">
        <View>Horizontal Content</View>
      </ScrollView>,
    );
    expect(getByTestId('horizontal-scroll')).toBeTruthy();
  });

  it('should handle scroll events', () => {
    const mockOnScroll = jest.fn();
    const { getByTestId } = render(
      <ScrollView onScroll={mockOnScroll} testID="scroll-events">
        <View>Content</View>
      </ScrollView>,
    );

    const scrollView = getByTestId('scroll-events');
    fireEvent.scroll(scrollView, { nativeEvent: { contentOffset: { y: 100 } } });
    expect(mockOnScroll).toHaveBeenCalled();
  });
});
