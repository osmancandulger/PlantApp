import { FontWeight, LetterSpacing } from ':constants/typography';
import { getResponsiveHeight, scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex: 1;
      padding: 12px 24px;
    `;

    style.header = `
      
    `;

    style.highlightText = `
      color: #28AF6E;
    `;
    style.title = `
    font-size: ${scaleFontSize(28)}px;
    font-weight: ${FontWeight.MEDIUM};
    letter-spacing: -1px;
    align-self: left;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `;

    style.titleBold = `
    font-weight: ${FontWeight.EXTRA_BOLD};
  `;

    style.imageContainer = `
      align-items: center;
    `;
    style.careGuideContainer = `
      align-items: center;
      
    `;

    style.onboardingPhone = `
      height: 100%;
      margin-top: 12px;

    `;
    style.careGuideImage = `
      height: 100%;
      margin-top: 34px;
    `;

    style.footerButton = `
      width: 100%;
      height: ${getResponsiveHeight(56)}px;
      margin-bottom: 25px;
    `;

    style.indicator = `
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #E0E0E0;
    `;

    style.activeIndicator = `
      background-color: #28AF6E;
    `;

    // Carousel specific styles
    style.carouselContainer = `
      flex: 1;
    `;

    style.page = `
      width: 100%;
      height: 100%;
      flex: 1;
    `;

    style.slideContainer = `
      flex: 1;
    `;

    // Title and brush styles
    style.titleContainer = `
      align-items: flex-end;
    `;

    style.brushContainer = `
    position: absolute;
    bottom: 18px;
    margin-right: 18px;
    `;

    style.guideContainer = `
  
    `;
    style.guideBrush = `
      width: 150px;
      margin-top: 5px;
      margin-right: 55px;
    `;

    return style;
  };
}
