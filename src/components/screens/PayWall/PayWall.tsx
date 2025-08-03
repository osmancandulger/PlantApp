/* eslint-disable react/no-unstable-nested-components */
import React, { useLayoutEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { Screen, Typography, View, SvgIcon, Button, TouchableOpacity } from ':atoms/';
import useStyleSheet from ':hooks/useStyleSheet';
import initialStyle from './PayWall.styles';
import { css } from '@emotion/native';
import { Trans } from 'react-i18next';
import { t } from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setOnboardingCompleted } from ':store/slices/userSlice';
import { useNavigation } from '@react-navigation/native';

const PayWall: React.FC = () => {
  const styles = useStyleSheet(initialStyle());
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleOnTapContinue = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      dispatch(setOnboardingCompleted(true));
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <></>,
      headerRight: () => (
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={css(styles.closeButton)}
          onPress={() => {
            handleOnTapContinue();
          }}
        >
          <Typography style={styles.closeButtonText}>x</Typography>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const features = [
    {
      title: t('paywall.content.feature.unlimited.title'),
      subtitle: t('paywall.content.feature.unlimited.subtitle'),
      icon: 'scanner',
    },
    {
      title: t('paywall.content.feature.faster.title'),
      subtitle: t('paywall.content.feature.faster.subtitle'),
      icon: 'gauge',
    },
    {
      title: t('paywall.content.feature.detailed.title'),
      subtitle: t('paywall.content.feature.detailed.subtitle'),
      icon: 'leaves',
    },
  ];

  const subscriptionOptions = [
    {
      id: '1_month',
      title: t('paywall.content.subscription.1_month.title'),
      subtitle: t('paywall.content.subscription.1_month.subtitle'),
      isPopular: false,
      isSelected: false,
      CustomSubTitle: (
        <Typography style={styles.subscriptionSubtitleLight}>
          <Trans
            i18nKey="paywall.content.subscription.1_month.subtitle"
            components={{
              bold: (
                <Typography variant="h1" style={styles.subscriptionSubtitleBold}>
                  <></>
                </Typography>
              ),
            }}
          />
        </Typography>
      ),
    },
    {
      id: '1_year',
      title: t('paywall.content.subscription.1_year.title'),
      subtitle: t('paywall.content.subscription.1_year.subtitle'),
      isPopular: true,
      isSelected: true,
      badge: t('paywall.content.subscription.1_year.badge'),
    },
  ];

  const [selectedOption, setSelectedOption] = useState(() => {
    const defaultSelected = subscriptionOptions.find((option) => option.isSelected);
    return defaultSelected?.id || '1_year';
  });

  return (
    <Screen style={styles.background} safeArea={false}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/paywall-background.png')}
          style={css(styles.backgroundImage)}
        />
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            <View style={styles.contentTitleContainer}>
              <Typography style={styles.contentTitle}>
                <Trans
                  i18nKey="paywall.content.title"
                  components={{
                    bold: (
                      <Typography
                        variant="h1"
                        style={[styles.contentTitle, styles.contentTitleBold]}
                      >
                        <></>
                      </Typography>
                    ),
                  }}
                />
              </Typography>
              <Typography style={styles.contentSubtitle}>
                {t('paywall.content.subtitle')}
              </Typography>
            </View>
            <View style={styles.contentFeaturesContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.featuresScrollContent}
              >
                {features.map((feature) => (
                  <View style={styles.featureCard}>
                    <View style={styles.featureIconContainer}>
                      <SvgIcon name={feature.icon} />
                    </View>
                    <View style={styles.featureTextContainer}>
                      <Typography variant="h3" color="white" style={styles.featureTitle}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="white" style={styles.featureSubtitle}>
                        {feature.subtitle}
                      </Typography>
                    </View>
                  </View>
                ))}
              </ScrollView>
              <View style={styles.subscriptionOptionsContainer}>
                {/* TODO: Add LinearGradient */}
                {subscriptionOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.subscriptionOption,
                      selectedOption === option.id && styles.subscriptionOptionSelected,
                    ]}
                    onPress={() => setSelectedOption(option.id)}
                  >
                    <View style={styles.subscriptionOptionContent}>
                      <View style={styles.subscriptionOptionLeft}>
                        <View
                          style={[
                            styles.radioButton,
                            selectedOption === option.id && styles.radioButtonSelected,
                          ]}
                        >
                          {selectedOption === option.id && (
                            <View style={styles.radioButtonSelectedInner} />
                          )}
                        </View>
                        <View style={styles.subscriptionOptionText}>
                          <Typography style={styles.subscriptionTitle}>{option.title}</Typography>
                          {!option.CustomSubTitle ? (
                            <Typography style={styles.subscriptionSubtitle}>
                              {option.subtitle}
                            </Typography>
                          ) : (
                            option.CustomSubTitle
                          )}
                        </View>
                      </View>
                      {option.badge && (
                        <View style={styles.badgeContainer}>
                          <Typography style={styles.badgeText}>{option.badge}</Typography>
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.footerContainer}>
                <Button
                  title={t('paywall.content.footer.button.title')}
                  onPress={handleOnTapContinue}
                  style={styles.footerButton}
                  textStyle={styles.footerButtonText}
                />
                <Typography style={styles.footerText}>
                  {t('paywall.content.footer.subscription-notice.text')}
                </Typography>
                <View style={styles.footerLinksContainer}>
                  <TouchableOpacity onPress={() => {}}>
                    <Typography style={styles.footerLinkText}>
                      {t('paywall.content.footer.terms.title')}
                    </Typography>
                  </TouchableOpacity>
                  <Typography style={styles.footerLinkSeparator}>•</Typography>
                  <TouchableOpacity onPress={() => {}}>
                    <Typography style={styles.footerLinkText}>
                      {t('paywall.content.footer.privacy.title')}
                    </Typography>
                  </TouchableOpacity>
                  <Typography style={styles.footerLinkSeparator}>•</Typography>
                  <TouchableOpacity onPress={() => {}}>
                    <Typography style={styles.footerLinkText}>
                      {t('paywall.content.footer.restore.title')}
                    </Typography>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default PayWall;
