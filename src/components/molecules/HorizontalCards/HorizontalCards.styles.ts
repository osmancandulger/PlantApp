import { FontWeight, LineHeight } from ':constants/typography';
import { getResponsiveHeight, getResponsiveWidth, scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex-direction: row;
    `;

    style.contentContainer = `
      padding-horizontal: ${getResponsiveWidth(24)}px;
      gap: ${getResponsiveWidth(16)}px;
    `;

    style.card = `
      width: ${getResponsiveWidth(240)}px;
      height: ${getResponsiveHeight(164)}px;
      border-radius: 12px;
      overflow: hidden;
      margin-left: 10px;
    `;

    style.cardImage = `
      width: 100%;
      height: 100%;
      justify-content: flex-end;
    `;

    style.textContainer = `
      padding: ${getResponsiveHeight(16)}px;
      align-items: flex-start;
      justify-content: center;
    `;

    style.blurContainer = `
      padding: ${getResponsiveHeight(12)}px;
      border-radius: 12px;
      overflow: hidden;
      background-color: ${theme.color.black300};
    `;

    style.title = `
      font-size: ${scaleFontSize(15)}px;
      font-weight: ${FontWeight.MEDIUM};
      color: ${theme.color.white};
      line-height: ${LineHeight.NORMAL}px;
    `;

    return style;
  };
}
