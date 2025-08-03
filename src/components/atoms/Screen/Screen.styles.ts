import { StyleSheet } from '@emotion/primitives';

export default function (backgroundColor: string = '#FFFFFF') {
  return function () {
    const style: StyleSheet.NamedStyles = {};

    style.container = `
      flex: 1;
      background-color: ${backgroundColor};
    `;

    return style;
  };
}
