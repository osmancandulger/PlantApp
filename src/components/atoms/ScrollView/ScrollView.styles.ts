import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.scrollView = `
      flex: 1;
    `;

    style.contentContainer = `
      flex-grow: 1;
    `;

    return style;
  };
}
