import React from 'react';
import { Screen, Typography, View } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './MyGarden.styles';

const MyGarden: React.FC = () => {
  const styles = useStyleSheet(initialStyle());

  return (
    <Screen backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <Typography variant="h2" color="primary" align="center">
          My Garden
        </Typography>
        <Typography variant="body1" color="secondary" align="center" style={styles.subtitle}>
          Coming Soon
        </Typography>
      </View>
    </Screen>
  );
};

export default MyGarden;
