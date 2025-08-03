import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { CarouselProps, CarouselRef } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Carousel.styles';
import PagerView from 'react-native-pager-view';

import { css } from '@emotion/native';
import { View } from ':atoms/';
import PaginationIndicator from './Indicator';

const Carousel = forwardRef<CarouselRef, CarouselProps>(
  (
    {
      children,
      pagesLength,
      autoPlay = false,
      autoPlayInterval = 3000,
      initialIndex = 0,
      onSnapToItem,
      customFooter,
      showIndicator = true,
      style,
    },
    ref,
  ) => {
    const defaultStyle = useStyleSheet(initialStyle());
    const [position, setCurrentPosition] = useState(initialIndex);
    const pagerRef = useRef<any>(null);

    const handlePageSelected = (e: any) => {
      const newPosition = e.nativeEvent.position;
      setCurrentPosition(newPosition);
      onSnapToItem && onSnapToItem(newPosition);
    };

    useImperativeHandle(ref, () => ({
      goToPage: (page: number) => {
        if (page >= 0 && page < pagesLength) {
          pagerRef.current?.setPage(page);
          setTimeout(() => {
            setCurrentPosition(page);
            onSnapToItem && onSnapToItem(page);
          }, 1000);
        }
      },
      goToNextPage: () => {
        const nextPage = position + 1;
        if (nextPage < pagesLength) {
          pagerRef.current?.setPage(nextPage);
          setCurrentPosition(nextPage);
          onSnapToItem && onSnapToItem(nextPage);
          return true;
        }
        return false;
      },
      goToPrevPage: () => {
        const prevPage = position - 1;
        if (prevPage >= 0) {
          pagerRef.current?.setPage(prevPage);
          setCurrentPosition(prevPage);
          onSnapToItem && onSnapToItem(prevPage);
          return true;
        }
        return false;
      },
    }));

    useEffect(() => {
      if (autoPlay) {
        const interval = setInterval(() => {
          if (pagerRef.current) {
            const nextPage = (position + 1) % pagesLength;
            pagerRef.current.setPage(nextPage);
            onSnapToItem && onSnapToItem(nextPage);
          }
        }, autoPlayInterval);

        return () => clearInterval(interval);
      }
    }, [position, pagesLength, autoPlay, autoPlayInterval, onSnapToItem]);

    return (
      <View style={style}>
        <PagerView
          style={css(defaultStyle.pagerContainer)}
          initialIndex={initialIndex}
          onPageSelected={handlePageSelected}
          ref={pagerRef}
        >
          {children}
        </PagerView>

        {showIndicator && <PaginationIndicator totalPages={pagesLength} currentPage={position} />}
        {customFooter}
      </View>
    );
  },
);

export default Carousel;
