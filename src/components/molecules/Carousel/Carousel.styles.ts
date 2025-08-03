import { StyleSheet } from '@emotion/primitives';
import { Theme } from '@emotion/react';

export default function () {
  return function (theme: Theme) {
    const style: StyleSheet.NamedStyles = {};

    style.pagerContainer = `
      width: 100%;
      height: 400px;
      flex: 1;
    `;

    style.indicatorContainer = `
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
  `;
    style.indicator = `
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${theme.color.overlayDark};
  `;
    style.activeIndicator = `
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${theme.color.textPrimay};
  `;
    return style;
  };
}
