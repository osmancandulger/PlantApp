import React from 'react';
import { Screen, Typography, View } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Diagnose.styles';

const Diagnose: React.FC = () => {
  const styles = useStyleSheet(initialStyle());

  return (
    <Screen backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <Typography variant="h2" color="primary" align="center">
          Diagnose
        </Typography>
        <Typography variant="body1" color="secondary" align="center" style={styles.subtitle}>
          Coming Soon
        </Typography>
      </View>
    </Screen>
  );
};

export default Diagnose;
