import { scaleFontSize } from ':utils';
import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';
import { FontWeight } from ':constants/typography';

export default function (
  variant: string = 'body1',
  color: string = 'primary',
  align: string = 'left',
) {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.text = `
      font-family: Rubik;
      ${getVariantStyles(variant)}
      ${getAlignStyles(align)}
      color: ${theme.color.textPrimay};
    `;

    return style;
  };
}

function getVariantStyles(variant: string): string {
  switch (variant) {
    case 'h1':
      return `font-size: ${scaleFontSize(32)}px; font-weight: ${FontWeight.BOLD};`;
    case 'h2':
      return `font-size: ${scaleFontSize(28)}px; font-weight: 600;`;
    case 'h3':
      return `font-size: ${scaleFontSize(24)}px; font-weight: 600;`;

    case 'body1':
      return `font-size: ${scaleFontSize(16)}px; font-weight: 400;`;
    case 'body2':
      return `font-size: ${scaleFontSize(14)}px; font-weight: 400;`;
    case 'caption':
      return `font-size: ${scaleFontSize(12)}px; font-weight: 400;`;
    case 'button':
      return `font-size: ${scaleFontSize(16)}px; font-weight: 600;`;
    case 'regular':
      return `font-size: ${scaleFontSize(16)}px; font-weight: 400;`;
    default:
      return `font-size: ${scaleFontSize(16)}px; font-weight: 400;`;
  }
}

function getAlignStyles(align: string): string {
  switch (align) {
    case 'left':
      return 'text-align: left;';
    case 'center':
      return 'text-align: center;';
    case 'right':
      return 'text-align: right;';
    default:
      return 'text-align: left;';
  }
}
