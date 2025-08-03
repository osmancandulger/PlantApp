import React from 'react';
import { Screen, Typography, View } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Settings.styles';
import { t } from 'i18next';

const Settings: React.FC = () => {
  const styles = useStyleSheet(initialStyle());

  return (
    <Screen backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <Typography>{t('diagnose.screen.title')}</Typography>
        <Typography style={styles.subtitle}>{t('common.coming-soon.label')}</Typography>
      </View>
    </Screen>
  );
};

export default Settings;
