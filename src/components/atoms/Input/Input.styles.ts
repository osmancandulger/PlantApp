import { FontWeight, LineHeight } from ':constants/typography';
import { getResponsiveHeight, getResponsiveWidth, scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex-direction: row;
      align-items: center;
      border-width: 0.2px;
      border-color: ${theme.color.borderMuted};
      border-radius: 8px;
      background-color: ${theme.color.whiteLight};  
      padding-horizontal: 16px;
      height: ${getResponsiveHeight(44)}px;
    `;

    style.blurContainer = `
      flex-direction: row;
      align-items: center;
      border-width: 0.2px;
      border-color: ${theme.color.borderMuted};
      border-radius: 8px;
      overflow: hidden;
      padding-horizontal: 16px;
      height: ${getResponsiveHeight(44)}px;
      background-color: ${theme.color.white};
      opacity: 0.85;
    `;

    style.input = `
      flex: 1;
      font-size: ${scaleFontSize(15.5)}px;
      font-weight: ${FontWeight.REGULAR};
      color: ${theme.color.textPrimay};
      margin-left: 8px;
    `;

    style.leftItemContainer = `
      margin-right: 8px;
    `;

    style.rightItemContainer = `
      margin-left: 8px;
    `;

    return style;
  };
}
