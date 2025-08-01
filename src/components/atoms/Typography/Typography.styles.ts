import { StyleSheet } from '@emotion/primitives';

export default function (
  variant: string = 'body1',
  color: string = 'primary',
  align: string = 'left',
) {
  return function (isDark: boolean) {
    const style: StyleSheet.NamedStyles = {};

    style.text = `
      font-family: System;
      ${getVariantStyles(variant)}
      ${getColorStyles(color, isDark)}
      ${getAlignStyles(align)}
    `;

    return style;
  };
}

function getVariantStyles(variant: string): string {
  switch (variant) {
    case 'h1':
      return 'font-size: 32px; font-weight: 700; line-height: 40px;';
    case 'h2':
      return 'font-size: 28px; font-weight: 600; line-height: 36px;';
    case 'h3':
      return 'font-size: 24px; font-weight: 600; line-height: 32px;';
    case 'subtitle1':
      return 'font-size: 20px; font-weight: 500; line-height: 28px;';
    case 'subtitle2':
      return 'font-size: 18px; font-weight: 500; line-height: 24px;';
    case 'body1':
      return 'font-size: 16px; font-weight: 400; line-height: 24px;';
    case 'body2':
      return 'font-size: 14px; font-weight: 400; line-height: 20px;';
    case 'caption':
      return 'font-size: 12px; font-weight: 400; line-height: 16px;';
    case 'button':
      return 'font-size: 16px; font-weight: 600; line-height: 20px;';
    default:
      return 'font-size: 16px; font-weight: 400; line-height: 24px;';
  }
}

function getColorStyles(color: string, isDark: boolean): string {
  if (isDark) {
    switch (color) {
      case 'primary':
        return 'color: #FFFFFF;';
      case 'secondary':
        return 'color: #CCCCCC;';
      case 'white':
        return 'color: #FFFFFF;';
      case 'gray':
        return 'color: #888888;';
      case 'success':
        return 'color: #28AF6E;';
      default:
        return 'color: #FFFFFF;';
    }
  } else {
    switch (color) {
      case 'primary':
        return 'color: #1A1A1A;';
      case 'secondary':
        return 'color: #666666;';
      case 'white':
        return 'color: #FFFFFF;';
      case 'gray':
        return 'color: #999999;';
      case 'success':
        return 'color: #28AF6E;';
      default:
        return 'color: #1A1A1A;';
    }
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
