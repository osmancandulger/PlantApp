import React from 'react';
import { Screen, Typography, Button, View } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './Welcome.styles';
import useRouting from ':hooks/useRoutings';
import { ScreenNames } from ':enums/screens';
import { useTranslation, Trans } from 'react-i18next';
import { Image } from 'react-native';

const Welcome: React.FC = () => {
  const styles = useStyleSheet(initialStyle());
  const { push } = useRouting();
  const { t } = useTranslation();

  const handleGetStarted = () => {
    push(ScreenNames.ONBOARDING);
  };

  return (
    <Screen>
      {/* TODO: Add a background image */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography style={styles.title}>
            <Trans
              i18nKey="get-started.title"
              values={{ appName: 'PlantApp' }}
              components={{
                bold: (
                  <Typography variant="h1" style={styles.titleBold}>
                    <></>
                  </Typography>
                ),
              }}
            />
          </Typography>
          <Typography style={styles.subtitle}>{t('get-started.subtitle')}</Typography>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.plantPlaceholder}>
            <Image
              source={require('../../../assets/images/plant-scan-img.png')}
              style={styles.plantImage}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            title="Get Started"
            onPress={handleGetStarted}
            size="large"
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <Typography align="center" style={styles.termsNotice}>
            <Trans
              i18nKey="get-started.terms-notice"
              components={{
                underline: (
                  <Typography style={[styles.termsNotice, styles.termsNoticeUnderline]}>
                    <></>
                  </Typography>
                ),
              }}
            />
          </Typography>
        </View>
      </View>
    </Screen>
  );
};

export default Welcome;
