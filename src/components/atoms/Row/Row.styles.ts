import { StyleSheet } from '@emotion/primitives';
export default function () {
  return function () {
    const style: StyleSheet.NamedStyles = {};
    style.row = `
    flex-direction:row;
    `;
    return style;
  };
}
