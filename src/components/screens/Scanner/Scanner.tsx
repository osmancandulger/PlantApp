import React from 'react';
import { Screen, Typography, View } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Scanner.styles';
import { t } from 'i18next';

const Scanner: React.FC = () => {
  const styles = useStyleSheet(initialStyle());

  return (
    <Screen backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <Typography variant="h2" color="primary" align="center">
          {t('scanner.screen.title')}
        </Typography>
        <Typography variant="body1" color="secondary" align="center" style={styles.subtitle}>
          {t('common.coming-soon.label')}
        </Typography>
      </View>
    </Screen>
  );
};

export default Scanner;
