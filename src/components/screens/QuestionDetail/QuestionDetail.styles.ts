import { StyleSheet } from '@emotion/primitives';

export default function () {
  return function () {
    const style: StyleSheet.NamedStyles = {};

    style.webview = `
      flex: 1;
    `;

    return style;
  };
}
