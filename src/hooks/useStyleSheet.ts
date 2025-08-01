import { StyleSheet } from '@emotion/primitives';
import { Theme, useTheme } from '@emotion/react';

export default function useStyleSheet(
  styles: (theme: Theme) => StyleSheet.NamedStyles,
): StyleSheet.NamedStyles {
  const theme = useTheme();
  const themedStyles = styles(theme);
  return themedStyles;
}
