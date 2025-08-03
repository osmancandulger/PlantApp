import '@emotion/react';
import { ThemeType } from '@/enums/common';
declare module '@emotion/primitives' {
  export const StyleSheet: any;
}
declare module '@emotion/react' {
  export interface Theme {
    type: ThemeType;
    color: {
      primary: string;
      textMuted: string;
      textPrimay: string;
      green: string;
      white: string;
      overlayMuted: string;
      overlayDark: string;
      surfaceDarkGreen: string;
      shadowGreen: string;
      lightBlack: string;
      noirGreen: string;
      whiteLight: string;
      borderMuted: string;
      labelMuted: string;
      offWhite: string;
      yellow: string;
      darkYellow: string;
      mildYellow: string;
      mediumYellow: string;
      red: string;
      blackOliveBanner: string;
      pastelYellow: string;
      black300: string;
      bakgroundSecondary: string;
      borderGreen: string;
    };
  }
}
