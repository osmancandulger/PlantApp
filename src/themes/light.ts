import { Theme } from '@emotion/react';
import colors from '../constants/Colors';
import { ThemeType } from '../enums/common';
export const theme: Theme = {
  type: ThemeType.LIGHT,
  color: {
    primary: colors.primary,
  },
};

export default theme;
