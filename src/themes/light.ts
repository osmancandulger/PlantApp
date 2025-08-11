import { Theme } from '@emotion/react';
import colors from '../constants/Colors';
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
    borderMuted: colors.neutralGray25,
    labelMuted: colors.grayMedium,
    offWhite: colors.offWhite,
    yellow: colors.yellow,
    darkYellow: colors.yellow200,
    mildYellow: colors.yellow100,
    blackOliveBanner: colors.blackOlive100,
    mediumYellow: colors.yellow150,
    red: colors.red,
    pastelYellow: colors.yellow300,
    black300: colors.black300,
    bakgroundSecondary: colors.lightGray,
    borderGreen: colors.transparentGreen,
    tabBarActiveTintColor: colors.emerald,
    grayLight: colors.gray200,
    tabNavBorder: colors.whiteGray,
    secondaryGreen: colors.mintGreen,
  },
};

export default theme;
