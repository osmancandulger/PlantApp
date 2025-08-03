import { Theme } from '@emotion/react';
import colors from '../constants/colors';
import { ThemeType } from '../enums/common';
export const theme: Theme = {
  type: ThemeType.LIGHT,
  color: {
    primary: colors.primary,
    textMuted: colors.greenBlackTransparent,
    textPrimay: colors.greenBlack,
    overlayDark: colors.backdropDarkTransparent,
    shadowGreen: colors.shadowGreen,
    lightBlack: colors.black200,
    surfaceDarkGreen: colors.blackOlive,
    green: colors.emerald,
    white: colors.white,
    overlayMuted: colors.sageOverlay,
    noirGreen: colors.blackOlive200,
  },
};

export default theme;
