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
    };
  }
}
