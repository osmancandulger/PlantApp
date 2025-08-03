import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import Carousel from './Carousel';

export interface CarouselProps {
  children: ReactNode;
  style?: ViewStyle;
  pagesLength: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  initialIndex?: number;

  onSnapToItem?: (position: number) => void;
  customFooter?: ReactNode;
  showIndicator?: boolean;
}

export interface CarouselRef {
  goToPage: (page: number) => void;
  goToNextPage: () => boolean;
  goToPrevPage: () => boolean;
}

export { default as PaginationIndicator } from './Indicator';
export default Carousel;
