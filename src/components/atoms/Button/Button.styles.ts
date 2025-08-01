import { StyleSheet } from '@emotion/primitives';

export default function (
  variant: string = 'primary',
  size: string = 'medium',
  disabled: boolean = false,
) {
  return function (isDark: boolean) {
    const style: StyleSheet.NamedStyles = {};

    // Base button styles
    style.button = `
      border-radius: 12px;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      ${getVariantStyles(variant)}
      ${getSizeStyles(size)}
      ${disabled ? 'opacity: 0.6;' : ''}
    `;

    // Text styles
    style.text = `
      font-weight: 600;
      text-align: center;
      ${getTextVariantStyles(variant)}
      ${getTextSizeStyles(size)}
      ${disabled ? 'opacity: 0.6;' : ''}
    `;

    return style;
  };
}

function getVariantStyles(variant: string): string {
  switch (variant) {
    case 'primary':
      return 'background-color: #28AF6E;';
    case 'secondary':
      return 'background-color: #F5F5F5;';
    case 'outline':
      return 'background-color: transparent; border-width: 1px; border-color: #28AF6E;';
    default:
      return 'background-color: #28AF6E;';
  }
}

function getSizeStyles(size: string): string {
  switch (size) {
    case 'small':
      return 'padding-vertical: 8px; padding-horizontal: 16px; min-height: 36px;';
    case 'medium':
      return 'padding-vertical: 12px; padding-horizontal: 24px; min-height: 44px;';
    case 'large':
      return 'padding-vertical: 16px; padding-horizontal: 32px; min-height: 52px;';
    default:
      return 'padding-vertical: 12px; padding-horizontal: 24px; min-height: 44px;';
  }
}

function getTextVariantStyles(variant: string): string {
  switch (variant) {
    case 'primary':
      return 'color: #FFFFFF;';
    case 'secondary':
      return 'color: #333333;';
    case 'outline':
      return 'color: #28AF6E;';
    default:
      return 'color: #FFFFFF;';
  }
}

function getTextSizeStyles(size: string): string {
  switch (size) {
    case 'small':
      return 'font-size: 14px;';
    case 'medium':
      return 'font-size: 16px;';
    case 'large':
      return 'font-size: 18px;';
    default:
      return 'font-size: 16px;';
  }
}
