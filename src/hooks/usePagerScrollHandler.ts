import { useAnimatedScrollHandler } from 'react-native-reanimated';

interface UsePagerScrollHandlerProps {
  onPageScroll: (event: { position: number }) => void;
}

export const usePagerScrollHandler = ({ onPageScroll }: UsePagerScrollHandlerProps) => {
  return useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet';
      // PagerView scroll event structure
      if (event.position !== undefined) {
        onPageScroll({ position: event.position });
      }
    },
  });
};
