import React from 'react';
import { css } from '@emotion/native';
import { ViewProps } from '.';
import { View as PureView } from 'react-native';

const View = React.forwardRef<PureView, ViewProps>((props, ref) => {
  const { style, children, ...rest } = props;

  return (
    <PureView ref={ref} style={css(style)} {...rest}>
      {children}
    </PureView>
  );
});

export default View;
