import React from 'react';
import { View } from 'react-native';
import useStyleSheet from ':hooks/useStyleSheet';
import { css } from '@emotion/native';
import initialStyle from './Carousel.styles';

interface PaginationIndicatorProps {
  totalPages: number;
  currentPage: number;
}

const PaginationIndicator: React.FC<PaginationIndicatorProps> = ({ totalPages, currentPage }) => {
  const styles = useStyleSheet(initialStyle());

  return (
    <View style={css(styles.indicatorContainer)}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          style={css([styles.indicator, currentPage === index && styles.activeIndicator])}
        />
      ))}
    </View>
  );
};

export default PaginationIndicator;
