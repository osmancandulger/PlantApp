import { ThemeType } from ':enums/common';
import { ReactNode } from 'react';

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeProfile {
  selectedTheme: ThemeType;
}
