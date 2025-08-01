import React from 'react';
import { RowProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Row.styles';
import { View } from ':atoms/';

const Row = ({ style, children }: RowProps) => {
  const defaultStyle = useStyleSheet(initialStyle());
  return <View style={[style, defaultStyle.row]}>{children}</View>;
};

export default Row;
