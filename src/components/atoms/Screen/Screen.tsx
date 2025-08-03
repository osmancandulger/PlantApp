import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { css } from '@emotion/native';
import { ScreenProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Screen.styles';

const Screen: React.FC<ScreenProps> = ({
  children,
  backgroundColor = '#FFFFFF',
  safeArea = true,
  style,
  ...props
}) => {
  const styles = useStyleSheet(initialStyle(backgroundColor));
  const Container = safeArea ? SafeAreaView : View;

  return (
    <>
      <Container style={css([styles.container, style])} {...props}>
        {children}
      </Container>
    </>
  );
};

export default Screen;
