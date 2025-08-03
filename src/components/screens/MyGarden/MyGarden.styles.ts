import { StyleSheet } from '@emotion/primitives';

export default function () {
  return function (isDark: boolean) {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex: 1;
      justify-content: center;
      align-items: center;
      padding-horizontal: 24px;
    `;

    style.subtitle = `
      margin-top: 16px;
    `;

    return style;
  };
}
