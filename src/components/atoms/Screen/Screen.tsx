import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { css } from '@emotion/native';
import { ScreenProps } from '.';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Screen.styles';

const Screen: React.FC<ScreenProps> = ({
  children,
  backgroundColor = '#FFFFFF',
  statusBarStyle = 'dark-content',
  safeArea = true,
  style,
  ...props
}) => {
  const styles = useStyleSheet(initialStyle(backgroundColor));
  const Container = safeArea ? SafeAreaView : View;

  return (
    <>
      <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
      <Container style={css([styles.container, style])} {...props}>
        {children}
      </Container>
    </>
  );
};

export default Screen;
