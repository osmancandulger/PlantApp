import { FontWeight, LetterSpacing, LineHeight } from ':constants/typography';
import { getResponsiveHeight, getResponsiveWidth, scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex: 1;
    `;

    style.headerWrapper = `
      padding-horizontal: 24px;
    `;
    style.headerContainer = `
      background-color: ${theme.color.offWhite};
    `;

    style.contentWrapper = `
      padding-horizontal: 24px;
    `;

    style.header = `
      margin-top: 20px;
      margin-bottom: 20px;
    `;

    style.headerTitle = `
      font-size: ${scaleFontSize(16)}px;
      font-weight: ${FontWeight.REGULAR};
      letter-spacing: ${LetterSpacing.TIGHT_07}px;
    `;
    style.headerGreetingText = `
      font-size: ${scaleFontSize(24)}px;
      font-weight: ${FontWeight.MEDIUM};
      letter-spacing: 0.35px;
    `;

    style.searchContainer = `
      margin-bottom: 20px;
    `;

    style.searchInput = `
      border-radius: 12px;
      padding-horizontal: 16px;
      padding-vertical: 12px;
      font-size: 16px;
    `;

    style.premiumBanner = `
      background-color: ${theme.color.blackOliveBanner};
      border-radius: 12px;
      padding: 16px;
      height: ${getResponsiveHeight(64)}px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
    `;

    style.premiumContentWrapper = `
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `;

    style.premiumTitle = `
      font-size: ${scaleFontSize(16)}px;
      font-weight: ${FontWeight.BOLD};
      line-height: 21px;
      letter-spacing: -0.32px;
      color: ${theme.color.white};
    `;

    style.premiumSubtitle = `
      font-size: ${scaleFontSize(13)}px;
      font-weight: ${FontWeight.REGULAR};
    `;

    style.section = `
    
      margin-bottom: 32px;
    `;
    style.textContentWrapper = `
    `;

    style.sectionTitle = `
    font-size: ${scaleFontSize(15)}px;
    font-weight: ${FontWeight.MEDIUM};
    line-height: ${LineHeight.NORMAL}px;
    letter-spacing: -0.24px;
    margin-bottom: 16px;
    `;

    style.cardGrid = `
      flex-direction: row;
      gap: 12px;
    `;

    style.card = `
      flex: 1;
      background-color: #1A2B1A;
      border-radius: 12px;
      padding: 16px;
      min-height: 150px;
      justify-content: space-between;
    `;

    style.cardTitle = `
      margin-top: 12px;
    `;

    style.categoryGrid = `
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    `;

    style.categoryCard = `
      width: ${getResponsiveWidth(158)}px;
      height: ${getResponsiveHeight(152)}px;
      background-color: ${theme.color.bakgroundSecondary};
      border-radius: 12px;
      border: .5px solid ${theme.color.borderGreen};
      margin-bottom: 16px;
    `;

    style.cardImage = `
      position: absolute;
      bottom: 0;
      right: 0;
      width: ${getResponsiveWidth(146)}px;
      height: ${getResponsiveHeight(152)}px;
    `;

    style.categoryTitle = `
      width:80%;
      font-size: ${scaleFontSize(16)}px;
      font-weight: ${FontWeight.MEDIUM};
      color: ${theme.color.textPrimay};
      line-height: 21px;
      margin: 16px 0px;
    `;

    style.categoryImageContainer = `
      position: absolute;
      bottom: 16px;
      right: 16px;
      width: ${getResponsiveWidth(52)}px;
      height: ${getResponsiveHeight(52)}px;
    `;

    style.categoryImage = `
      position: relative;
      width: 100%;
      height: 100%;
      resize-mode: contain;
    `;

    style.leafContainer = `
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      justify-content: space-between;
    `;

    style.iconContainer = `
      position: relative;
    `;

    style.badge = `
      position: absolute;
      top: -4px;
      right: -3px;
      width: ${getResponsiveWidth(15)}px;
      height: ${getResponsiveHeight(15)}px;
      background-color: ${theme.color.red};
      border-radius: 100px;
      justify-content: center;
      align-items: center;
    `;

    style.badgeText = `
      font-size: ${scaleFontSize(8)}px;
      font-weight: ${FontWeight.BOLD};
      color: ${theme.color.white};
      text-align: center;
    `;

    style.chevronRight = `
      font-size: ${scaleFontSize(16)}px;
      font-weight: ${FontWeight.BOLD};
      color: ${theme.color.pastelYellow};
    `;

    return style;
  };
}
