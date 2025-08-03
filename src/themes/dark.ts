import { Theme } from '@emotion/react';
import colors from '../constants/colors';
import { ThemeType } from '../enums/common';
export const theme: Theme = {
  type: ThemeType.DARK,
  color: {
    primary: colors.primary,
    textMuted: colors.greenBlackTransparent,
    textPrimay: colors.greenBlack,
    green: colors.emerald,
  },
};

export default theme;
