import { FontWeight, LetterSpacing, LineHeight } from ':constants/typography';
import { getResponsiveHeight, getResponsiveWidth, scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex: 1;
      padding:12px 24px;
    `;

    style.header = `
      align-items: center;
      margin-bottom: 40px;
    `;
    style.title = `
      font-size: ${scaleFontSize(28)}px;
      font-weight: ${FontWeight.REGULAR};
      letter-spacing: ${LetterSpacing.TIGHT_07}px;
      align-self: left;
    `;

    style.titleBold = `
      font-size: ${scaleFontSize(28)}px;
      font-weight: ${FontWeight.SEMI_BOLD};
      letter-spacing: ${LetterSpacing.TIGHT_07}px;
    `;

    style.subtitle = `
      margin-top: 8px;
      width: ${getResponsiveWidth(300)}px;
      align-self: left;
      line-height: ${LineHeight.RELAXED}px;
      color: ${theme.color.textMuted};
    `;

    style.imageContainer = `
      flex: 1;
      justify-content: center;
      align-items: center;
    `;

    style.plantPlaceholder = `
      width: 200px;
      height: 200px;
      background-color: #F8F9FA;
      border-radius: 100px;
      justify-content: center;
      align-items: center;
    `;

    style.footer = `
      align-items: center;
    `;

    style.button = `
      width: 100%;
      height: ${getResponsiveHeight(56)}px;
      margin-bottom: 16px;
      background-color: ${theme.color.green};
    `;

    style.buttonText = `
      font-size: ${scaleFontSize(15)}px;
      font-weight: ${FontWeight.BOLD};
      color: ${theme.color.white};
      line-height: ${LineHeight.LOOSE}px;
      letter-spacing: -0.24px;
    `;

    style.termsNotice = `
      font-weight: ${FontWeight.REGULAR};
      line-height: 15px;
      font-size: ${scaleFontSize(11)}px;
      color: ${theme.color.overlayMuted};
      width: ${getResponsiveWidth(232)}px;
    `;

    style.termsNoticeUnderline = `
      text-decoration-line: underline;
    `;

    return style;
  };
}
