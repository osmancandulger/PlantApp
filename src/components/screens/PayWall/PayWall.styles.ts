import { FontWeight, LineHeight } from ':constants/typography';
import { getResponsiveHeight, getResponsiveWidth, scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.background = `
      background-color: ${theme.color.surfaceDarkGreen};
      flex: 1;

    `;

    style.container = `
      flex: 1;
    `;

    style.backgroundImage = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${getResponsiveHeight(571)}px;
      z-index: 0;
    `;

    style.overlay = `
      position: absolute;
      top: 28%;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      justify-content: flex-start;
    `;

    style.contentContainer = `
    margin-left:24px;
    `;

    style.contentTitleContainer = `
    `;

    style.contentTitle = `
      color: ${theme.color.white};
      font-size: ${scaleFontSize(27)}px;
      font-weight: ${FontWeight.LIGHT};
    `;
    style.contentSubtitle = `
      color: ${theme.color.white};
      opacity: 0.7;
      font-size: ${scaleFontSize(17)}px;
      font-weight: ${FontWeight.LIGHT};
      line-height: ${LineHeight.LOOSE}px;
      margin-top:8px;
    `;

    style.contentTitleBold = `
       font-size: ${scaleFontSize(30)}px;
       font-weight: ${FontWeight.EXTRA_BOLD};
     `;

    style.contentFeaturesContainer = `
       margin-top: 32px;
       
     `;

    style.featuresScrollContent = `
     `;

    style.featureCard = `
       width: ${getResponsiveWidth(156)}px;
       height: ${getResponsiveHeight(130)}px;
       background-color: ${theme.color.shadowGreen};
       border-radius: 16px;
       padding: 16px;
       margin-left: 8px;
       justify-content: space-between;
     `;

    style.featureIconContainer = `
       width: ${getResponsiveWidth(40)}px;
       height: ${getResponsiveHeight(40)}px;
       justify-content: center;
       align-items: center;
       margin-bottom:16px;
       background-color: ${theme.color.lightBlack};
       border-radius: 8px;
     `;

    style.featureTextContainer = `
       justify-content: center;
       flex: 1;
     `;

    style.featureTitle = `
       font-size: ${scaleFontSize(20)}px;
       font-weight: ${FontWeight.MEDIUM};
       color: ${theme.color.white};
       line-height: ${LineHeight.LOOSE}px;
       letter-spacing: 0.38px;
     `;

    style.featureSubtitle = `       
      font-size: ${scaleFontSize(13)}px;
       font-weight: ${FontWeight.REGULAR};
       color: ${theme.color.white};
       line-height: ${LineHeight.TIGHT}px;
       letter-spacing: -0.08px;
       margin-top: 4px;
       opacity: 0.7;
     `;

    style.subscriptionOptionsContainer = `
      margin-right: 24px;
      margin-top: 8px;
    `;

    style.subscriptionOption = `
      background-color: ${theme.color.noirGreen};
      border-radius: 16px;
      border-width: 2px;
      border-color: transparent;
      padding: 20px;
      position: relative;
      margin-top: 16px;
    `;

    style.subscriptionOptionSelected = `
      border-width: 1.5px;
      border-color: ${theme.color.green};
    `;

    style.subscriptionOptionContent = `
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `;

    style.subscriptionOptionLeft = `
      flex-direction: row;
      align-items: center;
      flex: 1;
    `;

    style.radioButton = `
      width: 24px;
      height: 24px;
      border-radius: 12px;
      border-width: 2px;
      border-color: ${theme.color.white};
      margin-right: 16px;
      justify-content: center;
      align-items: center;
    `;

    style.radioButtonSelected = `
      width: ${getResponsiveWidth(24)}px;
      height: ${getResponsiveHeight(24)}px;
      border-radius: 12px
      background-color: ${theme.color.green};
      border-width: 0px;
      justify-content: center;
      align-items: center;
    `;

    style.radioButtonSelectedInner = `
      width: ${getResponsiveWidth(8)}px;
      height: ${getResponsiveHeight(8)}px;
      border-radius: 4px;
      background-color: ${theme.color.white};
    `;

    style.subscriptionOptionText = `
      flex: 1;
    `;

    style.subscriptionTitle = `
      font-size: ${scaleFontSize(16)}px;
      font-weight: ${FontWeight.MEDIUM};
      color: ${theme.color.white};
      margin-bottom: 4px;
    `;

    style.subscriptionSubtitle = `
      font-size: ${scaleFontSize(14)}px;
      font-weight: ${FontWeight.REGULAR};
      color: ${theme.color.white};
      opacity: 0.7;
    `;
    style.subscriptionSubtitleLight = `
      font-size: ${scaleFontSize(12)}px;
      font-weight: ${FontWeight.LIGHT};
      color: ${theme.color.white};
      opacity: 0.7;
    `;

    style.subscriptionSubtitleBold = `
      font-size: ${scaleFontSize(12)}px;
      font-weight: ${FontWeight.LIGHT};
      color: ${theme.color.white};
      font-weight: ${FontWeight.REGULAR};
      opacity: 1;
    `;

    style.badgeContainer = `
      position: absolute;
      top: -20px;
      right: -20px;
      width: ${getResponsiveWidth(77)}px;
      height: 26px;
      background-color: ${theme.color.green};
      border-top-right-radius: 14px;
      border-bottom-left-radius: 20px;
      justify-content: center;
      align-items: center;
    `;

    style.badgeText = `
      font-size: ${scaleFontSize(12)}px;
      font-weight: ${FontWeight.MEDIUM};
      line-height: ${LineHeight.TIGHT}px;
      color: ${theme.color.white};
    `;

    style.footerContainer = `
      margin-top: 26px;
      margin-right: 24px;
      `;

    style.footerButton = `
      height: ${getResponsiveHeight(52)}px;
    `;

    style.footerButtonText = `
      font-size: ${scaleFontSize(16)}px;
      font-weight: ${FontWeight.MEDIUM};
      line-height: ${LineHeight.LOOSE}px;
      letter-spacing:-0.24px;
`;
    style.footerText = `
      font-size: ${scaleFontSize(9)}px;
      font-weight: ${FontWeight.LIGHT};
      letter-spacing:0px;
      color: ${theme.color.white};
      opacity: 0.52;
      text-align: center;
      margin-top:8px;
`;

    style.footerLinksContainer = `
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
    `;

    style.footerLinkText = `
      font-size: ${scaleFontSize(12)}px;
      font-weight: ${FontWeight.REGULAR};
      color: ${theme.color.white};
      opacity: 0.7;
    `;

    style.footerLinkSeparator = `
      font-size: ${scaleFontSize(12)}px;
      color: ${theme.color.white};
      opacity: 0.7;
      margin-horizontal: 8px;
    `;

    return style;
  };
}
